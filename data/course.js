// Курс английского: уровни → темы → уроки → слова, плюс места станций.
// Формат строки слова:  английский | русский | транскрипция | эмодзи (картинка OpenMoji, «-» — без картинки) | часть речи | id
// Части речи: n — исчисляемое (n:mice — особое множественное), u — неисчисляемое, pl — только множественное,
// pn — имя, v — глагол, a — прилагательное, adv — наречие, num — число, prep — предлог, det, x — фраза.
// id старых слов сохранены — по ним хранится прогресс, картинки и озвучка.
window.COURSE_TEXT = String.raw`
LEVEL 1 | Лесная опушка | Starters

UNIT animals | Ферма | #ff9f43
LESSON animals_1 | Домашние питомцы 1
cat | кот | /kæt/ | 🐱 | n | animals_1_cat
dog | собака | /dɔːɡ/ | 🐶 | n | animals_1_dog
rabbit | кролик | /ˈræbɪt/ | 🐰 | n | animals_1_rabbit
LESSON animals_2 | Домашние питомцы 2
fish | рыбка | /fɪʃ/ | 🐟 | n:fish | animals_2_fish
bird | птичка | /bɜːrd/ | 🐦 | n | animals_2_bird
mouse | мышь | /maʊs/ | 🐭 | n:mice | animals_2_mouse
LESSON animals_3 | Животные фермы 1
horse | лошадь | /hɔːrs/ | 🐴 | n | animals_3_horse
cow | корова | /kaʊ/ | 🐮 | n | animals_3_cow
pig | свинья | /pɪɡ/ | 🐷 | n | animals_3_pig
sheep | овца | /ʃiːp/ | 🐑 | n:sheep | animals_3_sheep
LESSON numbers_1 | Счёт 1–5
one | один | /wʌn/ | 1️⃣ | num | numbers_1_one
two | два | /tuː/ | 2️⃣ | num | numbers_1_two
three | три | /θriː/ | 3️⃣ | num | numbers_1_three
four | четыре | /fɔːr/ | 4️⃣ | num | numbers_1_four
five | пять | /faɪv/ | 5️⃣ | num | numbers_1_five
STATION grammar plural | animals_plural
LESSON animals_4 | Животные фермы 2
chicken | курица | /ˈtʃɪkɪn/ | 🐔 | n | animals_4_chicken
duck | утка | /dʌk/ | 🦆 | n | animals_4_duck
goat | коза | /ɡoʊt/ | 🐐 | n | animals_4_goat
LESSON animals_river | У реки
ship | корабль | /ʃɪp/ | 🚢 | n | transport_3_ship
tree | дерево | /triː/ | 🌳 | n | nature_3_tree
bee | пчела | /biː/ | 🐝 | n | animals_8_bee
green | зелёный | /ɡriːn/ | 🟢 | a | colors_1_green
STATION sound i_ee | animals_vowels

UNIT toys | Игрушки и цвета | #9b59b6
LESSON u02_1 | Цвета 1
red | красный | /red/ | 🔴 | a | colors_1_red
blue | синий | /bluː/ | 🔵 | a | colors_1_blue
yellow | жёлтый | /ˈjeloʊ/ | 🟡 | a | colors_1_yellow
black | чёрный | /blæk/ | ⚫ | a | colors_2_black
white | белый | /waɪt/ | ⚪ | a | colors_2_white
LESSON u02_2 | Цвета 2
pink | розовый | /pɪŋk/ | 🩷 | a | colors_2_pink
purple | фиолетовый | /ˈpɜːrpl/ | 🟣 | a | colors_2_purple
brown | коричневый | /braʊn/ | 🟤 | a | colors_3_brown
gray | серый | /ɡreɪ/ | ⬜ | a | colors_3_gray
LESSON u02_3 | Игрушки 1
ball | мяч | /bɔːl/ | ⚽ | n | toys_1_ball
doll | кукла | /dɑːl/ | 🪆 | n | toys_1_doll
kite | воздушный змей | /kaɪt/ | 🪁 | n | toys_1_kite
balloon | воздушный шар | /bəˈluːn/ | 🎈 | n | toys_1_balloon
robot | робот | /ˈroʊbɑːt/ | 🤖 | n | toys_2_robot
LESSON u02_4 | Игрушки 2
toy | игрушка | /tɔɪ/ | 🧸 | n | toys_1_toy
puzzle | пазл | /ˈpʌzl/ | 🧩 | n | toys_2_puzzle
blocks | кубики | /blɑːks/ | 🧱 | pl | toys_2_blocks
teddy bear | плюшевый мишка | /ˌtedi ˈber/ | 🧸 | n | toys_2_teddy-bear
game | игра | /ɡeɪm/ | 🎮 | n | toys_3_game
STATION grammar colours
LESSON u02_5 | Счёт 6–10
six | шесть | /sɪks/ | 6️⃣ | num | numbers_2_six
seven | семь | /ˈsevn/ | 7️⃣ | num | numbers_2_seven
eight | восемь | /eɪt/ | 8️⃣ | num | numbers_2_eight
nine | девять | /naɪn/ | 9️⃣ | num | numbers_2_nine
ten | десять | /ten/ | 🔟 | num | numbers_2_ten
LESSON u02_6 | Мои вещи
box | коробка | /bɑːks/ | 📦 | n:boxes | home_3_box
bag | сумка | /bæɡ/ | 👜 | n | bag
pen | ручка | /pen/ | 🖊️ | n | school_1_pen
bed | кровать | /bed/ | 🛏️ | n | home_2_bed
hat | шапка | /hæt/ | 🧢 | n | clothes_3_hat
LESSON u02_7 | Машинки и поезда
car | машина | /kɑːr/ | 🚗 | n | transport_1_car
bus | автобус | /bʌs/ | 🚌 | n:buses | transport_1_bus
train | поезд | /treɪn/ | 🚆 | n | transport_1_train
plane | самолёт | /pleɪn/ | ✈️ | n | transport_3_plane
boat | лодка | /boʊt/ | ⛵ | n | transport_3_boat
LESSON u02_8 | Ещё игрушки
camera | фотоаппарат | /ˈkæmərə/ | 📷 | n | toys_3_camera
swing | качели | /swɪŋ/ | 🛝 | n | toys_2_swing
drum | барабан | /drʌm/ | 🥁 | n | drum
guitar | гитара | /ɡɪˈtɑːr/ | 🎸 | n | guitar
bike | велосипед | /baɪk/ | 🚲 | n | bike
STATION sound a_e

UNIT family | Моя семья | #e74c3c
LESSON u03_1 | Семья 1
mom | мама | /mɑːm/ | 👩 | n | family_1_mom
dad | папа | /dæd/ | 👨 | n | family_1_dad
sister | сестра | /ˈsɪstər/ | 👧 | n | family_1_sister
brother | брат | /ˈbrʌðər/ | 👦 | n | family_1_brother
LESSON u03_2 | Семья 2
baby | малыш | /ˈbeɪbi/ | 👶 | n:babies | family_2_baby
grandma | бабушка | /ˈɡrænmɑː/ | 👵 | n | family_2_grandma
grandpa | дедушка | /ˈɡrænpɑː/ | 👴 | n | family_2_grandpa
family | семья | /ˈfæməli/ | 👪 | n:families | family_2_family
LESSON u03_3 | Люди
boy | мальчик | /bɔɪ/ | 👦 | n | family_3_boy
girl | девочка | /ɡɜːrl/ | 👧 | n | family_3_girl
man | мужчина | /mæn/ | 👨 | n:men | family_3_man
woman | женщина | /ˈwʊmən/ | 👩 | n:women | family_3_woman
friend | друг | /frend/ | 🧑‍🤝‍🧑 | n | family_3_friend
LESSON u03_4 | Имена
Tom | Том | /tɑːm/ | 👦 | pn | tom
Anna | Анна | /ˈænə/ | 👧 | pn | anna
Ben | Бен | /ben/ | 🧒 | pn | ben
Lucy | Люси | /ˈluːsi/ | 👱‍♀️ | pn | lucy
LESSON u03_5 | Чувства 1
happy | счастливый | /ˈhæpi/ | 😊 | a | feelings_1_happy
sad | грустный | /sæd/ | 😢 | a | feelings_1_sad
angry | злой | /ˈæŋɡri/ | 😠 | a | feelings_1_angry
scared | испуганный | /skerd/ | 😨 | a | feelings_1_scared
STATION grammar be
LESSON u03_6 | Чувства 2
tired | уставший | /ˈtaɪərd/ | 😴 | a | feelings_2_tired
hungry | голодный | /ˈhʌŋɡri/ | 😋 | a | feelings_2_hungry
thirsty | хочет пить | /ˈθɜːrsti/ | 🥤 | a | feelings_2_thirsty
funny | смешной | /ˈfʌni/ | 😄 | a | feelings_2_funny
LESSON u03_7 | Какой? 1
big | большой | /bɪɡ/ | 🐘 | a | feelings_3_big
small | маленький | /smɔːl/ | 🐭 | a | feelings_3_small
old | старый | /oʊld/ | 📜 | a | feelings_4_old
new | новый | /nuː/ | ✨ | a | feelings_4_new
LESSON u03_8 | Какой? 2
good | хороший | /ɡʊd/ | 👍 | a | feelings_4_good
bad | плохой | /bæd/ | 👎 | a | feelings_4_bad
hot | горячий | /hɑːt/ | 🔥 | a | feelings_3_hot
cold | холодный | /koʊld/ | 🧊 | a | feelings_3_cold
LESSON u03_9 | Мой дом
house | дом | /haʊs/ | 🏠 | n | home_1_house
room | комната | /ruːm/ | 🚪 | n | home_1_room
door | дверь | /dɔːr/ | 🚪 | n | home_2_door
window | окно | /ˈwɪndoʊ/ | 🪟 | n | home_2_window
STATION sound sh_s

UNIT food | Еда | #e67e22
LESSON u04_1 | Фрукты 1
apple | яблоко | /ˈæpl/ | 🍎 | n | fruits_veg_1_apple
banana | банан | /bəˈnænə/ | 🍌 | n | fruits_veg_1_banana
orange | апельсин | /ˈɔːrɪndʒ/ | 🍊 | n | fruits_veg_1_orange
lemon | лимон | /ˈlemən/ | 🍋 | n | fruits_veg_1_lemon
LESSON u04_2 | Фрукты 2
grapes | виноград | /ɡreɪps/ | 🍇 | pl | fruits_veg_2_grapes
strawberry | клубника | /ˈstrɔːberi/ | 🍓 | n:strawberries | fruits_veg_2_strawberry
watermelon | арбуз | /ˈwɔːtərˌmelən/ | 🍉 | n | fruits_veg_2_watermelon
pineapple | ананас | /ˈpaɪˌnæpl/ | 🍍 | n | fruits_veg_2_pineapple
LESSON u04_3 | Фрукты 3
pear | груша | /per/ | 🍐 | n | fruits_veg_3_pear
peach | персик | /piːtʃ/ | 🍑 | n:peaches | fruits_veg_3_peach
cherry | вишня | /ˈtʃeri/ | 🍒 | n:cherries | fruits_veg_3_cherry
coconut | кокос | /ˈkoʊkənʌt/ | 🥥 | n | coconut
LESSON u04_4 | Напитки
milk | молоко | /mɪlk/ | 🥛 | u | food_1_milk
juice | сок | /dʒuːs/ | 🧃 | u | food_1_juice
tea | чай | /tiː/ | ☕ | u | food_1_tea
water | вода | /ˈwɔːtər/ | 💧 | u | water
like | нравиться | /laɪk/ | ❤️ | v | verbs_11_like
STATION grammar like
LESSON u04_5 | Еда 1
bread | хлеб | /bred/ | 🍞 | u | food_3_bread
rice | рис | /raɪs/ | 🍚 | u | food_3_rice
soup | суп | /suːp/ | 🍲 | u | food_3_soup
meat | мясо | /miːt/ | 🥩 | u | food_3_meat
egg | яйцо | /eɡ/ | 🥚 | n | food_2_egg
LESSON u04_6 | Еда 2
sandwich | бутерброд | /ˈsænwɪtʃ/ | 🥪 | n:sandwiches | food_4_sandwich
pizza | пицца | /ˈpiːtsə/ | 🍕 | n | food_4_pizza
salad | салат | /ˈsæləd/ | 🥗 | n | food_4_salad
cheese | сыр | /tʃiːz/ | 🧀 | u | food_2_cheese
LESSON u04_7 | Сладкое
cake | торт | /keɪk/ | 🎂 | n | food_5_cake
chocolate | шоколад | /ˈtʃɑːklət/ | 🍫 | u | food_5_chocolate
candy | конфета | /ˈkændi/ | 🍬 | n:candies | food_5_candy
ice cream | мороженое | /ˌaɪs ˈkriːm/ | 🍦 | u | food_5_ice-cream
cookie | печенье | /ˈkʊki/ | 🍪 | n | food_5_cookie
LESSON u04_8 | Овощи 1
tomato | помидор | /təˈmeɪtoʊ/ | 🍅 | n:tomatoes | fruits_veg_4_tomato
potato | картофель | /pəˈteɪtoʊ/ | 🥔 | n:potatoes | fruits_veg_4_potato
carrot | морковь | /ˈkærət/ | 🥕 | n | fruits_veg_4_carrot
onion | лук | /ˈʌnjən/ | 🧅 | n | fruits_veg_4_onion
LESSON u04_9 | Овощи 2
cucumber | огурец | /ˈkjuːkʌmbər/ | 🥒 | n | fruits_veg_4_cucumber
pepper | перец | /ˈpepər/ | 🫑 | n | fruits_veg_5_pepper
corn | кукуруза | /kɔːrn/ | 🌽 | u | fruits_veg_5_corn
mushroom | гриб | /ˈmʌʃruːm/ | 🍄 | n | fruits_veg_5_mushroom
broccoli | брокколи | /ˈbrɑːkəli/ | 🥦 | u | fruits_veg_5_broccoli
STATION sound ch_sh

UNIT body | Тело | #1abc9c
LESSON u05_1 | Голова
head | голова | /hed/ | 👤 | n | body_1_head
hair | волосы | /her/ | 💇 | u | body_1_hair
eye | глаз | /aɪ/ | 👁️ | n | body_1_eye
ear | ухо | /ɪr/ | 👂 | n | body_1_ear
LESSON u05_2 | Лицо
nose | нос | /noʊz/ | 👃 | n | body_2_nose
mouth | рот | /maʊθ/ | 👄 | n | body_2_mouth
face | лицо | /feɪs/ | 😊 | n | body_2_face
tooth | зуб | /tuːθ/ | 🦷 | n:teeth | body_2_tooth
LESSON u05_3 | Тело 1
hand | рука (кисть) | /hænd/ | ✋ | n | body_3_hand
arm | рука | /ɑːrm/ | 💪 | n | body_3_arm
leg | нога | /leɡ/ | 🦵 | n | body_3_leg
foot | стопа | /fʊt/ | 🦶 | n:feet | body_3_foot
LESSON u05_4 | Тело 2
finger | палец | /ˈfɪŋɡər/ | 👆 | n | body_4_finger
belly | животик | /ˈbeli/ | 🤰 | n | body_4_belly
back | спина | /bæk/ | 🙆 | n | body_4_back
monster | чудище | /ˈmɑːnstər/ | 👾 | n | monster
STATION grammar have_got
LESSON u05_5 | Чувства тела 1
see | видеть | /siː/ | 👀 | v | verbs_1_see
look | смотреть | /lʊk/ | 👁️ | v | verbs_1_look
hear | слышать | /hɪr/ | 👂 | v | verbs_1_hear
listen | слушать | /ˈlɪsn/ | 🎧 | v | verbs_1_listen
LESSON u05_6 | Чувства тела 2
touch | трогать | /tʌtʃ/ | ✋ | v | verbs_16_touch
smell | чувствовать запах | /smel/ | 👃 | v | verbs_21_smell
taste | пробовать на вкус | /teɪst/ | 👅 | v | verbs_21_taste
point | указывать пальцем | /pɔɪnt/ | 👉 | v | verbs_16_point
LESSON u05_7 | Числа 11–15
eleven | одиннадцать | /ɪˈlevn/ | 🔢 | num | numbers_3_eleven
twelve | двенадцать | /twelv/ | 🔢 | num | numbers_3_twelve
thirteen | тринадцать | /ˌθɜːrˈtiːn/ | 🔢 | num | numbers_3_thirteen
fourteen | четырнадцать | /ˌfɔːrˈtiːn/ | 🔢 | num | numbers_4_fourteen
fifteen | пятнадцать | /ˌfɪfˈtiːn/ | 🔢 | num | numbers_4_fifteen
LESSON u05_8 | Числа 16–20
sixteen | шестнадцать | /ˌsɪkˈstiːn/ | 🔢 | num | sixteen
seventeen | семнадцать | /ˌsevnˈtiːn/ | 🔢 | num | seventeen
eighteen | восемнадцать | /ˌeɪˈtiːn/ | 🔢 | num | eighteen
nineteen | девятнадцать | /ˌnaɪnˈtiːn/ | 🔢 | num | nineteen
twenty | двадцать | /ˈtwenti/ | 🔢 | num | numbers_4_twenty
STATION sound th_s

UNIT clothes | Одежда и погода | #3498db
LESSON u06_1 | Одежда 1
shirt | рубашка | /ʃɜːrt/ | 👕 | n | clothes_1_shirt
dress | платье | /dres/ | 👗 | n:dresses | clothes_1_dress
skirt | юбка | /skɜːrt/ | 👗 | n | clothes_1_skirt
pants | брюки | /pænts/ | 👖 | pl | clothes_2_pants
LESSON u06_2 | Одежда 2
socks | носки | /sɑːks/ | 🧦 | pl | clothes_2_socks
shoes | туфли | /ʃuːz/ | 👟 | pl | clothes_2_shoes
boots | ботинки | /buːts/ | 🥾 | pl | clothes_4_boots
glasses | очки | /ˈɡlæsɪz/ | 👓 | pl | clothes_4_glasses
LESSON u06_3 | Тёплая одежда
coat | пальто | /koʊt/ | 🧥 | n | clothes_3_coat
jacket | куртка | /ˈdʒækɪt/ | 🧥 | n | clothes_3_jacket
gloves | перчатки | /ɡlʌvz/ | 🧤 | pl | clothes_3_gloves
scarf | шарф | /skɑːrf/ | 🧣 | n:scarves | clothes_3_scarf
LESSON u06_4 | Нужные вещи
pajamas | пижама | /pəˈdʒɑːməz/ | 😴 | pl | clothes_4_pajamas
backpack | рюкзак | /ˈbækpæk/ | 🎒 | n | clothes_4_backpack
watch | часы (наручные) | /wɑːtʃ/ | ⌚ | n:watches | watch
umbrella | зонт | /ʌmˈbrelə/ | ☂️ | n | tools_2_umbrella
STATION grammar this_these
LESSON u06_5 | Умываемся и одеваемся
wear | носить одежду | /wer/ | 👕 | v | verbs_8_wear
wash | мыть | /wɑːʃ/ | 🧼 | v | verbs_8_wash
brush | чистить | /brʌʃ/ | 🪥 | v | verbs_8_brush
dry | сушить | /draɪ/ | - | v | dry
LESSON u06_6 | Погода 1
sun | солнце | /sʌn/ | ☀️ | n | nature_1_sun
rain | дождь | /reɪn/ | 🌧️ | u | nature_2_rain
snow | снег | /snoʊ/ | ❄️ | u | nature_2_snow
wind | ветер | /wɪnd/ | 🌬️ | u | nature_2_wind
LESSON u06_7 | Погода 2
sunny | солнечно | /ˈsʌni/ | ☀️ | a | seasons_2_sunny
rainy | дождливо | /ˈreɪni/ | 🌧️ | a | seasons_2_rainy
cloudy | облачно | /ˈklaʊdi/ | ☁️ | a | seasons_2_cloudy
snowy | снежно | /ˈsnoʊi/ | 🌨️ | a | seasons_2_snowy
windy | ветрено | /ˈwɪndi/ | 🌬️ | a | seasons_3_windy
LESSON u06_8 | Времена года
spring | весна | /sprɪŋ/ | 🌸 | n | seasons_1_spring
summer | лето | /ˈsʌmər/ | ☀️ | n | seasons_1_summer
fall | осень | /fɔːl/ | 🍂 | n | seasons_1_fall
winter | зима | /ˈwɪntər/ | ❄️ | n | seasons_1_winter
STATION sound w_v

UNIT home | Мой дом | #8e44ad
LESSON u07_1 | Комнаты
kitchen | кухня | /ˈkɪtʃɪn/ | 🍳 | n | kitchen
bathroom | ванная | /ˈbæθruːm/ | 🛁 | n | bathroom
bedroom | спальня | /ˈbedruːm/ | 🛏️ | n | bedroom
living room | гостиная | /ˈlɪvɪŋ ruːm/ | 🛋️ | n | living_room
LESSON u07_2 | Мебель 1
table | стол | /ˈteɪbl/ | 🪑 | n | home_1_table
chair | стул | /tʃer/ | 🪑 | n | home_1_chair
sofa | диван | /ˈsoʊfə/ | 🛋️ | n | home_2_sofa
lamp | лампа | /læmp/ | 💡 | n | home_3_lamp
LESSON u07_3 | Мебель 2
clock | часы | /klɑːk/ | 🕐 | n | home_3_clock
mirror | зеркало | /ˈmɪrər/ | 🪞 | n | home_4_mirror
key | ключ | /kiː/ | 🔑 | n | home_3_key
roof | крыша | /ruːf/ | 🏠 | n | home_4_roof
garden | сад | /ˈɡɑːrdn/ | 🌳 | n | home_4_garden
LESSON u07_4 | Где? 1
in | в | /ɪn/ | 📦 | prep | prepositions_1_in
on | на | /ɑːn/ | ⬆️ | prep | prepositions_1_on
under | под | /ˈʌndər/ | ⬇️ | prep | prepositions_1_under
next to | рядом | /ˌnekst ˈtuː/ | ↔️ | prep | prepositions_1_next-to
STATION grammar where
LESSON u07_5 | Где? 2
behind | за | /bɪˈhaɪnd/ | ⬅️ | prep | prepositions_2_behind
in front of | перед | /ɪn ˌfrʌnt ˈʌv/ | ➡️ | prep | prepositions_2_in-front-of
between | между | /bɪˈtwiːn/ | 🔀 | prep | prepositions_2_between
LESSON u07_6 | Кухня
fridge | холодильник | /frɪdʒ/ | 🧊 | n | kitchen_3_fridge
oven | духовка | /ˈʌvn/ | 🔥 | n | kitchen_3_oven
kettle | чайник | /ˈketl/ | 🫖 | n | kitchen_2_kettle
cup | чашка | /kʌp/ | ☕ | n | kitchen_1_cup
plate | тарелка | /pleɪt/ | 🍽️ | n | kitchen_2_plate
LESSON u07_7 | Посуда
fork | вилка | /fɔːrk/ | 🍴 | n | kitchen_1_fork
knife | нож | /naɪf/ | 🔪 | n:knives | kitchen_1_knife
spoon | ложка | /spuːn/ | 🥄 | n | kitchen_2_spoon
bowl | миска | /boʊl/ | 🥣 | n | kitchen_1_bowl
LESSON u07_8 | Ванная
towel | полотенце | /ˈtaʊəl/ | 🧻 | n | kitchen_3_towel
soap | мыло | /soʊp/ | 🧼 | u | kitchen_3_soap
toothbrush | зубная щётка | /ˈtuːθbrʌʃ/ | 🪥 | n:toothbrushes | kitchen_4_toothbrush
shower | душ | /ˈʃaʊər/ | 🚿 | n | kitchen_4_shower
toilet | туалет | /ˈtɔɪlət/ | 🚽 | n | kitchen_4_toilet
bottle | бутылка | /ˈbɑːtl/ | 🍼 | n | kitchen_4_bottle
STATION sound oo

UNIT school | Школа | #2980b9
LESSON u08_1 | Школьные вещи 1
book | книга | /bʊk/ | 📖 | n | school_1_book
pencil | карандаш | /ˈpensl/ | ✏️ | n | school_1_pencil
ruler | линейка | /ˈruːlər/ | 📏 | n | school_1_ruler
eraser | ластик | /ɪˈreɪzər/ | 🧽 | n | school_1_eraser
LESSON u08_2 | Школьные вещи 2
desk | парта | /desk/ | 🪑 | n | school_2_desk
paper | бумага | /ˈpeɪpər/ | 📄 | u | school_2_paper
board | доска | /bɔːrd/ | ⬛ | n | school_3_board
crayon | мелок | /ˈkreɪɑːn/ | 🖍️ | n | crayon
notebook | тетрадь | /ˈnoʊtbʊk/ | 📓 | n | notebook
LESSON u08_3 | В классе
classroom | класс | /ˈklæsruːm/ | 🏫 | n | school_2_classroom
picture | картинка | /ˈpɪktʃər/ | 🖼️ | n | school_2_picture
letter | буква | /ˈletər/ | 🔤 | n | school_2_letter
word | слово | /wɜːrd/ | 📝 | n | school_3_word
number | число | /ˈnʌmbər/ | 🔢 | n | school_3_number
LESSON u08_4 | Учимся 1
read | читать | /riːd/ | 📖 | v | verbs_9_read
write | писать | /raɪt/ | ✍️ | v | verbs_9_write
draw | рисовать | /drɔː/ | 🎨 | v | verbs_9_draw
open | открывать | /ˈoʊpən/ | 🔓 | v | verbs_14_open
close | закрывать | /kloʊz/ | 🔒 | v | verbs_14_close
STATION grammar imperative
LESSON u08_5 | На уроке
sit | сидеть | /sɪt/ | 🪑 | v | verbs_4_sit
stand | стоять | /stænd/ | 🧍 | v | verbs_4_stand
ask | спросить | /æsk/ | ❓ | v | verbs_2_ask
answer | отвечать | /ˈænsər/ | 💡 | v | verbs_3_answer
teacher | учитель | /ˈtiːtʃər/ | 🧑‍🏫 | n | teacher
LESSON u08_6 | Учимся 2
count | считать | /kaʊnt/ | 🔢 | v | verbs_10_count
learn | учиться | /lɜːrn/ | 📘 | v | verbs_10_learn
teach | учить | /tiːtʃ/ | 🧑‍🏫 | v | verbs_10_teach
paint | рисовать красками | /peɪnt/ | 🖌️ | v | verbs_10_paint
school | школа | /skuːl/ | 🏫 | n | school_3_school
LESSON u08_7 | Дни недели 1
Monday | понедельник | /ˈmʌndeɪ/ | 📅 | n | time_1_Monday
Tuesday | вторник | /ˈtuːzdeɪ/ | 📅 | n | time_1_Tuesday
Wednesday | среда | /ˈwenzdeɪ/ | 📅 | n | time_1_Wednesday
Thursday | четверг | /ˈθɜːrzdeɪ/ | 📅 | n | time_1_Thursday
LESSON u08_8 | Дни недели 2
Friday | пятница | /ˈfraɪdeɪ/ | 📅 | n | time_2_Friday
Saturday | суббота | /ˈsætərdeɪ/ | 📅 | n | time_2_Saturday
Sunday | воскресенье | /ˈsʌndeɪ/ | 📅 | n | time_2_Sunday
week | неделя | /wiːk/ | 🗓️ | n | time_4_week
day | день | /deɪ/ | ☀️ | n | time_4_day
STATION sound ay_ai

UNIT sport | Спорт и музыка | #229954
LESSON u09_1 | Движение 1
run | бегать | /rʌn/ | 🏃 | v | verbs_4_run
walk | ходить | /wɔːk/ | 🚶 | v | verbs_4_walk
jump | прыгать | /dʒʌmp/ | 🤸 | v | verbs_4_jump
climb | залезать | /klaɪm/ | 🧗 | v | verbs_5_climb
LESSON u09_2 | Движение 2
swim | плавать | /swɪm/ | 🏊 | v | verbs_5_swim
ride | ехать | /raɪd/ | 🚴 | v | verbs_5_ride
kick | пинать | /kɪk/ | 🦵 | v | verbs_16_kick
throw | бросать | /θroʊ/ | 🏐 | v | verbs_15_throw
catch | ловить | /kætʃ/ | 🧤 | v | verbs_15_catch
LESSON u09_3 | Спорт 1
soccer | футбол | /ˈsɑːkər/ | ⚽ | u | sports_1_soccer
basketball | баскетбол | /ˈbæskɪtˌbɔːl/ | 🏀 | u | sports_1_basketball
tennis | теннис | /ˈtenɪs/ | 🎾 | u | sports_1_tennis
baseball | бейсбол | /ˈbeɪsbɔːl/ | ⚾ | u | sports_2_baseball
LESSON u09_4 | Спорт 2
swimming | плавание | /ˈswɪmɪŋ/ | 🏊 | u | sports_1_swimming
running | бег | /ˈrʌnɪŋ/ | 🏃 | u | sports_1_running
skating | катание на коньках | /ˈskeɪtɪŋ/ | ⛸️ | u | sports_2_skating
skiing | лыжи | /ˈskiːɪŋ/ | ⛷️ | u | sports_2_skiing
volleyball | волейбол | /ˈvɑːlibɔːl/ | 🏐 | u | sports_2_volleyball
STATION grammar can
LESSON u09_5 | Игра
play | играть | /pleɪ/ | 🎲 | v | verbs_10_play
win | выигрывать | /wɪn/ | 🏆 | v | verbs_20_win
lose | терять | /luːz/ | 😕 | v | verbs_17_lose
start | начинать | /stɑːrt/ | ▶️ | v | verbs_20_start
stop | останавливаться | /stɑːp/ | 🛑 | v | verbs_20_stop
LESSON u09_6 | В парке
park | парк | /pɑːrk/ | 🏞️ | n | places_1_park
playground | детская площадка | /ˈpleɪɡraʊnd/ | 🛝 | n | places_2_playground
slide | горка | /slaɪd/ | 🛝 | n | slide
sand | песок | /sænd/ | 🏖️ | u | sand
LESSON u09_7 | Музыка
piano | пианино | /piˈænoʊ/ | 🎹 | n | music_1_piano
violin | скрипка | /ˌvaɪəˈlɪn/ | 🎻 | n | music_1_violin
trumpet | труба | /ˈtrʌmpɪt/ | 🎺 | n | music_1_trumpet
flute | флейта | /fluːt/ | 🪈 | n | music_1_flute
microphone | микрофон | /ˈmaɪkrəˌfoʊn/ | 🎤 | n | music_1_microphone
LESSON u09_8 | Праздник движения
sing | петь | /sɪŋ/ | 🎤 | v | verbs_9_sing
dance | танцевать | /dæns/ | 💃 | v | verbs_9_dance
clap | хлопать | /klæp/ | 👏 | v | verbs_13_clap
wave | махать рукой | /weɪv/ | 👋 | v | verbs_13_wave
laugh | смеяться | /læf/ | 😂 | v | verbs_12_laugh
STATION sound ng_n

UNIT wild | Животные мира | #f39c12
LESSON u10_1 | Дикие животные 1
bear | медведь | /ber/ | 🐻 | n | animals_5_bear
lion | лев | /ˈlaɪən/ | 🦁 | n | animals_5_lion
tiger | тигр | /ˈtaɪɡər/ | 🐯 | n | animals_5_tiger
zebra | зебра | /ˈziːbrə/ | 🦓 | n | animals_5_zebra
LESSON u10_2 | Дикие животные 2
giraffe | жираф | /dʒəˈræf/ | 🦒 | n | animals_6_giraffe
monkey | обезьяна | /ˈmʌŋki/ | 🐵 | n | animals_6_monkey
elephant | слон | /ˈelɪfənt/ | 🐘 | n | animals_6_elephant
crocodile | крокодил | /ˈkrɑːkədaɪl/ | 🐊 | n | crocodile
LESSON u10_3 | В лесу и на пруду
frog | лягушка | /frɔːɡ/ | 🐸 | n | animals_7_frog
snake | змея | /sneɪk/ | 🐍 | n | animals_7_snake
turtle | черепаха | /ˈtɜːrtl/ | 🐢 | n | animals_7_turtle
owl | сова | /aʊl/ | 🦉 | n | animals_7_owl
spider | паук | /ˈspaɪdər/ | 🕷️ | n | animals_7_spider
LESSON u10_4 | Насекомые
butterfly | бабочка | /ˈbʌtərflaɪ/ | 🦋 | n:butterflies | animals_8_butterfly
ant | муравей | /ænt/ | 🐜 | n | animals_8_ant
ladybug | божья коровка | /ˈleɪdiˌbʌɡ/ | 🐞 | n | animals_8_ladybug
snail | улитка | /sneɪl/ | 🐌 | n | animals_8_snail
STATION grammar a_an
LESSON u10_5 | Море
sea | море | /siː/ | 🌊 | n | nature_4_sea
beach | пляж | /biːtʃ/ | 🏖️ | n:beaches | nature_4_beach
whale | кит | /weɪl/ | 🐋 | n | whale
dolphin | дельфин | /ˈdɑːlfɪn/ | 🐬 | n | dolphin
LESSON u10_6 | Зоопарк
zoo | зоопарк | /zuː/ | 🦁 | n | places_3_zoo
farm | ферма | /fɑːrm/ | 🚜 | n | places_3_farm
hippo | бегемот | /ˈhɪpoʊ/ | 🦛 | n | hippo
kangaroo | кенгуру | /ˌkæŋɡəˈruː/ | 🦘 | n | kangaroo
LESSON u10_7 | Природа
flower | цветок | /ˈflaʊər/ | 🌸 | n | nature_3_flower
grass | трава | /ɡræs/ | 🌿 | u | nature_3_grass
river | река | /ˈrɪvər/ | 🏞️ | n | nature_3_river
mountain | гора | /ˈmaʊntən/ | ⛰️ | n | nature_4_mountain
rainbow | радуга | /ˈreɪnboʊ/ | 🌈 | n | nature_2_rainbow
LESSON u10_8 | Небо
sky | небо | /skaɪ/ | 🌤️ | n:skies | nature_1_sky
cloud | облако | /klaʊd/ | ☁️ | n | nature_1_cloud
moon | луна | /muːn/ | 🌙 | n | nature_1_moon
star | звезда | /stɑːr/ | ⭐ | n | star
STATION sound ar_or

UNIT town | Город и профессии | #c0392b
LESSON u11_1 | Город 1
store | магазин | /stɔːr/ | 🏪 | n | places_1_store
city | город | /ˈsɪti/ | 🏙️ | n:cities | places_1_city
street | улица | /striːt/ | 🛣️ | n | places_2_street
library | библиотека | /ˈlaɪbreri/ | 📚 | n:libraries | places_1_library
LESSON u11_2 | Город 2
hospital | больница | /ˈhɑːspɪtl/ | 🏥 | n | places_2_hospital
village | деревня | /ˈvɪlɪdʒ/ | 🏡 | n | places_3_village
cinema | кинотеатр | /ˈsɪnəmə/ | 🎬 | n | cinema
cafe | кафе | /kæˈfeɪ/ | ☕ | n | cafe
LESSON u11_3 | Транспорт 1
truck | грузовик | /trʌk/ | 🚚 | n | transport_2_truck
taxi | такси | /ˈtæksi/ | 🚕 | n | transport_2_taxi
motorcycle | мотоцикл | /ˈmoʊtərˌsaɪkl/ | 🏍️ | n | transport_2_motorcycle
scooter | самокат | /ˈskuːtər/ | 🛴 | n | transport_1_scooter
LESSON u11_4 | Транспорт 2
helicopter | вертолёт | /ˈhelɪˌkɑːptər/ | 🚁 | n | transport_3_helicopter
rocket | ракета | /ˈrɑːkɪt/ | 🚀 | n | transport_3_rocket
here | здесь | /hɪr/ | 📍 | adv | prepositions_3_here
there | там | /ðer/ | 👉 | adv | prepositions_3_there
STATION grammar there_is
LESSON u11_5 | Направления
up | вверх | /ʌp/ | ⬆️ | adv | prepositions_2_up
down | вниз | /daʊn/ | ⬇️ | adv | prepositions_3_down
left | налево | /left/ | ⬅️ | adv | left
right | направо | /raɪt/ | ➡️ | adv | right
LESSON u11_6 | Профессии 1
nurse | медсестра | /nɜːrs/ | 👩‍⚕️ | n | professions_1_nurse
doctor | врач | /ˈdɑːktər/ | 🧑‍⚕️ | n | doctor
farmer | фермер | /ˈfɑːrmər/ | 👨‍🌾 | n | professions_1_farmer
pilot | пилот | /ˈpaɪlət/ | 🧑‍✈️ | n | professions_1_pilot
driver | водитель | /ˈdraɪvər/ | 🚗 | n | professions_3_driver
LESSON u11_7 | Профессии 2
police officer | полицейский | /pəˈliːs ˈɑːfɪsər/ | 👮 | n | professions_1_police-officer
firefighter | пожарный | /ˈfaɪərˌfaɪtər/ | 👨‍🚒 | n | professions_1_firefighter
chef | повар | /ʃef/ | 👨‍🍳 | n | professions_2_chef
vet | ветеринар | /vet/ | 🐾 | n | professions_3_vet
LESSON u11_8 | Профессии 3
dancer | танцор | /ˈdænsər/ | 💃 | n | professions_2_dancer
singer | певец | /ˈsɪŋər/ | 🎤 | n | professions_2_singer
artist | художник | /ˈɑːrtɪst/ | 🎨 | n | professions_2_artist
dentist | стоматолог | /ˈdentɪst/ | 🦷 | n | professions_3_dentist
builder | строитель | /ˈbɪldər/ | 👷 | n | professions_3_builder
STATION sound ir_ur

UNIT day | Мой день | #2471a3
LESSON u12_1 | Время суток 1
morning | утро | /ˈmɔːrnɪŋ/ | 🌅 | n | time_3_morning
afternoon | после обеда | /ˌæftərˈnuːn/ | ☀️ | n | time_3_afternoon
evening | вечер | /ˈiːvnɪŋ/ | 🌆 | n | time_4_evening
night | ночь | /naɪt/ | 🌃 | n | time_4_night
LESSON u12_2 | Время суток 2
today | сегодня | /təˈdeɪ/ | 📍 | adv | time_3_today
tomorrow | завтра | /təˈmɑːroʊ/ | ➡️ | adv | time_3_tomorrow
time | время | /taɪm/ | ⏰ | u | time
LESSON u12_3 | Еда за день
breakfast | завтрак | /ˈbrekfəst/ | 🥞 | n | breakfast
lunch | обед | /lʌntʃ/ | 🍱 | n | lunch
dinner | ужин | /ˈdɪnər/ | 🍝 | n | dinner
LESSON u12_4 | Распорядок 1
wake up | просыпаться | /ˌweɪk ˈʌp/ | ⏰ | v | verbs_7_wake-up
sleep | спать | /sliːp/ | 😴 | v | verbs_7_sleep
eat | есть | /iːt/ | 🍽️ | v | verbs_7_eat
drink | пить | /drɪŋk/ | 🥤 | v | verbs_7_drink
LESSON u12_5 | Распорядок 2
go | идти | /ɡoʊ/ | 🚶 | v | verbs_6_go
come | приходить | /kʌm/ | 👋 | v | verbs_6_come
live | жить | /lɪv/ | 🏠 | v | verbs_21_live
help | помогать | /help/ | 🤝 | v | verbs_12_help
STATION grammar present_simple
LESSON u12_6 | На кухне
cook | готовить еду | /kʊk/ | 🍳 | v | verbs_18_cook
bake | печь | /beɪk/ | 🧁 | v | verbs_19_bake
pour | наливать | /pɔːr/ | 🫗 | v | verbs_19_pour
mix | смешивать | /mɪks/ | 🥣 | v | verbs_19_mix
feed | кормить | /fiːd/ | 🍲 | v | verbs_19_feed
LESSON u12_7 | Дела 1
build | строить | /bɪld/ | 🧱 | v | verbs_17_build
break | ломать | /breɪk/ | 💥 | v | verbs_17_break
find | находить | /faɪnd/ | 🔍 | v | verbs_17_find
carry | нести | /ˈkæri/ | 🎒 | v | verbs_17_carry
fix | ремонтировать | /fɪks/ | 🔧 | v | verbs_18_fix
LESSON u12_8 | Дела 2
make | делать | /meɪk/ | 🛠️ | v | verbs_18_make
buy | покупать | /baɪ/ | 🛒 | v | verbs_18_buy
give | давать | /ɡɪv/ | 🤲 | v | verbs_14_give
take | брать | /teɪk/ | ✋ | v | verbs_14_take
put | положить | /pʊt/ | 📥 | v | verbs_14_put
LESSON u12_9 | Разговор
speak | говорить | /spiːk/ | 🗣️ | v | verbs_2_speak
say | сказать | /seɪ/ | 💬 | v | verbs_2_say
talk | разговаривать | /tɔːk/ | 🗨️ | v | verbs_2_talk
shout | кричать | /ʃaʊt/ | 📢 | v | verbs_3_shout
whisper | шептать | /ˈwɪspər/ | 🤫 | v | verbs_3_whisper
STATION sound u_o

UNIT party | Праздник | #e91e63
LESSON u13_1 | Формы 1
circle | круг | /ˈsɜːrkl/ | ⚪ | n | shapes_1_circle
square | квадрат | /skwer/ | 🟥 | n | shapes_1_square
triangle | треугольник | /ˈtraɪˌæŋɡl/ | 🔺 | n | shapes_1_triangle
heart | сердце | /hɑːrt/ | ❤️ | n | shapes_1_heart
rectangle | прямоугольник | /ˈrekˌtæŋɡl/ | 🟦 | n | shapes_2_rectangle
LESSON u13_2 | Формы 2
oval | овал | /ˈoʊvl/ | ⚪ | n | shapes_2_oval
diamond | ромб | /ˈdaɪəmənd/ | 🔷 | n | shapes_2_diamond
line | линия | /laɪn/ | 📏 | n | line
shape | форма, фигура | /ʃeɪp/ | 🔶 | n | shape
LESSON u13_3 | Свойства 1
fast | быстрый | /fæst/ | 💨 | a | feelings_5_fast
slow | медленный | /sloʊ/ | 🐢 | a | feelings_5_slow
clean | чистый | /kliːn/ | 🧼 | a | feelings_5_clean
dirty | грязный | /ˈdɜːrti/ | 🖐️🦠 | a | dirty
strong | сильный | /strɔːŋ/ | 💪 | a | feelings_6_strong
LESSON u13_4 | Свойства 2
long | длинный | /lɔːŋ/ | 🐍🐛 | a | long
short | короткий | /ʃɔːrt/ | 🐛🐍 | a | short
tall | высокий | /tɔːl/ | 🦒🐕 | a | tall
pretty | красивый | /ˈprɪti/ | 🌺 | a | feelings_6_pretty
messy | неряшливый | /ˈmesi/ | 🧹 | a | feelings_6_messy
STATION grammar questions
LESSON u13_5 | День рождения
birthday | день рождения | /ˈbɜːrθdeɪ/ | 🥳 | n | birthday
party | праздник, вечеринка | /ˈpɑːrti/ | 🎉 | n:parties | party
present | подарок | /ˈpreznt/ | 🎁 | n | present
pumpkin | тыква | /ˈpʌmpkɪn/ | 🎃 | n | fruits_veg_5_pumpkin
LESSON u13_6 | Чувства 3
love | любить | /lʌv/ | 💕 | v | verbs_11_love
hug | обнимать | /hʌɡ/ | 🤗 | v | verbs_12_hug
kiss | целовать | /kɪs/ | 😘 | v | verbs_12_kiss
cry | плакать | /kraɪ/ | 😭 | v | verbs_12_cry
smile | улыбаться | /smaɪl/ | 😊 | v | smile
LESSON u13_7 | Вежливые слова
hello | привет | /həˈloʊ/ | 👋 | x | hello
goodbye | пока, до свидания | /ɡʊdˈbaɪ/ | - | x | goodbye
please | пожалуйста | /pliːz/ | 🙏 | x | please
thank you | спасибо | /ˈθæŋk juː/ | - | x | thank_you
LESSON u13_8 | Знаю и хочу
gold | золотой | /ɡoʊld/ | 🟨 | a | colors_3_gold
want | хотеть | /wɑːnt/ | 🙋 | v | verbs_11_want
know | знать | /noʊ/ | 🧠 | v | verbs_11_know
think | думать | /θɪŋk/ | 💭 | v | verbs_11_think
STATION sound y_end

LEVEL 2 | Глубокий лес | Movers

UNIT health | Здоровье и внешность | #16a085
LESSON m01_1 | Когда?
yesterday | вчера | /ˈjestərdeɪ/ | 📅 | adv | yesterday
weekend | выходные | /ˈwiːkend/ | 🗓️ | n | weekend
last | прошлый, последний | /læst/ | - | a | last
first | первый | /fɜːrst/ | 🥇 | num | first
second | второй | /ˈsekənd/ | 🥈 | num | second
third | третий | /θɜːrd/ | 🥉 | num | third
LESSON m01_2 | Здоровье 1
headache | головная боль | /ˈhedeɪk/ | 🤕 | n | headache
toothache | зубная боль | /ˈtuːθeɪk/ | - | n | toothache
stomach | живот, желудок | /ˈstʌmək/ |  | n | stomach
temperature | температура | /ˈtemprətʃər/ | 🌡️ | n | temperature
medicine | лекарство | /ˈmedɪsn/ | 💊 | u | medicine
LESSON m01_3 | Здоровье 2
sick | больной | /sɪk/ | 🤒 | a | sick
fine | в порядке | /faɪn/ | 👌 | a | fine
hurt | болеть, ушибить | /hɜːrt/ | 🤕 | v | hurt
cough | кашель | /kɔːf/ | 😷 | n | cough
LESSON m01_4 | Тело 3
neck | шея | /nek/ | - | n | neck
shoulder | плечо | /ˈʃoʊldər/ | - | n | shoulder
knee | колено | /niː/ |  | n | knee
toe | палец ноги | /toʊ/ | - | n | toe
beard | борода | /bɪrd/ | 🧔 | n | beard
STATION grammar was_were
LESSON m01_5 | Внешность
blond | светловолосый | /blɑːnd/ | 👱 | a | blond
curly | кудрявый | /ˈkɜːrli/ | 👨‍🦱 | a | curly
straight | прямой | /streɪt/ | - | a | straight
fat | толстый | /fæt/ | 🐈🐈 | a | fat
thin | худой | /θɪn/ | 🐈🐈 | a | thin
LESSON m01_6 | Характер
brave | смелый | /breɪv/ | 🦸 | a | brave
kind | добрый | /kaɪnd/ | - | a | kind
quiet | тихий | /ˈkwaɪət/ | 🤫 | a | quiet
loud | громкий | /laʊd/ | 📢 | a | loud
clever | умный | /ˈklevər/ | 🤓 | a | clever
LESSON m01_7 | Настроение
bored | скучающий | /bɔːrd/ | 🥱 | a | bored
surprised | удивлённый | /sərˈpraɪzd/ | 😮 | a | surprised
awake | не спящий | /əˈweɪk/ | - | a | awake
asleep | спящий | /əˈsliːp/ | 💤 | a | asleep
LESSON m01_8 | Уход за собой
shampoo | шампунь | /ʃæmˈpuː/ | 🧴 | u | shampoo
toothpaste | зубная паста | /ˈtuːθpeɪst/ | - | u | toothpaste
comb | расчёска | /koʊm/ | 🪮 | n | comb
bath | ванна | /bæθ/ | 🛀 | n | bath
LESSON m01_9 | Лицо 2
cheek | щека | /tʃiːk/ | - | n | cheek
chin | подбородок | /tʃɪn/ | - | n | chin
lip | губа | /lɪp/ | 🫦 | n | lip
tongue | язык (во рту) | /tʌŋ/ | 👅 | n | tongue
mustache | усы | /ˈmʌstæʃ/ | - | n | mustache
STATION sound a_magic

UNIT city | В городе | #d35400
LESSON m02_1 | Места 1
bank | банк | /bæŋk/ | 🏦 | n | bank
market | рынок | /ˈmɑːrkɪt/ | - | n | market
supermarket | супермаркет | /ˈsuːpərmɑːrkɪt/ | 🛒 | n | supermarket
bus stop | автобусная остановка | /ˈbʌs stɑːp/ | 🚏 | n | bus_stop
station | вокзал, станция | /ˈsteɪʃn/ | 🚉 | n | station
LESSON m02_2 | Места 2
swimming pool | бассейн | /ˈswɪmɪŋ puːl/ | 🏊 | n | swimming_pool
road | дорога | /roʊd/ | 🛣️ | n | road
car park | парковка | /ˈkɑːr pɑːrk/ | 🅿️ | n | car_park
circus | цирк | /ˈsɜːrkəs/ | 🎪 | n | circus
LESSON m02_3 | Покупки
money | деньги | /ˈmʌni/ | 💰 | u | money
shop | магазинчик | /ʃɑːp/ | 🏪 | n | shop
ticket | билет | /ˈtɪkɪt/ | 🎫 | n | ticket
basket | корзина | /ˈbæskɪt/ | 🧺 | n | basket
LESSON m02_4 | Дела в городе
visit | навещать, посещать | /ˈvɪzɪt/ | - | v | visit
wait | ждать | /weɪt/ | ⏳ | v | wait
stay | оставаться | /steɪ/ | - | v | stay
turn | поворачивать | /tɜːrn/ | ↪️ | v | turn
STATION grammar past_regular
LESSON m02_5 | Транспорт 3
tractor | трактор | /ˈtræktər/ | 🚜 | n | tractor
van | фургон | /væn/ | 🚐 | n | van
tram | трамвай | /træm/ | 🚊 | n | tram
ferry | паром | /ˈferi/ | ⛴️ | n:ferries | ferry
LESSON m02_6 | На улице
corner | угол | /ˈkɔːrnər/ | - | n | corner
map | карта | /mæp/ | 🗺️ | n | map
sign | знак | /saɪn/ | 🪧 | n | sign
bridge | мост | /brɪdʒ/ | 🌉 | n | bridge
LESSON m02_7 | Путешествуем
drive | водить машину | /draɪv/ | 🚗 | v | verbs_6_drive
sail | плыть на лодке | /seɪl/ | ⛵ | v | verbs_6_sail
trip | спотыкаться | /trɪp/ | 🤕 | v | verbs_5_trip
meet | встречать | /miːt/ | 🤝 | v | verbs_13_meet
hop | прыгать на одной ноге | /hɑːp/ | - | v | hop
skip | скакать вприпрыжку | /skɪp/ | - | v | skip
LESSON m02_8 | Числа до ста 1
thirty | тридцать | /ˈθɜːrti/ | 🔢 | num | thirty
forty | сорок | /ˈfɔːrti/ | 🔢 | num | forty
fifty | пятьдесят | /ˈfɪfti/ | 🔢 | num | fifty
sixty | шестьдесят | /ˈsɪksti/ | 🔢 | num | sixty
LESSON m02_9 | Числа до ста 2
seventy | семьдесят | /ˈsevnti/ | 🔢 | num | seventy
eighty | восемьдесят | /ˈeɪti/ | 🔢 | num | eighty
ninety | девяносто | /ˈnaɪnti/ | 🔢 | num | ninety
hundred | сто | /ˈhʌndrəd/ | 💯 | num | hundred
LESSON m02_10 | Жильё
building | здание | /ˈbɪldɪŋ/ | - | n | building
apartment | квартира | /əˈpɑːrtmənt/ | - | n | apartment
entrance | вход | /ˈentrəns/ | ➡️🚪 | n | entrance
exit | выход | /ˈeksɪt/ | 🚪➡️ | n | exit
STATION sound i_magic

UNIT nature | Природа | #27ae60
LESSON m03_1 | Лес
forest | лес | /ˈfɔːrɪst/ | 🌲 | n | forest
leaf | лист | /liːf/ | 🍃 | n:leaves | leaf
rock | скала, камень | /rɑːk/ | 🪨 | n | rock
plant | растение | /plænt/ | 🪴 | n | plant
LESSON m03_2 | Вода
lake | озеро | /leɪk/ | 🏞️ | n | lake
island | остров | /ˈaɪlənd/ | 🏝️ | n | island
waterfall | водопад | /ˈwɔːtərfɔːl/ | - | n | waterfall
shell | ракушка | /ʃel/ | 🐚 | n | shell
LESSON m03_3 | Земля
field | поле | /fiːld/ | 🌾 | n | field
jungle | джунгли | /ˈdʒʌŋɡl/ | 🌴 | n | jungle
hill | холм | /hɪl/ | ⛰️ | n | hill
cave | пещера | /keɪv/ | - | n | cave
LESSON m03_4 | Букашки
worm | червяк | /wɜːrm/ | 🪱 | n | animals_9_worm
fly | муха | /flaɪ/ | 🪰 | n:flies | animals_9_fly
mosquito | комар | /məˈskiːtoʊ/ | 🦟 | n:mosquitoes | animals_9_mosquito
caterpillar | гусеница | /ˈkætərˌpɪlər/ | 🐛 | n | animals_9_caterpillar
beetle | жук | /ˈbiːtl/ | 🪲 | n | animals_9_beetle
STATION grammar past_irregular
LESSON m03_5 | Погода 3
storm | шторм | /stɔːrm/ | ⛈️ | n | seasons_3_storm
foggy | туманно | /ˈfɑːɡi/ | 🌫️ | a | seasons_3_foggy
ice | лёд | /aɪs/ | 🧊 | u | ice
weather | погода | /ˈweðər/ | 🌦️ | u | weather
warm | тёплый | /wɔːrm/ | ♨️ | a | warm
LESSON m03_6 | Птицы
parrot | попугай | /ˈpærət/ | 🦜 | n | parrot
penguin | пингвин | /ˈpeŋɡwɪn/ | 🐧 | n | penguin
swan | лебедь | /swɑːn/ | 🦢 | n | swan
nest | гнездо | /nest/ | 🪺 | n | nest
LESSON m03_7 | Звери леса
bat | летучая мышь | /bæt/ | 🦇 | n | bat
fox | лиса | /fɑːks/ | 🦊 | n:foxes | fox
wolf | волк | /wʊlf/ | 🐺 | n:wolves | wolf
squirrel | белка | /ˈskwɜːrəl/ | 🐿️ | n | squirrel
deer | олень | /dɪr/ | 🦌 | n:deer | deer
LESSON m03_8 | Огород
grow | расти, выращивать | /ɡroʊ/ | 🌱 | v | grow
pick | собирать, срывать | /pɪk/ | - | v | pick
dig | копать | /dɪɡ/ | - | v | dig
LESSON m03_9 | Камни и кости
stone | камень | /stoʊn/ | 🪨 | n | stone
bone | кость | /boʊn/ | 🦴 | n | bone
rope | верёвка | /roʊp/ | 🪢 | n | rope
hole | дыра, яма | /hoʊl/ | 🕳️ | n | hole
LESSON m03_10 | Цветы
rose | роза | /roʊz/ | 🌹 | n | rose
sunflower | подсолнух | /ˈsʌnflaʊər/ | 🌻 | n | sunflower
tulip | тюльпан | /ˈtuːlɪp/ | 🌷 | n | tulip
daisy | ромашка | /ˈdeɪzi/ | 🌼 | n:daisies | daisy
LESSON m03_11 | Земля 2
soil | почва | /sɔɪl/ | - | u | soil
mud | грязь | /mʌd/ | - | u | mud
dust | пыль | /dʌst/ | - | u | dust
STATION sound o_magic

UNIT tools | Дом и инструменты | #7f8c8d
LESSON m04_1 | Инструменты
broom | веник | /bruːm/ | 🧹 | n | tools_1_broom
bucket | ведро | /ˈbʌkɪt/ | 🪣 | n | tools_1_bucket
hammer | молоток | /ˈhæmər/ | 🔨 | n | tools_1_hammer
scissors | ножницы | /ˈsɪzərz/ | ✂️ | pl | tools_1_scissors
ladder | лестница | /ˈlædər/ | 🪜 | n | tools_1_ladder
LESSON m04_2 | Техника
phone | телефон | /foʊn/ | 📱 | n | tools_2_phone
computer | компьютер | /kəmˈpjuːtər/ | 💻 | n | tools_2_computer
TV | телевизор | /ˌtiː ˈviː/ | 📺 | n | tools_2_TV
light | свет | /laɪt/ | 💡 | n | tools_2_light
radio | радио | /ˈreɪdioʊ/ | 📻 | n | radio
LESSON m04_3 | Дом 2
stairs | лестница (в доме) | /sterz/ | - | pl | stairs
floor | пол, этаж | /flɔːr/ | - | n | floor
wall | стена | /wɔːl/ | 🧱 | n | wall
upstairs | наверху | /ˌʌpˈsterz/ | 🪜⬆️ | adv | upstairs
downstairs | внизу | /ˌdaʊnˈsterz/ |  | adv | downstairs
LESSON m04_4 | Спальня
blanket | одеяло | /ˈblæŋkɪt/ | - | n | blanket
pillow | подушка | /ˈpɪloʊ/ | - | n | pillow
shelf | полка | /ʃelf/ | - | n:shelves | shelf
dream | сон, мечта | /driːm/ | 💭 | n | dream
STATION grammar did_didnt
LESSON m04_5 | Действия руками
push | толкать | /pʊʃ/ | 👉 | v | verbs_15_push
pull | тянуть | /pʊl/ | 👈 | v | verbs_15_pull
hold | держать | /hoʊld/ | 🤲 | v | verbs_15_hold
cut | резать | /kʌt/ | ✂️ | v | verbs_16_cut
show | показывать | /ʃoʊ/ | 👀 | v | verbs_20_show
LESSON m04_6 | Помнить и забыть
remember | помнить | /rɪˈmembər/ | 🧠 | v | verbs_13_remember
forget | забывать | /fərˈɡet/ | ❓ | v | verbs_13_forget
try | пробовать | /traɪ/ | - | v | try
use | использовать | /juːz/ | - | v | use
need | нуждаться | /niːd/ | - | v | need
LESSON m04_7 | Порядок
tidy | аккуратный | /ˈtaɪdi/ | 🛏️✨ | a | tidy
drop | ронять | /drɑːp/ | - | v | drop
fill | наполнять | /fɪl/ | - | v | fill
empty | пустой | /ˈempti/ | 🫙🥛 | a | empty
LESSON m04_8 | Милые и огромные
cute | милый | /kjuːt/ | 🥰 | a | cute
huge | огромный | /hjuːdʒ/ | 🐘🐭 | a | huge
tube | тюбик, труба | /tuːb/ | - | n | tube
cube | кубик | /kjuːb/ | 🧊 | n | cube
LESSON m04_9 | Мастерская 2
screwdriver | отвёртка | /ˈskruːdraɪvər/ | 🪛 | n | screwdriver
nail | гвоздь | /neɪl/ | - | n | nail
drill | дрель | /drɪl/ | - | n | drill
toolbox | ящик для инструментов | /ˈtuːlbɑːks/ | 🧰 | n:toolboxes | toolbox
STATION sound u_magic

UNIT animals2 | Животные и сравнения | #ca6f1e
LESSON m05_1 | Животные 4
panda | панда | /ˈpændə/ | 🐼 | n | panda
shark | акула | /ʃɑːrk/ | 🦈 | n | shark
octopus | осьминог | /ˈɑːktəpəs/ | 🐙 | n:octopuses | octopus
seal | тюлень | /siːl/ | 🦭 | n | seal
LESSON m05_2 | Животные 5
camel | верблюд | /ˈkæml/ | 🐫 | n | camel
gorilla | горилла | /ɡəˈrɪlə/ | 🦍 | n | gorilla
rhino | носорог | /ˈraɪnoʊ/ | 🦏 | n | rhino
koala | коала | /koʊˈɑːlə/ | 🐨 | n | koala
LESSON m05_3 | Части тела животных
tail | хвост | /teɪl/ | - | n | tail
wing | крыло | /wɪŋ/ | 🪽 | n | wing
fur | мех, шерсть | /fɜːr/ | - | u | fur
beak | клюв | /biːk/ | - | n | beak
LESSON m05_4 | Тяжёлый и лёгкий
heavy | тяжёлый | /ˈhevi/ | 🏋️ | a | heavy
weak | слабый | /wiːk/ | 🥀 | a | weak
high | высокий | /haɪ/ | 🏠🐦⬆️ | a | high
low | низкий | /loʊ/ | 🏠🐦⬇️ | a | low
STATION grammar comparatives
LESSON m05_5 | Малыши фермы
donkey | ослик | /ˈdɑːŋki/ | 🫏 | n | donkey
lamb | ягнёнок | /læm/ | - | n | lamb
puppy | щенок | /ˈpʌpi/ | 🐶 | n:puppies | puppy
kitten | котёнок | /ˈkɪtn/ | 🐱 | n | kitten
LESSON m05_6 | Завтрак 2
toast | тост | /toʊst/ | 🍞 | u | toast
pancake | блин | /ˈpænkeɪk/ | 🥞 | n | pancake
cereal | хлопья | /ˈsɪriəl/ | 🥣 | u | cereal
LESSON m05_7 | На воде
float | плавать (на поверхности) | /floʊt/ | 🛟 | v | float
row | грести | /roʊ/ | 🚣 | v | row
blow | дуть | /bloʊ/ | 🌬️ | v | blow
sink | тонуть | /sɪŋk/ | - | v | sink
LESSON m05_8 | Одинаковые и разные
rich | богатый | /rɪtʃ/ | 🤑 | a | rich
poor | бедный | /pʊr/ | - | a | poor
same | одинаковый | /seɪm/ | 🍎🟰🍎 | a | same
different | разный | /ˈdɪfrənt/ | 🍎🍌 | a | different
LESSON m05_9 | Ещё звери
hedgehog | ёж | /ˈhedʒhɑːɡ/ | 🦔 | n | hedgehog
beaver | бобр | /ˈbiːvər/ | 🦫 | n | beaver
peacock | павлин | /ˈpiːkɑːk/ | 🦚 | n | peacock
flamingo | фламинго | /fləˈmɪŋɡoʊ/ | 🦩 | n:flamingos | flamingo
STATION sound oa_ow

UNIT world | Погода и мир | #1f618d
LESSON m06_1 | Гроза
thunder | гром | /ˈθʌndər/ | 🌩️ | u | thunder
lightning | молния | /ˈlaɪtnɪŋ/ | ⚡ | u | lightning
puddle | лужа | /ˈpʌdl/ | - | n | puddle
wet | мокрый | /wet/ | 💦 | a | wet
LESSON m06_2 | Мир
world | мир | /wɜːrld/ | 🌍 | n | world
country | страна | /ˈkʌntri/ | - | n:countries | country
town | городок | /taʊn/ | 🏘️ | n | town
LESSON m06_3 | Красивый и страшный
beautiful | красивый | /ˈbjuːtɪfl/ | 🌸✨ | a | beautiful
ugly | некрасивый | /ˈʌɡli/ | - | a | ugly
terrible | ужасный | /ˈterəbl/ | - | a | terrible
wonderful | чудесный | /ˈwʌndərfl/ | - | a | wonderful
LESSON m06_4 | Верх и низ
top | верх, вершина | /tɑːp/ | 🔝 | n | top
bottom | низ, дно | /ˈbɑːtəm/ | - | n | bottom
middle | середина | /ˈmɪdl/ | - | n | middle
side | сторона | /saɪd/ | - | n | side
STATION grammar superlatives
LESSON m06_5 | Круглый клоун
clown | клоун | /klaʊn/ | 🤡 | n | clown
crown | корона | /kraʊn/ | 👑 | n | crown
round | круглый | /raʊnd/ | 🟠 | a | round
ground | земля (под ногами) | /ɡraʊnd/ | - | n | ground
LESSON m06_6 | Звуки
sound | звук | /saʊnd/ | 🔊 | n | sound
noise | шум | /nɔɪz/ | - | n | noise
voice | голос | /vɔɪs/ | 🗣️ | n | voice
song | песня | /sɔːŋ/ | 🎵 | n | song
LESSON m06_7 | Снаружи и внутри
outside | снаружи | /ˌaʊtˈsaɪd/ | 📦🐈 | adv | outside
inside | внутри | /ˌɪnˈsaɪd/ | 🐈📦 | adv | inside
around | вокруг | /əˈraʊnd/ | 🔄🌍 | adv | around
away | прочь, далеко | /əˈweɪ/ | 🏠🚶➡️ | adv | away
LESSON m06_8 | Поход
camp | лагерь | /kæmp/ | 🏕️ | n | camp
tent | палатка | /tent/ | ⛺ | n | tent
fire | огонь, костёр | /ˈfaɪər/ | 🔥 | n | fire
wood | дерево (материал), дрова | /wʊd/ | 🪵 | u | wood
STATION sound ou_ow

UNIT routine | Как часто? | #5b2c6f
LESSON m07_1 | Как часто
always | всегда | /ˈɔːlweɪz/ | 📅 | adv | always
usually | обычно | /ˈjuːʒuəli/ | 📅 | adv | usually
often | часто | /ˈɔːfn/ | 📅 | adv | often
sometimes | иногда | /ˈsʌmtaɪmz/ | 📅 | adv | sometimes
never | никогда | /ˈnevər/ | 📅❌ | adv | never
LESSON m07_2 | Школа 2
homework | домашнее задание | /ˈhoʊmwɜːrk/ | 📝 | u | homework
class | класс, урок | /klæs/ | - | n:classes | class
test | контрольная | /test/ | - | n | test
lesson | урок | /ˈlesn/ | - | n | lesson
LESSON m07_3 | Каждый день
get up | вставать | /ˌɡet ˈʌp/ | - | v | get_up
go to bed | ложиться спать | /ˌɡoʊ tə ˈbed/ | 🛌 | v | go_to_bed
get dressed | одеваться | /ˌɡet ˈdrest/ | - | v | get_dressed
LESSON m07_4 | Еда 3
coffee | кофе | /ˈkɔːfi/ | ☕ | u | coffee
vegetable | овощ | /ˈvedʒtəbl/ | 🥕 | n | vegetable
fruit | фрукты | /fruːt/ | 🍎 | u | fruit
noodles | лапша | /ˈnuːdlz/ | 🍜 | pl | noodles
burger | бургер | /ˈbɜːrɡər/ | 🍔 | n | burger
STATION grammar frequency
LESSON m07_5 | Монеты и масло
coin | монета | /kɔɪn/ | 🪙 | n | coin
oil | масло (растительное) | /ɔɪl/ | 🫒 | u | oil
enjoy | наслаждаться | /ɪnˈdʒɔɪ/ | - | v | enjoy
join | присоединяться | /dʒɔɪn/ | - | v | join
LESSON m07_6 | Время 3
hour | час | /ˈaʊər/ | ⏲️ | n | hour
minute | минута | /ˈmɪnɪt/ | ⏱️ | n | minute
early | рано | /ˈɜːrli/ | 🐓⏰ | adv | early
late | поздно | /leɪt/ | 🐌⏰ | adv | late
half | половина | /hæf/ |  | n:halves | half
LESSON m07_7 | Смотрим и слушаем
film | фильм | /fɪlm/ | 🎞️ | n | film
cartoon | мультфильм | /kɑːrˈtuːn/ | - | n | cartoon
video | видео | /ˈvɪdioʊ/ | 📹 | n | video
music | музыка | /ˈmjuːzɪk/ | 🎶 | u | music
LESSON m07_8 | Истории
comic | комикс | /ˈkɑːmɪk/ | 💬 | n | comic
story | рассказ, история | /ˈstɔːri/ | 📖 | n:stories | story
joke | шутка | /dʒoʊk/ | 😆 | n | joke
magic | волшебство | /ˈmædʒɪk/ | 🪄 | u | magic
LESSON m07_9 | Домашние дела
housework | работа по дому | /ˈhaʊswɜːrk/ | - | u | housework
laundry | стирка | /ˈlɔːndri/ |  | u | laundry
vacuum | пылесосить | /ˈvækjuːm/ | - | v | vacuum
STATION sound oi_oy

UNIT rules | Правила | #a93226
LESSON m08_1 | Безопасность
careful | осторожный | /ˈkerfl/ | ⚠️ | a | careful
dangerous | опасный | /ˈdeɪndʒərəs/ | 🦈⚠️ | a | dangerous
safe | безопасный | /seɪf/ | 🦺 | a | safe
helmet | шлем | /ˈhelmɪt/ | ⛑️ | n | helmet
LESSON m08_2 | Правила дома
rule | правило | /ruːl/ | - | n | rule
polite | вежливый | /pəˈlaɪt/ | - | a | polite
noisy | шумный | /ˈnɔɪzi/ | - | a | noisy
alone | один, в одиночестве | /əˈloʊn/ | 🧍 | a | alone
LESSON m08_3 | Делимся
share | делиться | /ʃer/ | - | v | share
borrow | брать на время | /ˈbɑːroʊ/ | - | v | borrow
lend | давать на время | /lend/ | - | v | lend
return | возвращать | /rɪˈtɜːrn/ | - | v | return
LESSON m08_4 | Спорт 3
badminton | бадминтон | /ˈbædmɪntən/ | 🏸 | u | sports_2_badminton
hockey | хоккей | /ˈhɑːki/ | 🏒 | u | hockey
team | команда | /tiːm/ |  | n | team
goal | гол, цель | /ɡoʊl/ | 🥅 | n | goal
STATION grammar must
LESSON m08_5 | Одежда 3
sweater | свитер | /ˈswetər/ | - | n | sweater
swimsuit | купальник | /ˈswɪmsuːt/ | 🩱 | n | swimsuit
uniform | форма (одежда) | /ˈjuːnɪfɔːrm/ | 🥋 | n | uniform
belt | ремень | /belt/ | - | n | belt
LESSON m08_6 | Кухня 2
pot | кастрюля | /pɑːt/ | 🍲 | n | pot
pan | сковорода | /pæn/ | 🍳 | n | pan
glass | стакан | /ɡlæs/ | 🥛 | n:glasses | glass
jar | банка | /dʒɑːr/ | 🫙 | n | jar
LESSON m08_7 | Бегом!
hurry | спешить | /ˈhɜːri/ | - | v | hurry
follow | следовать | /ˈfɑːloʊ/ | - | v | follow
chase | гнаться | /tʃeɪs/ | - | v | chase
escape | убегать | /ɪˈskeɪp/ |  | v | escape
LESSON m08_8 | Слова-помощники
maybe | может быть | /ˈmeɪbi/ | - | adv | maybe
together | вместе | /təˈɡeðər/ | 🫂 | adv | together
again | снова | /əˈɡen/ | 🔁 | adv | again
only | только | /ˈoʊnli/ | - | adv | only
LESSON m08_9 | Знаки
warning | предупреждение | /ˈwɔːrnɪŋ/ | ⚠️ | n | warning
danger | опасность | /ˈdeɪndʒər/ | - | u | danger
emergency | чрезвычайная ситуация | /iˈmɜːrdʒənsi/ | 🚨 | n:emergencies | emergency
STATION sound ea

UNIT shop | Магазин и кухня | #af601a
LESSON m09_1 | Продукты 1
sugar | сахар | /ˈʃʊɡər/ | - | u | sugar
salt | соль | /sɔːlt/ | 🧂 | u | salt
pasta | паста, макароны | /ˈpɑːstə/ | 🍝 | u | pasta
sauce | соус | /sɔːs/ | - | u | sauce
LESSON m09_2 | Продукты 2
jam | варенье | /dʒæm/ | 🫙‍🟥 | u | jam
yogurt | йогурт | /ˈjoʊɡərt/ | - | u | yogurt
popcorn | попкорн | /ˈpɑːpkɔːrn/ | 🍿 | u | popcorn
pie | пирог | /paɪ/ | 🥧 | n | pie
LESSON m09_3 | Магазин
list | список | /lɪst/ | 📋 | n | list
price | цена | /praɪs/ | 🏷️ | n | price
cheap | дешёвый | /tʃiːp/ | 🏷️⬇️ | a | cheap
expensive | дорогой | /ɪkˈspensɪv/ | 💎 | a | expensive
LESSON m09_4 | Кусочки
piece | кусок | /piːs/ | - | n | piece
slice | ломтик | /slaɪs/ | 🍰 | n | slice
packet | пачка | /ˈpækɪt/ | - | n | packet
STATION grammar some_any
LESSON m09_5 | Яркий свет
bright | яркий | /braɪt/ | 🔆 | a | bright
flight | полёт, рейс | /flaɪt/ | 🛫 | n | flight
fight | драться | /faɪt/ | - | v | fight
LESSON m09_6 | Галстук
tie | галстук | /taɪ/ | 👔 | n | tie
lie | лежать | /laɪ/ | - | v | lie
LESSON m09_7 | Готовим 2
fry | жарить | /fraɪ/ | - | v | fry
boil | варить | /bɔɪl/ | - | v | boil
peel | чистить (кожуру) | /piːl/ | - | v | peel
LESSON m09_8 | Ресторан
menu | меню | /ˈmenjuː/ | - | n | menu
waiter | официант | /ˈweɪtər/ | - | n | waiter
order | заказывать | /ˈɔːrdər/ | - | v | order
pay | платить | /peɪ/ | 💳 | v | pay
LESSON m09_9 | Фрукты 4
plum | слива | /plʌm/ | - | n | plum
mango | манго | /ˈmæŋɡoʊ/ | 🥭 | n:mangoes | mango
kiwi | киви | /ˈkiːwiː/ | 🥝 | n | kiwi
avocado | авокадо | /ˌævəˈkɑːdoʊ/ | 🥑 | n | avocado
STATION sound igh_ie

UNIT hobbies | Хобби | #7d3c98
LESSON m10_1 | Хобби 1
chess | шахматы | /tʃes/ | ♟️ | u | chess
hobby | хобби | /ˈhɑːbi/ | - | n:hobbies | hobby
collect | собирать (коллекцию) | /kəˈlekt/ | - | v | collect
stamp | марка | /stæmp/ | - | n | stamp
LESSON m10_2 | Искусство
photo | фотография | /ˈfoʊtoʊ/ | 🖼️ | n | photo
drawing | рисунок | /ˈdrɔːɪŋ/ | - | n | drawing
band | музыкальная группа | /bænd/ | - | n | band
sticker | наклейка | /ˈstɪkər/ | - | n | sticker
LESSON m10_3 | Катаемся
skateboard | скейтборд | /ˈskeɪtbɔːrd/ | 🛹 | n | skateboard
ice skates | коньки | /ˈaɪs skeɪts/ | ⛸️ | pl | ice_skates
bounce | прыгать (о мяче) | /baʊns/ | - | v | bounce
practice | тренироваться | /ˈpræktɪs/ | - | v | practice
LESSON m10_4 | Желания
hope | надеяться | /hoʊp/ | 🤞 | v | hope
wish | желать | /wɪʃ/ | 🌠 | v | wish
choose | выбирать | /tʃuːz/ | - | v | choose
decide | решать | /dɪˈsaɪd/ | - | v | decide
STATION grammar want_to
LESSON m10_5 | Воздух
air | воздух | /er/ | - | u | air
fair | ярмарка | /fer/ | 🎡 | n | fair
pair | пара | /per/ | - | n | pair
LESSON m10_6 | Ночёвка в лесу
sleeping bag | спальный мешок | /ˈsliːpɪŋ bæɡ/ | - | n | sleeping_bag
flashlight | фонарик | /ˈflæʃlaɪt/ | 🔦 | n | flashlight
compass | компас | /ˈkʌmpəs/ | 🧭 | n:compasses | compass
LESSON m10_7 | Игры 2
hide | прятаться | /haɪd/ | 🙈 | v | hide
seek | искать | /siːk/ | - | v | seek
roll | катить | /roʊl/ | - | v | roll
spin | крутиться | /spɪn/ | 🌀 | v | spin
LESSON m10_8 | Каникулы
holiday | праздник, каникулы | /ˈhɑːlədeɪ/ | 🏖️ | n | holiday
picnic | пикник | /ˈpɪknɪk/ | 🧺 | n | picnic
invite | приглашать | /ɪnˈvaɪt/ | 💌 | v | invite
LESSON m10_9 | Сцена
ballet | балет | /bæˈleɪ/ | 🩰 | u | ballet
concert | концерт | /ˈkɑːnsərt/ | - | n | concert
orchestra | оркестр | /ˈɔːrkɪstrə/ | - | n | orchestra
STATION sound air_ear

UNIT how | Как? | #148f77
LESSON m11_1 | Как? 1
quickly | быстро | /ˈkwɪkli/ | 💨🏃 | adv | quickly
slowly | медленно | /ˈsloʊli/ | 🐢 | adv | slowly
loudly | громко | /ˈlaʊdli/ | 🗣️🔊 | adv | loudly
quietly | тихо | /ˈkwaɪətli/ | - | adv | quietly
LESSON m11_2 | Как? 2
well | хорошо | /wel/ | 👍 | adv | well
badly | плохо | /ˈbædli/ | 👎 | adv | badly
carefully | осторожно | /ˈkerfəli/ | - | adv | carefully
happily | радостно | /ˈhæpɪli/ | - | adv | happily
LESSON m11_3 | Легко и трудно
easy | лёгкий | /ˈiːzi/ | - | a | easy
difficult | трудный | /ˈdɪfɪkəlt/ | - | a | difficult
correct | правильный | /kəˈrekt/ | ✅ | a | correct
wrong | неправильный | /rɔːŋ/ | ❌ | a | wrong
LESSON m11_4 | Соревнования
race | гонка, забег | /reɪs/ | 🏁 | n | race
winner | победитель | /ˈwɪnər/ | 🏆 | n | winner
prize | приз | /praɪz/ | - | n | prize
medal | медаль | /ˈmedl/ | 🏅 | n | medal
STATION grammar adverbs
LESSON m11_5 | Зверьки
lizard | ящерица | /ˈlɪzərd/ | 🦎 | n | lizard
rat | крыса | /ræt/ | 🐀 | n | rat
llama | лама | /ˈlɑːmə/ | 🦙 | n | llama
LESSON m11_6 | Мастерская
glue | клей | /ɡluː/ | - | u | glue
tape | скотч | /teɪp/ | - | u | tape
string | верёвочка | /strɪŋ/ | 🧵 | u | string
ribbon | лента | /ˈrɪbən/ | 🎀 | n | ribbon
LESSON m11_7 | Двор
garage | гараж | /ɡəˈrɑːʒ/ | - | n | garage
gate | ворота, калитка | /ɡeɪt/ | - | n | gate
fence | забор | /fens/ | - | n | fence
yard | двор | /jɑːrd/ | - | n | yard
LESSON m11_8 | Понимать
repeat | повторять | /rɪˈpiːt/ | 🔁 | v | repeat
spell | произносить по буквам | /spel/ | 🔤 | v | spell
mean | значить | /miːn/ | - | v | mean
understand | понимать | /ˌʌndərˈstænd/ | - | v | understand
LESSON m11_9 | Как? 3
suddenly | вдруг | /ˈsʌdənli/ | - | adv | suddenly
finally | наконец | /ˈfaɪnəli/ | - | adv | finally
nearly | почти | /ˈnɪrli/ | - | adv | nearly
really | действительно | /ˈriːəli/ | - | adv | really
STATION sound r_l

UNIT calendar | Календарь | #2e86c1
LESSON m12_1 | Месяцы 1
January | январь | /ˈdʒænjueri/ | 📅 | n | january
February | февраль | /ˈfebrueri/ | 📅 | n | february
March | март | /mɑːrtʃ/ | 📅 | n | march
April | апрель | /ˈeɪprəl/ | 📅 | n | april
LESSON m12_2 | Месяцы 2
May | май | /meɪ/ | 📅 | n | may
June | июнь | /dʒuːn/ | 📅 | n | june
July | июль | /dʒuˈlaɪ/ | 📅 | n | july
August | август | /ˈɔːɡəst/ | 📅 | n | august
LESSON m12_3 | Месяцы 3
September | сентябрь | /sepˈtembər/ | 📅 | n | september
October | октябрь | /ɑːkˈtoʊbər/ | 📅 | n | october
November | ноябрь | /noʊˈvembər/ | 📅 | n | november
December | декабрь | /dɪˈsembər/ | 📅 | n | december
LESSON m12_4 | Время 4
month | месяц | /mʌnθ/ | 🗓️ | n | month
year | год | /jɪr/ | ☀️🌍 | n | year
date | дата | /deɪt/ | 📅 | n | date
calendar | календарь | /ˈkælɪndər/ | 📆 | n | calendar
STATION grammar time_prep
LESSON m12_5 | Свистульки
wheel | колесо | /wiːl/ | 🛞 | n | wheel
whistle | свисток | /ˈwɪsl/ | - | n | whistle
whiskers | усы (у кошки) | /ˈwɪskərz/ | - | pl | whiskers
LESSON m12_6 | Праздник 2
candle | свеча | /ˈkændl/ | 🕯️ | n | candle
card | открытка | /kɑːrd/ | 💌 | n | card
guest | гость | /ɡest/ | - | n | guest
surprise | сюрприз | /sərˈpraɪz/ | 🎁 | n | surprise
LESSON m12_7 | Зима
snowman | снеговик | /ˈsnoʊmæn/ | ⛄ | n:snowmen | snowman
snowball | снежок | /ˈsnoʊbɔːl/ | - | n | snowball
sled | санки | /sled/ | 🛷 | n | sled
LESSON m12_8 | Приезжаем и уезжаем
arrive | прибывать | /əˈraɪv/ | - | v | arrive
leave | уезжать, уходить | /liːv/ | - | v | leave
travel | путешествовать | /ˈtrævl/ | 🧳 | v | travel
move | двигаться, переезжать | /muːv/ | - | v | move
LESSON m12_9 | Праздники года
New Year | Новый год | /ˌnuː ˈjɪr/ | 🎆 | n | new_year
Christmas | Рождество | /ˈkrɪsməs/ | 🎄 | n | christmas
fireworks | фейерверк | /ˈfaɪərwɜːrks/ | 🎇 | pl | fireworks
STATION sound wh_w

UNIT friends | Друзья и общение | #c2185b
LESSON m13_1 | Общение 1
call | звонить | /kɔːl/ | 📞 | v | call
tell | рассказывать | /tel/ | - | v | tell
send | отправлять | /send/ | 📤 | v | send
email | электронное письмо | /ˈiːmeɪl/ | 📧 | n | email
LESSON m13_2 | Общение 2
message | сообщение | /ˈmesɪdʒ/ | 💬 | n | message
postcard | открытка (почтовая) | /ˈpoʊstkɑːrd/ | - | n | postcard
envelope | конверт | /ˈenvəloʊp/ | ✉️ | n | envelope
address | адрес | /ˈædres/ | - | n:addresses | address
LESSON m13_3 | Друзья
neighbor | сосед | /ˈneɪbər/ | - | n | neighbor
classmate | одноклассник | /ˈklæsmeɪt/ | - | n | classmate
group | группа | /ɡruːp/ | - | n | group
club | клуб, кружок | /klʌb/ | - | n | club
LESSON m13_4 | Договариваемся
agree | соглашаться | /əˈɡriː/ | 🤝 | v | agree
explain | объяснять | /ɪkˈspleɪn/ | - | v | explain
guess | угадывать | /ɡes/ | - | v | guess
promise | обещать | /ˈprɑːmɪs/ | - | v | promise
STATION grammar pronouns
LESSON m13_5 | Соломинка
straw | соломинка | /strɔː/ | 🥤 | n | straw
paw | лапа | /pɔː/ | 🐾 | n | paw
yawn | зевать | /jɔːn/ | 🥱 | v | yawn
LESSON m13_6 | Осень
autumn | осень (брит.) | /ˈɔːtəm/ | 🍂 | n | autumn
daughter | дочь | /ˈdɔːtər/ | 👧 | n | daughter
LESSON m13_7 | Родственники
son | сын | /sʌn/ | 👦 | n | son
uncle | дядя | /ˈʌŋkl/ | 👨 | n | uncle
aunt | тётя | /ænt/ | 👩 | n | aunt
cousin | двоюродный брат или сестра | /ˈkʌzn/ | - | n | cousin
parents | родители | /ˈperənts/ | 👪 | pl | parents
LESSON m13_8 | Большие здания
hall | зал, прихожая | /hɔːl/ | - | n | hall
mall | торговый центр | /mɔːl/ | 🛍️ | n | mall
LESSON m13_9 | Знакомство
name | имя | /neɪm/ |  | n | name
age | возраст | /eɪdʒ/ | 🧒➡️🧓 | n | age
surname | фамилия | /ˈsɜːrneɪm/ | - | n | surname
nickname | прозвище | /ˈnɪkneɪm/ | - | n | nickname
STATION sound aw_au

LEVEL 3 | Горная вершина | Flyers

UNIT travel | Путешествия | #2874a6
LESSON f01_1 | Аэропорт
airport | аэропорт | /ˈerpɔːrt/ | 🛫 | n | airport
passenger | пассажир | /ˈpæsɪndʒər/ | - | n | passenger
suitcase | чемодан | /ˈsuːtkeɪs/ | 🧳 | n | suitcase
passport | паспорт | /ˈpæspɔːrt/ | 🛂 | n | passport
LESSON f01_2 | В дороге
journey | поездка, путь | /ˈdʒɜːrni/ | - | n | journey
luggage | багаж | /ˈlʌɡɪdʒ/ | 🛅 | u | luggage
platform | платформа | /ˈplætfɔːrm/ | - | n | platform
guide | экскурсовод | /ɡaɪd/ | - | n | guide
LESSON f01_3 | Отдых
hotel | гостиница | /hoʊˈtel/ | 🏨 | n | hotel
sunglasses | солнечные очки | /ˈsʌnɡlæsɪz/ | 🕶️ | pl | sunglasses
souvenir | сувенир | /ˌsuːvəˈnɪr/ | - | n | souvenir
seat | сиденье, место | /siːt/ | 💺 | n | seat
LESSON f01_4 | Планы
plan | план | /plæn/ | - | n | plan
pack | упаковывать | /pæk/ | - | v | pack
miss | опаздывать, скучать | /mɪs/ | - | v | miss
land | приземляться | /lænd/ | 🛬 | v | land
STATION grammar going_to
LESSON f01_5 | Места 3
place | место | /pleɪs/ | 📍 | n | place
center | центр | /ˈsentər/ | - | n | center
distance | расстояние | /ˈdɪstəns/ | - | n | distance
ceiling | потолок | /ˈsiːlɪŋ/ | - | n | ceiling
LESSON f01_6 | Транспорт 4
ambulance | скорая помощь | /ˈæmbjələns/ | 🚑 | n | ambulance
sailboat | парусник | /ˈseɪlboʊt/ | ⛵ | n | sailboat
engine | двигатель | /ˈendʒɪn/ | - | n | engine
LESSON f01_7 | Страны
flag | флаг | /flæɡ/ | 🏳️ | n | flag
language | язык | /ˈlæŋɡwɪdʒ/ | - | n | language
capital | столица | /ˈkæpɪtl/ | - | n | capital
LESSON f01_8 | Исследуем
explore | исследовать | /ɪkˈsplɔːr/ | - | v | explore
discover | открывать (новое) | /dɪˈskʌvər/ | - | v | discover
reach | добираться | /riːtʃ/ | - | v | reach
LESSON f01_9 | Путешественники
tourist | турист | /ˈtʊrɪst/ | - | n | tourist
abroad | за границей | /əˈbrɔːd/ | ✈️🌍 | adv | abroad
border | граница | /ˈbɔːrdər/ | - | n | border
route | маршрут | /ruːt/ | - | n | route
reception | стойка регистрации | /rɪˈsepʃn/ | 🛎️ | n | reception
LESSON f01_10 | Лодки
canoe | каноэ | /kəˈnuː/ | 🛶 | n | canoe
yacht | яхта | /jɑːt/ | - | n | yacht
STATION sound c_soft

UNIT space | Космос | #1b2631
LESSON f02_1 | Космос 1
space | космос | /speɪs/ | 🌌 | u | space
planet | планета | /ˈplænɪt/ | 🪐 | n | planet
Earth | Земля (планета) | /ɜːrθ/ | 🌍 | n | earth
astronaut | космонавт | /ˈæstrənɔːt/ | 🧑‍🚀 | n | astronaut
LESSON f02_2 | Космос 2
spaceship | космический корабль | /ˈspeɪsʃɪp/ | 🛸 | n | spaceship
alien | инопланетянин | /ˈeɪliən/ | 👽 | n | alien
telescope | телескоп | /ˈtelɪskoʊp/ | 🔭 | n | telescope
satellite | спутник | /ˈsætəlaɪt/ | 🛰️ | n | satellite
LESSON f02_3 | Будущее
future | будущее | /ˈfjuːtʃər/ | 🕰️➡️ | n | future
machine | машина, механизм | /məˈʃiːn/ | ⚙️ | n | machine
invent | изобретать | /ɪnˈvent/ | 💡 | v | invent
inventor | изобретатель | /ɪnˈventər/ | - | n | inventor
LESSON f02_4 | Странное и удивительное
tiny | крошечный | /ˈtaɪni/ | 🔍🐜 | a | tiny
strange | странный | /streɪndʒ/ | - | a | strange
amazing | удивительный | /əˈmeɪzɪŋ/ | 🤩 | a | amazing
enormous | огромный | /ɪˈnɔːrməs/ | 🦕🧍 | a | enormous
STATION grammar will
LESSON f02_5 | Страницы и клетки
page | страница | /peɪdʒ/ | 📄 | n | page
giant | великан | /ˈdʒaɪənt/ | - | n | giant
gym | спортзал | /dʒɪm/ | - | n | gym
cage | клетка | /keɪdʒ/ | - | n | cage
LESSON f02_6 | Мир 2
ocean | океан | /ˈoʊʃn/ | 🌊 | n | ocean
desert | пустыня | /ˈdezərt/ | 🏜️ | n | desert
volcano | вулкан | /vɑːlˈkeɪnoʊ/ | 🌋 | n:volcanoes | volcano
cliff | утёс | /klɪf/ | - | n | cliff
LESSON f02_7 | Наука
science | наука | /ˈsaɪəns/ | 🔬 | u | science
scientist | учёный | /ˈsaɪəntɪst/ | 🧑‍🔬 | n | scientist
experiment | опыт, эксперимент | /ɪkˈsperɪmənt/ | 🧪 | n | experiment
LESSON f02_8 | Природа и мы
nature | природа | /ˈneɪtʃər/ | - | u | nature
environment | окружающая среда | /ɪnˈvaɪrənmənt/ | - | n | environment
recycle | перерабатывать | /ˌriːˈsaɪkl/ | ♻️ | v | recycle
trash | мусор | /træʃ/ | 🗑️ | u | trash
LESSON f02_9 | Космос 3
comet | комета | /ˈkɑːmɪt/ | ☄️ | n | comet
galaxy | галактика | /ˈɡæləksi/ | - | n:galaxies | galaxy
orbit | орбита | /ˈɔːrbɪt/ | - | n | orbit
gravity | притяжение | /ˈɡrævəti/ | - | u | gravity
launch | запускать | /lɔːntʃ/ | - | v | launch
STATION sound g_soft

UNIT materials | Материалы | #6e2c00
LESSON f03_1 | Материалы 1
metal | металл | /ˈmetl/ | - | u | metal
plastic | пластик | /ˈplæstɪk/ |  | u | plastic
wool | шерсть | /wʊl/ | 🧶 | u | wool
cotton | хлопок | /ˈkɑːtn/ | - | u | cotton
LESSON f03_2 | Материалы 2
silver | серебро | /ˈsɪlvər/ | - | u | silver
rubber | резина | /ˈrʌbər/ | - | u | rubber
leather | кожа (материал) | /ˈleðər/ | - | u | leather
cardboard | картон | /ˈkɑːrdbɔːrd/ | 📦 | u | cardboard
LESSON f03_3 | На ощупь
soft | мягкий | /sɔːft/ | 🪶🪨 | a | soft
hard | твёрдый | /hɑːrd/ | 🪨🪶 | a | hard
sharp | острый | /ʃɑːrp/ | 🌵 | a | sharp
smooth | гладкий | /smuːð/ | - | a | smooth
LESSON f03_4 | Какой формы?
full | полный | /fʊl/ | 🥛🫙 | a | full
flat | плоский | /flæt/ | - | a | flat
thick | толстый (о предмете) | /θɪk/ | - | a | thick
deep | глубокий | /diːp/ | 🌊⬇️ | a | deep
STATION grammar past_continuous
LESSON f03_5 | Немые буквы
knock | стучать | /nɑːk/ | 🚪 | v | knock
knot | узел | /nɑːt/ | 🪢 | n | knot
wrist | запястье | /rɪst/ | - | n | wrist
wrap | заворачивать | /ræp/ | 🎁 | v | wrap
LESSON f03_6 | Украшения
ring | кольцо | /rɪŋ/ | 💍 | n | ring
necklace | ожерелье | /ˈnekləs/ | 📿 | n | necklace
bracelet | браслет | /ˈbreɪslət/ | - | n | bracelet
button | пуговица, кнопка | /ˈbʌtn/ | 🔘 | n | button
LESSON f03_7 | Мастерим
design | придумывать, проектировать | /dɪˈzaɪn/ | 📐 | v | design
decorate | украшать | /ˈdekəreɪt/ | - | v | decorate
measure | измерять | /ˈmeʒər/ | 📏 | v | measure
LESSON f03_8 | Уют
cushion | диванная подушка | /ˈkʊʃn/ | - | n | cushion
curtain | штора | /ˈkɜːrtn/ | - | n | curtain
carpet | ковёр | /ˈkɑːrpɪt/ | - | n | carpet
drawer | ящик (стола) | /drɔːr/ |  | n | drawer
LESSON f03_9 | Ещё материалы
iron | железо | /ˈaɪərn/ | - | u | iron
steel | сталь | /stiːl/ | - | u | steel
brick | кирпич | /brɪk/ | 🧱 | n | brick
silk | шёлк | /sɪlk/ | - | u | silk
STATION sound kn_wr

UNIT jobs | Профессии | #b9770e
LESSON f04_1 | Профессии 4
engineer | инженер | /ˌendʒɪˈnɪr/ | 🧑‍🔧 | n | engineer
mechanic | механик | /məˈkænɪk/ | - | n | mechanic
journalist | журналист | /ˈdʒɜːrnəlɪst/ | 📰 | n | journalist
photographer | фотограф | /fəˈtɑːɡrəfər/ | 📸 | n | photographer
LESSON f04_2 | Короли и актёры
actor | актёр | /ˈæktər/ | 🎭 | n | actor
king | король | /kɪŋ/ | 🤴 | n | king
queen | королева | /kwiːn/ | 🫅 | n | queen
princess | принцесса | /ˈprɪnses/ | 👸 | n:princesses | princess
LESSON f04_3 | Работа
job | работа | /dʒɑːb/ | 💼 | n | job
office | офис | /ˈɔːfɪs/ | 🏢 | n | office
factory | фабрика | /ˈfæktri/ | 🏭 | n:factories | factory
boss | начальник | /bɔːs/ | - | n:bosses | boss
LESSON f04_4 | Работаем
work | работать | /wɜːrk/ | - | v | work
deliver | доставлять | /dɪˈlɪvər/ | 📦 | v | deliver
repair | чинить | /rɪˈper/ | 🔧 | v | repair
sell | продавать | /sel/ | - | v | sell
STATION grammar present_perfect_ever
LESSON f04_5 | Буквы ph
alphabet | алфавит | /ˈælfəbet/ | 🔤 | n | alphabet
trophy | кубок, трофей | /ˈtroʊfi/ | 🏆 | n:trophies | trophy
LESSON f04_6 | Театр
theater | театр | /ˈθiːətər/ | 🎭 | n | theater
stage | сцена | /steɪdʒ/ | - | n | stage
audience | зрители | /ˈɔːdiəns/ | - | n | audience
costume | костюм | /ˈkɑːstuːm/ | - | n | costume
LESSON f04_7 | Знаменитые
famous | знаменитый | /ˈfeɪməs/ | 🌟 | a | famous
popular | популярный | /ˈpɑːpjələr/ | - | a | popular
important | важный | /ɪmˈpɔːrtnt/ | - | a | important
interesting | интересный | /ˈɪntrəstɪŋ/ | - | a | interesting
LESSON f04_8 | Перемены
become | становиться | /bɪˈkʌm/ | - | v | become
happen | случаться | /ˈhæpən/ | - | v | happen
appear | появляться | /əˈpɪr/ | - | v | appear
disappear | исчезать | /ˌdɪsəˈpɪr/ | 🫥 | v | disappear
LESSON f04_9 | Профессии 6
gardener | садовник | /ˈɡɑːrdnər/ | - | n | gardener
cleaner | уборщик | /ˈkliːnər/ | - | n | cleaner
baker | пекарь | /ˈbeɪkər/ | - | n | baker
hairdresser | парикмахер | /ˈherdresər/ | - | n | hairdresser
programmer | программист | /ˈproʊɡræmər/ | 🧑‍💻 | n | programmer
STATION sound ph_f

UNIT town2 | Большой город | #922b21
LESSON f05_1 | Здания
castle | замок | /ˈkæsl/ | 🏰 | n | castle
museum | музей | /mjuˈziːəm/ | 🏛️ | n | museum
tower | башня | /ˈtaʊər/ | 🗼 | n | tower
skyscraper | небоскрёб | /ˈskaɪskreɪpər/ | 🏙️ | n | skyscraper
LESSON f05_2 | Службы
post office | почта | /ˈpoʊst ɔːfɪs/ | 🏤 | n | post_office
police station | полицейский участок | /pəˈliːs steɪʃn/ | 🚓 | n | police_station
fire station | пожарная часть | /ˈfaɪər steɪʃn/ | 🚒 | n | fire_station
pharmacy | аптека | /ˈfɑːrməsi/ | 💊 | n:pharmacies | pharmacy
LESSON f05_3 | Развлечения
restaurant | ресторан | /ˈrestərɑːnt/ | 🍽️ | n | restaurant
stadium | стадион | /ˈsteɪdiəm/ | 🏟️ | n | stadium
aquarium | океанариум | /əˈkweriəm/ | 🐠 | n | aquarium
LESSON f05_4 | Городская жизнь
traffic | дорожное движение | /ˈtræfɪk/ | 🚦 | u | traffic
crowd | толпа | /kraʊd/ | - | n | crowd
sidewalk | тротуар | /ˈsaɪdwɔːk/ | - | n | sidewalk
STATION grammar present_perfect_just
LESSON f05_5 | Длинные слова
information | информация | /ˌɪnfərˈmeɪʃn/ | ℹ️ | u | information
competition | соревнование | /ˌkɑːmpəˈtɪʃn/ | - | n | competition
collection | коллекция | /kəˈlekʃn/ | - | n | collection
direction | направление | /dəˈrekʃn/ | 🧭 | n | direction
LESSON f05_6 | Электричество
battery | батарейка | /ˈbætəri/ | 🔋 | n:batteries | battery
switch | выключатель | /swɪtʃ/ |  | n:switches | switch
wire | провод | /ˈwaɪər/ | - | n | wire
plug | вилка (электрическая) | /plʌɡ/ | 🔌 | n | plug
LESSON f05_7 | Площадь
statue | статуя | /ˈstætʃuː/ | 🗽 | n | statue
fountain | фонтан | /ˈfaʊntn/ | ⛲ | n | fountain
bench | скамейка | /bentʃ/ | - | n:benches | bench
path | тропинка | /pæθ/ | - | n | path
LESSON f05_8 | Покупки 2
customer | покупатель | /ˈkʌstəmər/ | - | n | customer
sale | распродажа | /seɪl/ | - | n | sale
gift | подарок | /ɡɪft/ | 🎁 | n | gift
wallet | кошелёк | /ˈwɑːlɪt/ | 👛 | n | wallet
LESSON f05_9 | Городские слова
subway | метро | /ˈsʌbweɪ/ | 🚇️ | n | subway
neighborhood | район | /ˈneɪbərhʊd/ | - | n | neighborhood
downtown | центр города | /ˌdaʊnˈtaʊn/ | - | n | downtown
traffic light | светофор | /ˈtræfɪk laɪt/ | 🚥 | n | traffic_light
bookstore | книжный магазин | /ˈbʊkstɔːr/ | - | n | bookstore
bakery | пекарня | /ˈbeɪkəri/ | 🥖 | n:bakeries | bakery
STATION sound tion

UNIT health2 | Здоровье 2 | #117a65
LESSON f06_1 | Болезни
flu | грипп | /fluː/ | 🤧 | u | flu
fever | жар | /ˈfiːvər/ | 🤒 | n | fever
sore | больной (о горле) | /sɔːr/ | - | a | sore
sneeze | чихать | /sniːz/ | 🤧 | v | sneeze
LESSON f06_2 | Лечение
bandage | бинт | /ˈbændɪdʒ/ | 🩹 | n | bandage
pill | таблетка | /pɪl/ | 💊 | n | pill
X-ray | рентген | /ˈeks reɪ/ | 🩻 | n | x_ray
LESSON f06_3 | Тело 4
brain | мозг | /breɪn/ | 🧠 | n | brain
skin | кожа | /skɪn/ | - | u | skin
blood | кровь | /blʌd/ | 🩸 | u | blood
muscle | мышца | /ˈmʌsl/ | 💪 | n | muscle
LESSON f06_4 | Здоровый образ жизни
exercise | упражнения, зарядка | /ˈeksərsaɪz/ | 🤸 | u | exercise
healthy | здоровый | /ˈhelθi/ | - | a | healthy
rest | отдыхать | /rest/ | - | v | rest
relax | расслабляться | /rɪˈlæks/ | 🧘 | v | relax
STATION grammar should
LESSON f06_5 | Осы и болота
wasp | оса | /wɑːsp/ | - | n | wasp
wand | волшебная палочка | /wɑːnd/ | 🪄 | n | wand
swamp | болото | /swɑːmp/ | - | n | swamp
LESSON f06_6 | Чувства 4
worried | обеспокоенный | /ˈwɜːrid/ | 😟 | a | worried
nervous | нервный | /ˈnɜːrvəs/ | 😬 | a | nervous
proud | гордый | /praʊd/ | - | a | proud
lonely | одинокий | /ˈloʊnli/ | - | a | lonely
LESSON f06_7 | Спасение
rescue | спасать | /ˈreskjuː/ | 🛟 | v | rescue
save | спасать, беречь | /seɪv/ | - | v | save
protect | защищать | /prəˈtekt/ | 🛡️ | v | protect
look after | заботиться | /ˌlʊk ˈæftər/ | - | v | look_after
LESSON f06_8 | Спокойствие
calm | спокойный | /kɑːm/ | 😌 | a | calm
gentle | нежный, мягкий | /ˈdʒentl/ | - | a | gentle
patient | терпеливый | /ˈpeɪʃnt/ | - | a | patient
LESSON f06_9 | Тело 5
lungs | лёгкие | /lʌŋz/ | 🫁 | pl | lungs
elbow | локоть | /ˈelboʊ/ | - | n | elbow
ankle | лодыжка | /ˈæŋkl/ | - | n | ankle
thumb | большой палец | /θʌm/ | - | n | thumb
STATION sound wa

UNIT subjects | Школьные предметы | #1a5276
LESSON f07_1 | Предметы 1
math | математика | /mæθ/ | ➗ | u | math
history | история | /ˈhɪstri/ | 📜 | u | history
geography | география | /dʒiˈɑːɡrəfi/ | 🗺️ | u | geography
art | рисование, искусство | /ɑːrt/ | 🎨 | u | art
LESSON f07_2 | Предметы 2
subject | школьный предмет | /ˈsʌbdʒɪkt/ | - | n | subject
project | проект | /ˈprɑːdʒekt/ | - | n | project
dictionary | словарь | /ˈdɪkʃəneri/ | 📕 | n:dictionaries | dictionary
mark | оценка | /mɑːrk/ | - | n | mark
LESSON f07_3 | Учёба
study | учиться, изучать | /ˈstʌdi/ | 📚 | v | study
improve | улучшать | /ɪmˈpruːv/ | 📈 | v | improve
check | проверять | /tʃek/ | ✔️ | v | check
review | повторять (материал) | /rɪˈvjuː/ | - | v | review
LESSON f07_4 | Таланты
talent | талант | /ˈtælənt/ | - | n | talent
idea | идея | /aɪˈdiːə/ | 💡 | n | idea
imagine | представлять | /ɪˈmædʒɪn/ | - | v | imagine
creative | творческий | /kriˈeɪtɪv/ | - | a | creative
STATION grammar could
LESSON f07_5 | Маленькие слова на -le
little | маленький | /ˈlɪtl/ | 🐥🐔 | a | little
label | ярлык | /ˈleɪbl/ | 🏷️ | n | label
tunnel | туннель | /ˈtʌnl/ | 🚇 | n | tunnel
level | уровень | /ˈlevl/ | - | n | level
LESSON f07_6 | Библиотека 2
author | автор | /ˈɔːθər/ | ✍️ | n | author
chapter | глава | /ˈtʃæptər/ | - | n | chapter
poem | стихотворение | /ˈpoʊəm/ | - | n | poem
title | название | /ˈtaɪtl/ | - | n | title
LESSON f07_7 | Конкурсы
champion | чемпион | /ˈtʃæmpiən/ | 🏆 | n | champion
quiz | викторина | /kwɪz/ | ❓ | n:quizzes | quiz
score | счёт (в игре) | /skɔːr/ | - | n | score
LESSON f07_8 | Техника для учёбы
calculator | калькулятор | /ˈkælkjəleɪtər/ | 🧮 | n | calculator
laptop | ноутбук | /ˈlæptɑːp/ | 💻 | n | laptop
printer | принтер | /ˈprɪntər/ | 🖨️ | n | printer
screen | экран | /skriːn/ | 🖥️ | n | screen
LESSON f07_9 | Пишем
sentence | предложение | /ˈsentəns/ | - | n | sentence
paragraph | абзац | /ˈpærəɡræf/ | - | n | paragraph
grammar | грамматика | /ˈɡræmər/ | - | u | grammar
vocabulary | словарный запас | /voʊˈkæbjəleri/ | - | u | vocabulary
LESSON f07_10 | Интернет
internet | интернет | /ˈɪntərnet/ | 🛜 | u | internet
website | сайт | /ˈwebsaɪt/ | - | n | website
password | пароль | /ˈpæswɜːrd/ | - | n | password
online | онлайн | /ˌɑːnˈlaɪn/ | 💻🌐 | adv | online
keyboard | клавиатура | /ˈkiːbɔːrd/ | ⌨️ | n | keyboard
STATION sound le_el

UNIT weather3 | Погода и природа | #2e4053
LESSON f08_1 | Погода 5
fog | туман | /fɑːɡ/ | 🌫️ | u | fog
frost | мороз, иней | /frɔːst/ | - | u | frost
hail | град | /heɪl/ | - | u | hail
breeze | ветерок | /briːz/ | 🍃 | n | breeze
LESSON f08_2 | Прогноз
forecast | прогноз | /ˈfɔːrkæst/ | - | n | forecast
degree | градус | /dɪˈɡriː/ | 🌡️ | n | degree
clear | ясный | /klɪr/ | - | a | clear
heat | жара | /hiːt/ | 🥵 | u | heat
LESSON f08_3 | Природа 5
valley | долина | /ˈvæli/ | - | n | valley
pond | пруд | /pɑːnd/ | - | n | pond
stream | ручей | /striːm/ | - | n | stream
LESSON f08_4 | Растения 2
root | корень | /ruːt/ | - | n | root
seed | семечко | /siːd/ | 🌱 | n | seed
bush | куст | /bʊʃ/ | 🌳 | n:bushes | bush
branch | ветка | /bræntʃ/ | 🌿 | n:branches | branch
STATION grammar might
LESSON f08_5 | Близко
near | близко | /nɪr/ | 🏠🧍 | adv | near
cheer | радостно кричать | /tʃɪr/ | 📣 | v | cheer
dear | дорогой (в письме) | /dɪr/ | - | a | dear
LESSON f08_6 | Насекомые 2
insect | насекомое | /ˈɪnsekt/ | 🐞 | n | insect
dragonfly | стрекоза | /ˈdræɡənflaɪ/ | - | n:dragonflies | dragonfly
grasshopper | кузнечик | /ˈɡræshɑːpər/ | 🦗 | n | grasshopper
LESSON f08_7 | Свет и тень
dark | тёмный | /dɑːrk/ | 🌑 | a | dark
shadow | тень | /ˈʃædoʊ/ | - | n | shadow
sunrise | рассвет | /ˈsʌnraɪz/ | 🌅 | n | sunrise
sunset | закат | /ˈsʌnset/ | 🌇 | n | sunset
LESSON f08_8 | Наблюдаем
notice | замечать | /ˈnoʊtɪs/ | 👀 | v | notice
compare | сравнивать | /kəmˈper/ | - | v | compare
describe | описывать | /dɪˈskraɪb/ | - | v | describe
LESSON f08_9 | Климат
sunshine | солнечный свет | /ˈsʌnʃaɪn/ | - | u | sunshine
climate | климат | /ˈklaɪmət/ | - | n | climate
season | время года | /ˈsiːzn/ | 🌸☀️🍂❄️ | n | season
thermometer | термометр | /θərˈmɑːmɪtər/ | - | n | thermometer
LESSON f08_10 | Опасная погода
flood | наводнение | /flʌd/ |  | n | flood
tornado | торнадо | /tɔːrˈneɪdoʊ/ | 🌪️ | n:tornadoes | tornado
earthquake | землетрясение | /ˈɜːrθkweɪk/ |  | n | earthquake
STATION sound ear_air

UNIT food3 | Вкусы и кухня | #b03a2e
LESSON f09_1 | Продукты 3
honey | мёд | /ˈhʌni/ | 🍯 | u | food_2_honey
flour | мука | /ˈflaʊər/ | - | u | flour
biscuit | печенье (брит.) | /ˈbɪskɪt/ | - | n | biscuit
nut | орех | /nʌt/ | 🥜 | n | nut
LESSON f09_2 | Вкусы
sweet | сладкий | /swiːt/ | 🍬 | a | sweet
sour | кислый | /ˈsaʊər/ | 🍋 | a | sour
salty | солёный | /ˈsɔːlti/ | - | a | salty
spicy | острый (о еде) | /ˈspaɪsi/ | 🌶️ | a | spicy
LESSON f09_3 | Кухня 3
recipe | рецепт | /ˈresəpi/ | - | n | recipe
chopsticks | палочки для еды | /ˈtʃɑːpstɪks/ | 🥢 | pl | chopsticks
dish | блюдо | /dɪʃ/ | - | n:dishes | dish
meal | еда, приём пищи | /miːl/ | - | n | meal
LESSON f09_4 | Овощи 3
bean | фасоль, боб | /biːn/ | 🫘 | n | bean
pea | горошина | /piː/ | 🫛 | n | pea
garlic | чеснок | /ˈɡɑːrlɪk/ | 🧄 | u | garlic
cabbage | капуста | /ˈkæbɪdʒ/ | 🥬 | n | cabbage
STATION grammar if_first
LESSON f09_5 | Новое и верное
true | правдивый | /truː/ | - | a | true
few | несколько | /fjuː/ | 🍎🍎🍎 | det | few
chew | жевать | /tʃuː/ | - | v | chew
stew | рагу | /stuː/ | 🥘 | n | stew
LESSON f09_6 | Полезное
vitamin | витамин | /ˈvaɪtəmɪn/ | - | n | vitamin
fresh | свежий | /freʃ/ | - | a | fresh
delicious | вкусный | /dɪˈlɪʃəs/ | 😋 | a | delicious
snack | перекус | /snæk/ | - | n | snack
LESSON f09_7 | Ресторан 2
bill | счёт (в кафе) | /bɪl/ | 🧾 | n | bill
dessert | десерт | /dɪˈzɜːrt/ | 🍮 | n | dessert
napkin | салфетка | /ˈnæpkɪn/ | - | n | napkin
LESSON f09_8 | Жарко и холодно
roast | запекать | /roʊst/ | - | v | roast
melt | таять | /melt/ | 🫠 | v | melt
freeze | замерзать | /friːz/ | 🥶 | v | freeze
burn | гореть, обжечь | /bɜːrn/ | - | v | burn
LESSON f09_9 | Перекусы
sausage | сосиска | /ˈsɔːsɪdʒ/ | 🌭 | n | sausage
fries | картофель фри | /fraɪz/ | 🍟 | pl | fries
pretzel | крендель | /ˈpretsl/ | 🥨 | n | pretzel
dumpling | пельмень | /ˈdʌmplɪŋ/ | 🥟 | n | dumpling
lunchbox | ланчбокс | /ˈlʌntʃbɑːks/ | - | n:lunchboxes | lunchbox
STATION sound ue_ew

UNIT hobbies2 | Хобби и спорт | #6c3483
LESSON f10_1 | Хобби 3
golf | гольф | /ɡɑːlf/ | ⛳ | u | golf
karate | карате | /kəˈrɑːti/ | 🥋 | u | karate
yoga | йога | /ˈjoʊɡə/ | 🧘 | u | yoga
gymnastics | гимнастика | /dʒɪmˈnæstɪks/ | 🤸 | u | gymnastics
LESSON f10_2 | Читаем
diary | дневник | /ˈdaɪəri/ | 📔 | n:diaries | diary
magazine | журнал | /ˈmæɡəziːn/ | - | n | magazine
crossword | кроссворд | /ˈkrɔːswɜːrd/ | - | n | crossword
LESSON f10_3 | Спорт 6
snowboard | сноуборд | /ˈsnoʊbɔːrd/ | 🏂 | n | snowboard
surf | заниматься сёрфингом | /sɜːrf/ | 🏄 | v | surf
dive | нырять | /daɪv/ | 🤿 | v | dive
skate | кататься на коньках | /skeɪt/ | ⛸️ | v | skate
LESSON f10_4 | Команда 2
coach | тренер | /koʊtʃ/ | - | n:coaches | coach
referee | судья (в спорте) | /ˌrefəˈriː/ | - | n | referee
captain | капитан | /ˈkæptɪn/ | - | n | captain
match | матч | /mætʃ/ | - | n:matches | match
STATION grammar too_enough
LESSON f10_5 | Края и значки
edge | край | /edʒ/ | - | n | edge
hedge | живая изгородь | /hedʒ/ | - | n | hedge
badge | значок | /bædʒ/ | 📛 | n | badge
judge | судья (в суде, конкурсе) | /dʒʌdʒ/ | 🧑‍⚖️ | n | judge
LESSON f10_6 | Поход 2
campfire | костёр | /ˈkæmpfaɪər/ | 🔥 | n | campfire
hike | ходить в поход | /haɪk/ | 🥾 | v | hike
trail | тропа | /treɪl/ | - | n | trail
cabin | домик | /ˈkæbɪn/ | 🛖 | n | cabin
LESSON f10_7 | Мастерим 2
model | модель | /ˈmɑːdl/ | - | n | model
clay | глина | /kleɪ/ | - | u | clay
knit | вязать | /nɪt/ | 🧶 | v | knit
sew | шить | /soʊ/ | 🪡 | v | sew
LESSON f10_8 | Награды
certificate | грамота | /sərˈtɪfɪkət/ | 📜 | n | certificate
reward | награда | /rɪˈwɔːrd/ | - | n | reward
success | успех | /səkˈses/ | - | u | success
LESSON f10_9 | Настольные игры
cards | игральные карты | /kɑːrdz/ | 🃏 | pl | cards
dice | игральные кубики | /daɪs/ | 🎲 | pl | dice
board game | настольная игра | /ˈbɔːrd ɡeɪm/ | - | n | board_game
STATION sound dge_ge

UNIT world2 | Мир и сказки | #0e6655
LESSON f11_1 | Стороны света
continent | континент | /ˈkɑːntɪnənt/ | 🌐 | n | continent
north | север | /nɔːrθ/ | ⬆️ | n | north
south | юг | /saʊθ/ | ⬇️ | n | south
east | восток | /iːst/ | ➡️ | n | east
west | запад | /west/ | ⬅️ | n | west
LESSON f11_2 | Сокровища
globe | глобус | /ɡloʊb/ | 🌍 | n | globe
explorer | исследователь | /ɪkˈsplɔːrər/ |  | n | explorer
treasure | сокровище | /ˈtreʒər/ | - | n | treasure
pirate | пират | /ˈpaɪrət/ | 🏴‍☠️ | n | pirate
LESSON f11_3 | Рыцари
knight | рыцарь | /naɪt/ | - | n | knight
dragon | дракон | /ˈdræɡən/ | 🐉 | n | dragon
prince | принц | /prɪns/ | 🤴 | n | prince
sword | меч | /sɔːrd/ | 🗡️ | n | sword
LESSON f11_4 | Волшебство
witch | ведьма | /wɪtʃ/ | 🧙‍♀️ | n:witches | witch
wizard | волшебник | /ˈwɪzərd/ | 🧙 | n | wizard
fairy | фея | /ˈferi/ | 🧚 | n:fairies | fairy
STATION grammar relative
LESSON f11_5 | Вопросы
quick | быстрый | /kwɪk/ | 💨🐇 | a | quick
question | вопрос | /ˈkwestʃən/ | ❓ | n | question
quarter | четверть | /ˈkwɔːrtər/ | - | n | quarter
LESSON f11_6 | Традиции
festival | фестиваль | /ˈfestɪvl/ | - | n | festival
tradition | традиция | /trəˈdɪʃn/ | - | n | tradition
celebrate | праздновать | /ˈselɪbreɪt/ | 🎊 | v | celebrate
LESSON f11_7 | Природа мира
rainforest | тропический лес | /ˈreɪnfɔːrɪst/ | - | n | rainforest
iceberg | айсберг | /ˈaɪsbɜːrɡ/ |  | n | iceberg
coral | коралл | /ˈkɔːrəl/ | 🪸 | u | coral
LESSON f11_8 | Животные 7
eagle | орёл | /ˈiːɡl/ | 🦅 | n | eagle
leopard | леопард | /ˈlepərd/ | 🐆 | n | leopard
jellyfish | медуза | /ˈdʒelifɪʃ/ | 🪼 | n:jellyfish | jellyfish
starfish | морская звезда | /ˈstɑːrfɪʃ/ | - | n:starfish | starfish
LESSON f11_9 | Сказочные существа
unicorn | единорог | /ˈjuːnɪkɔːrn/ | 🦄 | n | unicorn
mermaid | русалка | /ˈmɜːrmeɪd/ | 🧜‍♀️ | n | mermaid
ghost | привидение | /ɡoʊst/ | 👻 | n | ghost
troll | тролль | /troʊl/ | 🧌 | n | troll
LESSON f11_10 | Северные животные
polar bear | белый медведь | /ˈpoʊlər ber/ | 🐻‍❄️ | n | polar_bear
walrus | морж | /ˈwɔːlrəs/ | - | n:walruses | walrus
reindeer | северный олень | /ˈreɪndɪr/ | - | n:reindeer | reindeer
STATION sound qu_x

UNIT time2 | Время и вещи | #34495e
LESSON f12_1 | Время 5
century | век | /ˈsentʃəri/ | 📅💯 | n:centuries | century
midnight | полночь | /ˈmɪdnaɪt/ | 🕛 | u | midnight
moment | мгновение | /ˈmoʊmənt/ | - | n | moment
LESSON f12_2 | Время 6
soon | скоро | /suːn/ | 🔜 | adv | soon
later | позже | /ˈleɪtər/ | 🕒➡️ | adv | later
once | однажды, один раз | /wʌns/ | 🔂 | adv | once
twice | дважды | /twaɪs/ | ✌️🔁 | adv | twice
LESSON f12_3 | Возраст
young | молодой | /jʌŋ/ | - | a | young
adult | взрослый | /ˈædʌlt/ | 🧑 | n | adult
teenager | подросток | /ˈtiːneɪdʒər/ | - | n | teenager
child | ребёнок | /tʃaɪld/ | 🧒 | n:children | child
LESSON f12_4 | Тайны
secret | секрет | /ˈsiːkrət/ | 🤫 | n | secret
mystery | загадка | /ˈmɪstəri/ | - | n:mysteries | mystery
problem | проблема | /ˈprɑːbləm/ | - | n | problem
solution | решение | /səˈluːʃn/ | - | n | solution
STATION grammar something
LESSON f12_5 | Двойной
double | двойной | /ˈdʌbl/ | - | a | double
trouble | неприятность | /ˈtrʌbl/ | 😵‍💫 | u | trouble
couple | пара (двое) | /ˈkʌpl/ | - | n | couple
LESSON f12_6 | Вещи 2
thing | вещь | /θɪŋ/ | - | n | thing
object | предмет | /ˈɑːbdʒekt/ | - | n | object
tool | инструмент | /tuːl/ | 🛠️ | n | tool
LESSON f12_7 | Начало и конец
begin | начинать | /bɪˈɡɪn/ | - | v | begin
finish | заканчивать | /ˈfɪnɪʃ/ | 🏁 | v | finish
continue | продолжать | /kənˈtɪnjuː/ | - | v | continue
end | конец | /end/ | 🔚 | n | end
LESSON f12_8 | Расписание
alarm clock | будильник | /əˈlɑːrm klɑːk/ | ⏰ | n | alarm_clock
timetable | расписание | /ˈtaɪmteɪbl/ | 📋🕘 | n | timetable
LESSON f12_9 | Будни
weekday | будний день | /ˈwiːkdeɪ/ | 📅💼 | n | weekday
past | прошлое | /pæst/ | 🕰️⬅️ | n | past
LESSON f12_10 | Одежда 4
pocket | карман | /ˈpɑːkɪt/ | - | n | pocket
zipper | молния (на одежде) | /ˈzɪpər/ | - | n | zipper
collar | воротник | /ˈkɑːlər/ | - | n | collar
hanger | вешалка | /ˈhæŋər/ | - | n | hanger
STATION sound ou_u

UNIT feelings2 | Мысли и чувства | #943126
LESSON f13_1 | Чувства 5
excited | взволнованный | /ɪkˈsaɪtɪd/ | 🤩 | a | excited
afraid | испуганный | /əˈfreɪd/ | 😨 | a | afraid
upset | расстроенный | /ʌpˈset/ | 😞 | a | upset
embarrassed | смущённый | /ɪmˈbærəst/ | 😳 | a | embarrassed
LESSON f13_2 | Чувства 6
confused | растерянный | /kənˈfjuːzd/ | 😕 | a | confused
curious | любопытный | /ˈkjʊriəs/ | 🧐 | a | curious
grateful | благодарный | /ˈɡreɪtfl/ | 🙏 | a | grateful
disappointed | разочарованный | /ˌdɪsəˈpɔɪntɪd/ | 😞 | a | disappointed
LESSON f13_3 | Мысли
believe | верить | /bɪˈliːv/ | - | v | believe
wonder | интересоваться, гадать | /ˈwʌndər/ | 🤔 | v | wonder
realize | понимать, осознавать | /ˈriːəlaɪz/ | 💡 | v | realize
LESSON f13_4 | Решения
prefer | предпочитать | /prɪˈfɜːr/ | - | v | prefer
allow | разрешать | /əˈlaʊ/ | - | v | allow
forgive | прощать | /fərˈɡɪv/ | - | v | forgive
apologize | извиняться | /əˈpɑːlədʒaɪz/ | - | v | apologize
STATION grammar linking
LESSON f13_5 | Слова на -or
visitor | посетитель | /ˈvɪzɪtər/ | - | n | visitor
sailor | моряк | /ˈseɪlər/ | - | n | sailor
elevator | лифт | /ˈelɪveɪtər/ | 🛗 | n | elevator
LESSON f13_6 | Дружба
friendship | дружба | /ˈfrendʃɪp/ | 🤝 | u | friendship
trust | доверять | /trʌst/ | - | v | trust
kindness | доброта | /ˈkaɪndnəs/ | - | u | kindness
respect | уважать | /rɪˈspekt/ | - | v | respect
LESSON f13_7 | Характер 2
honest | честный | /ˈɑːnɪst/ | - | a | honest
shy | застенчивый | /ʃaɪ/ | - | a | shy
lazy | ленивый | /ˈleɪzi/ | 🦥 | a | lazy
generous | щедрый | /ˈdʒenərəs/ | - | a | generous
LESSON f13_8 | Приключения
hero | герой | /ˈhɪroʊ/ | 🦸 | n:heroes | hero
adventure | приключение | /ədˈventʃər/ | - | n | adventure
LESSON f13_9 | Характер 3
friendly | дружелюбный | /ˈfrendli/ | - | a | friendly
cheerful | весёлый | /ˈtʃɪrfl/ | - | a | cheerful
serious | серьёзный | /ˈsɪriəs/ | - | a | serious
silly | глупый | /ˈsɪli/ | - | a | silly
LESSON f13_10 | Настроение
emotion | эмоция | /ɪˈmoʊʃn/ | - | n | emotion
feeling | чувство | /ˈfiːlɪŋ/ | - | n | feeling
mood | настроение | /muːd/ | - | n | mood
joy | радость | /dʒɔɪ/ | 😂 | u | joy
fear | страх | /fɪr/ | 😱 | u | fear
STATION sound er_or
`;
