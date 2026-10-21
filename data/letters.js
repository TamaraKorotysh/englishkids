// «Полянка букв» — алфавит для тех, кто только начинает.
// У каждой буквы: имя (как она называется) и звук (как звучит в словах), слово-пример с картинкой.
// Звуки записаны заранее: assets/audio/letters/<буква>-name.mp3, -sound.mp3, -word.mp3
// nameRu / soundRu — подсказка русскими буквами для детей, которые читают по-русски.
window.LETTERS = {
  letters: [
    { l:'a', nameRu:'эй',     soundRu:'э',  word:'fruits_veg_1_apple', tip:'Широко улыбнись и скажи «э» — как в apple.' },
    { l:'b', nameRu:'би',     soundRu:'б',  word:'toys_1_ball' },
    { l:'c', nameRu:'си',     soundRu:'к',  word:'animals_1_cat',      tip:'Чаще всего звучит как «к». А перед e, i, y — как «с».' },
    { l:'d', nameRu:'ди',     soundRu:'д',  word:'animals_1_dog' },
    { l:'e', nameRu:'и',      soundRu:'э',  word:'food_2_egg',         tip:'Буква называется «и», а в словах часто звучит как «э».' },
    { l:'f', nameRu:'эф',     soundRu:'ф',  word:'animals_2_fish' },
    { l:'g', nameRu:'джи',    soundRu:'г',  word:'animals_4_goat',     tip:'Называется «джи», а в словах чаще звучит как «г».' },
    { l:'h', nameRu:'эйч',    soundRu:'х',  word:'clothes_3_hat',      tip:'Это не русская Н! Звучит как лёгкий выдох «х».' },
    { l:'i', nameRu:'ай',     soundRu:'и',  word:'insect',             tip:'Называется «ай», а в коротких словах звучит как короткое «и».' },
    { l:'j', nameRu:'джей',   soundRu:'дж', word:'food_1_juice' },
    { l:'k', nameRu:'кей',    soundRu:'к',  word:'toys_1_kite' },
    { l:'l', nameRu:'эл',     soundRu:'л',  word:'animals_5_lion' },
    { l:'m', nameRu:'эм',     soundRu:'м',  word:'food_1_milk' },
    { l:'n', nameRu:'эн',     soundRu:'н',  word:'body_2_nose' },
    { l:'o', nameRu:'оу',     soundRu:'о',  word:'octopus' },
    { l:'p', nameRu:'пи',     soundRu:'п',  word:'animals_3_pig',      tip:'Это не русская Р! Звучит как «п».' },
    { l:'q', nameRu:'кью',    soundRu:'кв', word:'queen',              tip:'Почти всегда ходит вместе с u: qu звучит как «кв».' },
    { l:'r', nameRu:'ар',     soundRu:'р',  word:'colors_1_red',       tip:'Английское «р» мягкое: язык не дрожит.' },
    { l:'s', nameRu:'эс',     soundRu:'с',  word:'nature_1_sun' },
    { l:'t', nameRu:'ти',     soundRu:'т',  word:'nature_3_tree' },
    { l:'u', nameRu:'ю',      soundRu:'а',  word:'tools_2_umbrella',   tip:'Называется «ю», а в коротких словах звучит почти как «а».' },
    { l:'v', nameRu:'ви',     soundRu:'в',  word:'van' },
    { l:'w', nameRu:'дабл-ю', soundRu:'у',  word:'home_2_window',      tip:'Губы трубочкой, как будто говоришь «у», и сразу следующий звук.' },
    { l:'x', nameRu:'экс',    soundRu:'кс', word:'home_3_box',         tip:'Это не русская Х! Звучит как «кс», как в слове box.' },
    { l:'y', nameRu:'уай',    soundRu:'й',  word:'colors_1_yellow',    tip:'Это не русская У! В начале слова звучит как «й».' },
    { l:'z', nameRu:'зи',     soundRu:'з',  word:'animals_5_zebra' },
  ],
  // Уроки «Полянки букв». letters — новые буквы урока; special — особая станция
  topics: {
    abcd:   { title:'Буквы A–D', letters:'abcd' },
    efgh:   { title:'Буквы E–H', letters:'efgh' },
    ijkl:   { title:'Буквы I–L', letters:'ijkl' },
    mnop:   { title:'Буквы M–P', letters:'mnop' },
    qrst:   { title:'Буквы Q–T', letters:'qrst' },
    uvw:    { title:'Буквы U–W', letters:'uvw' },
    xyz:    { title:'Буквы X–Z', letters:'xyz' },
    tricky: { title:'Буквы-обманщики', special:'tricky' },
    all:    { title:'Весь алфавит', special:'all' },
  },
  // Похожи на русские, а читаются по-другому: [английская буква, правильно, как хочется прочитать по-русски]
  tricky: [
    ['B', 'б', 'в'],
    ['H', 'х', 'н'],
    ['P', 'п', 'р'],
    ['C', 'к', 'с'],
    ['Y', 'й', 'у'],
    ['X', 'кс', 'х'],
    ['E', 'э', 'е'],
  ],
  // Читаются как русские — «честные» буквы
  honest: ['K', 'M', 'O', 'T'],
};
