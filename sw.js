// Работа без интернета.
// Страница и данные курса: сначала из сети (чтобы обновления приходили сразу), без сети — из запаса.
// Картинки, звуки и шрифты: сначала из запаса, иначе из сети с сохранением в запас.
// Список всех картинок присылает страница (сообщение 'precache'), и они докачиваются в фоне.
const CORE = 'ek-core-v2';
const MEDIA = 'ek-media-v1';
const CORE_FILES = [
  './', 'index.html', 'manifest.webmanifest',
  'data/course.js', 'data/grammar.js', 'data/sounds.js', 'data/examples.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-32.png',
  'fonts/nunito.css', 'fonts/nunito-latin.woff2', 'fonts/nunito-latin-ext.woff2', 'fonts/nunito-cyrillic.woff2', 'fonts/nunito-cyrillic-ext.woff2',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CORE).then(c => c.addAll(CORE_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => ![CORE, MEDIA].includes(k)).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

function isMedia(url){
  return url.pathname.includes('/assets/') || url.pathname.includes('/icons/')
    || url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com';
}

async function networkFirst(req){
  const cache = await caches.open(CORE);
  try {
    const res = await fetch(req);
    if(res.ok) cache.put(req, res.clone());
    return res;
  } catch(err){
    const hit = await cache.match(req, { ignoreSearch: true }) || (req.mode === 'navigate' && await cache.match('index.html'));
    if(hit) return hit;
    throw err;
  }
}
async function cacheFirst(req){
  const cache = await caches.open(MEDIA);
  const hit = await cache.match(req);
  if(hit) return hit;
  const res = await fetch(req);
  // Сохраняем удачные ответы; шрифты Google приходят «непрозрачными» (status 0) — их тоже
  if(res.ok || res.type === 'opaque') cache.put(req, res.clone());
  return res;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(isMedia(url)){ e.respondWith(cacheFirst(req)); return; }
  if(url.origin === location.origin) e.respondWith(networkFirst(req));
});

// Фоновая докачка картинок: по 6 штук, пропуская уже сохранённые и отсутствующие
self.addEventListener('message', e => {
  if(!e.data || e.data.type !== 'precache') return;
  e.waitUntil((async () => {
    const cache = await caches.open(MEDIA);
    const todo = [];
    for(const u of e.data.urls){ if(!(await cache.match(u))) todo.push(u); }
    for(let i = 0; i < todo.length; i += 6){
      await Promise.all(todo.slice(i, i + 6).map(u => fetch(u).then(r => { if(r.ok) return cache.put(u, r); }).catch(() => {})));
    }
  })());
});
