const places = [
  {
    id: "oil-monument",
    title: "Монумент первооткрывателям нефти",
    category: "oil",
    categoryLabel: "Нефтяная история",
    year: "1975",
    address: "пр. Ленина, 21а",
    coords: [54.59944, 52.44167],
    offset: [-22, 10],
    image: "assets/photos/oil-monument.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:%D0%9C%D0%BE%D0%BD%D1%83%D0%BC%D0%B5%D0%BD%D1%82_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC_%D0%BD%D0%B5%D1%84%D1%82%D0%B8.jpg",
    short: "33-метровый символ нефтяной истории города.",
    description: "Один из главных символов Лениногорска. Монумент посвящен геологам, буровикам и нефтедобытчикам, стоявшим у истоков нефтяной отрасли Татарстана.",
    details: "В центре монумента расположен стальной нефтяной фонтан высотой 33 метра. Композиция напоминает о Ромашкинском месторождении, первых буровиках и людях, благодаря которым Лениногорск стал важной точкой нефтяной истории Татарстана.",
    history: "Монумент был открыт в 1975 году к 20-летию города. Он связан с периодом, когда нефтяные промыслы стали главным фактором роста Лениногорска и всего юго-востока Татарстана.",
    visit: "На экскурсии здесь удобно начать рассказ о нефтяниках, рассмотреть форму фонтана и обсудить, почему промышленная тема стала частью городской символики.",
    fact: "Высота центрального элемента около 33 метров, поэтому объект хорошо виден на городской оси и воспринимается как вертикальный ориентир.",
    value: "Главный городской символ и сильная точка для начала экскурсии."
  },
  {
    id: "oil-museum",
    title: "Музей нефти ПАО «Татнефть»",
    category: "oil",
    categoryLabel: "Музей",
    year: "1968",
    address: "ул. Ленина, 3",
    coords: [54.60155, 52.44445],
    offset: [8, -8],
    image: "assets/photos/oil-museum.jpg",
    imageSource: "https://muzneft.tatneft.ru/fotogalereya/?lang=ru",
    short: "Первый в СССР музей нефти.",
    description: "Музей рассказывает об истории татарстанской нефти: от ранних упоминаний до современной нефтепереработки и развития региона.",
    details: "Экспозиции показывают развитие нефтяной отрасли, макеты промыслов, документы, фотографии и оборудование. Это место помогает понять, почему Лениногорск называют одной из родин татарстанской нефти.",
    history: "Музей нефти в Лениногорске считается одним из первых специализированных музеев нефтяной отрасли. Его материалы показывают путь от первых геологических работ до современного производства.",
    visit: "В карточке маршрута музей лучше ставить после монумента: сначала городская символика, затем реальные экспонаты, документы, макеты и предметы труда нефтяников.",
    fact: "Рядом с музеем находится памятник станку-качалке, поэтому это место хорошо показывает связь города с нефтедобычей не только в текстах, но и визуально.",
    value: "Практичная образовательная точка для уроков истории, географии и технологии."
  },
  {
    id: "alley-heroes",
    title: "Аллея Героев и Вечный огонь",
    category: "memory",
    categoryLabel: "Мемориал",
    year: "1970",
    address: "пр. 50 лет Победы",
    coords: [54.60028, 52.44472],
    offset: [34, 4],
    image: "assets/photos/alley-heroes.jpg",
    imageSource: "https://leninogorsk-rt.ru/catalog/document/alleia-geroev",
    short: "Мемориальный комплекс памяти защитников Отечества.",
    description: "На территории мемориала расположены памятник павшим, Вечный огонь, обелиски и барельефы, посвященные героям и труженикам тыла.",
    details: "Аллея открыта в 1970 году. Сегодня она объединяет Вечный огонь, бюсты героев, обелиск Славы и памятные барельефы. Здесь проходят городские мероприятия ко Дню Победы и памятным датам.",
    history: "Мемориальная зона посвящена жителям района, участвовавшим в защите страны, а также труженикам тыла. Аллея стала одним из главных мест памяти в городе.",
    visit: "При осмотре стоит обратить внимание на композицию комплекса: Вечный огонь, памятные плиты, бюсты и пространство для торжественных церемоний.",
    fact: "Аллея подходит для школьного маршрута о воинской и трудовой доблести, потому что соединяет историю семьи, города и страны.",
    value: "Помогает сохранить память о героях района и событиях Великой Отечественной войны."
  },
  {
    id: "time-monument",
    title: "Монумент «Время»",
    category: "memory",
    categoryLabel: "Исторический символ",
    year: "1998",
    address: "кольцо Набережной, Дружбы Народов, Промысловой и Первомайской",
    coords: [54.60806, 52.46444],
    image: "assets/photos/time-monument.jpg",
    imageSource: "https://www.komandirovka.ru/sights/leninogorsk/monument-vremya/",
    short: "Символ связи поколений на месте первых палаток нефтяников.",
    description: "Монумент выполнен в образе часового механизма и напоминает о первых нефтяниках, с приезда которых началось развитие города.",
    details: "Монумент установлен на месте, которое связывают с первыми палатками нефтяников. Образ часового механизма подчеркивает ход времени: от первых строителей и нефтяников к современному городу.",
    history: "Композиция появилась как знак памяти о первых годах освоения нефтяного района. Через образ времени она показывает, что город вырос из труда нескольких поколений.",
    visit: "Эту точку удобно включать в конец маршрута: после музея и мемориалов она помогает подвести итог и поговорить о развитии города во времени.",
    fact: "Монумент расположен на транспортном кольце, поэтому его часто видят не только пешеходы, но и автомобилисты.",
    value: "Хорошая точка для рассказа о начале городской истории."
  },
  {
    id: "yubileiny",
    title: "Парк «Юбилейный»",
    category: "park",
    categoryLabel: "Парк",
    year: "2005",
    address: "пересечение улиц Чайковского и Тукая",
    coords: [54.59667, 52.4549],
    image: "assets/photos/yubileiny.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B0%D1%80%D0%BA_%D0%AE%D0%B1%D0%B8%D0%BB%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA.jpg",
    short: "Парк отдыха, открытый к 50-летию города.",
    description: "Место отдыха для детей, молодежи и взрослых. В проекте парк отмечен как точка семейного маршрута по Лениногорску.",
    details: "Парк открыт в честь 50-летия Лениногорска. Его можно использовать как остановку для семейного маршрута: здесь удобно обсуждать городскую среду, благоустройство и места отдыха для жителей.",
    history: "Название парка связано с юбилейной датой города. Такие общественные пространства показывают, как менялся Лениногорск после промышленного роста.",
    visit: "В маршруте парк можно использовать как спокойную точку отдыха: здесь уместны задания на наблюдение за городской средой, зелеными зонами и удобством пространства.",
    fact: "Парк хорошо подходит для семейной части экскурсии, потому что тема города здесь раскрывается через повседневную жизнь жителей.",
    value: "Показывает, как историческая тема города соединяется с повседневной жизнью."
  },
  {
    id: "makhabbat",
    title: "Парк «Мэхэббэт»",
    category: "park",
    categoryLabel: "Парк",
    year: "2007",
    address: "пересечение улиц Гагарина и Ленинградской",
    coords: [54.60685, 52.46015],
    offset: [-38, -8],
    image: "assets/photos/makhabbat.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B0%D1%80%D0%BA_%D0%9C%D1%8D%D1%85%D1%8D%D0%B1%D0%B1%D1%8D%D1%82,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA.jpg",
    short: "Парк с декоративными мостиками и фонтаном «Ак Барс».",
    description: "Парк известен водоемом, декоративными мостиками, детской площадкой и фонтаном «Ак Барс».",
    details: "Парк открыт в 2007 году. На его территории есть водоем, декоративные мостики, детская площадка и фонтан «Ак Барс». Это одно из узнаваемых мест для прогулок и городских фотографий.",
    history: "Парк «Мэхэббэт» стал частью современного благоустройства Лениногорска. Его название переводится как «любовь», поэтому место часто воспринимается как прогулочная и семейная зона.",
    visit: "Здесь можно показать, как парк устроен вокруг воды, мостиков, дорожек и малых архитектурных форм. Это хороший пример современной городской среды.",
    fact: "Фонтан «Ак Барс» находится в этой же парковой зоне, но на карте он выделен отдельной меткой, чтобы не путать парк целиком и конкретный объект.",
    value: "Подходит для маршрута о современной городской среде и отдыхе."
  },
  {
    id: "gorky-park",
    title: "Парк культуры и отдыха им. М. Горького",
    category: "park",
    categoryLabel: "Парк",
    year: "1956",
    address: "ул. Шашина, 1",
    coords: [54.60833, 52.44972],
    image: "assets/photos/gorky-park.jpg",
    imageSource: "https://commons.wikimedia.org/wiki/File:Leninogorsk_Lesopark.jpg",
    short: "Крупная лесопарковая зона со спортивными объектами.",
    description: "Парк открыт в 1956 году. На территории находятся спортивные объекты школы олимпийского резерва, прогулочные зоны и памятник М. Горькому.",
    details: "Парк им. М. Горького расположен в северной части города. Он сочетает лесопарковую территорию, прогулочные зоны и спортивные объекты школы олимпийского резерва.",
    history: "Парк был открыт в 1956 году и относится к старейшим зеленым зонам Лениногорска. Его развитие связано с формированием города как полноценного места для жизни, спорта и отдыха.",
    visit: "На карте эта точка помогает показать не только памятники, но и природный каркас города: лесопарк, дорожки, спортивные площадки и места прогулок.",
    fact: "В парке находится памятник Максиму Горькому, поэтому место соединяет отдых, культуру и историю городской среды.",
    value: "Показывает спортивную и природную часть городского пространства."
  },
  {
    id: "ak-bars",
    title: "Фонтан «Ак Барс»",
    category: "culture",
    categoryLabel: "Городская среда",
    year: "2007",
    address: "ул. Набережная, парк «Мэхэббэт»",
    coords: [54.60639, 52.46167],
    offset: [36, 8],
    image: "assets/photos/ak-bars.jpg",
    imageSource: "https://leninogorsk-rt.ru/catalog/parki",
    short: "Фонтан со скульптурой барса в парке «Мэхэббэт».",
    description: "Фонтан с чашей и скульптурой барса стал заметной деталью парковой среды Лениногорска.",
    details: "Фонтан «Ак Барс» расположен в парке «Мэхэббэт». Образ барса связан с символикой Татарстана, поэтому объект хорошо подходит для рассказа о региональных знаках и городской идентичности.",
    history: "Фонтан появился вместе с благоустройством парковой зоны. Он стал одной из деталей, по которым парк легко узнают на фотографиях и прогулочных маршрутах.",
    visit: "Эту метку стоит открывать отдельно от парка: парк показывает пространство целиком, а фонтан раскрывает символику и декоративное оформление.",
    fact: "Ак Барс — узнаваемый символ Татарстана, поэтому объект связывает местную карту с региональной культурой.",
    value: "Красивая визуальная точка и символ Татарстана в городской среде."
  },
  {
    id: "tuqay",
    title: "Бюст Габдуллы Тукая",
    category: "culture",
    categoryLabel: "Культура",
    year: "2000",
    address: "пересечение ул. Тукая и пр. Ленина",
    coords: [54.6, 52.44556],
    offset: [14, 30],
    image: "assets/photos/tuqay.jpg",
    imageSource: "https://slava-dan.tatarstan.ru/gabdulla-tukay.htm",
    short: "Памятник татарскому поэту и общественному деятелю.",
    description: "Бюст Габдуллы Тукая расположен на одной из центральных городских осей и связывает карту с культурной историей Татарстана.",
    details: "Бюст открыт в сентябре 2000 года на пересечении улицы Тукая и проспекта Ленина. Памятник посвящен татарскому народному поэту, литературному критику, публицисту и переводчику.",
    history: "Габдулла Тукай занимает особое место в татарской культуре, а его имя часто встречается в названиях улиц, школ и культурных объектов. Бюст в Лениногорске делает эту связь видимой в городской среде.",
    visit: "Эту точку удобно использовать в маршруте после объектов нефтяной истории: она показывает, что город важен не только промышленностью, но и культурной памятью.",
    fact: "Памятник находится рядом с одной из центральных городских осей, поэтому его легко включить в пешую экскурсию.",
    value: "Культурная точка маршрута, связывающая город с татарской литературой."
  }
];

const categoryColors = {
  oil: "#d39a2d",
  memory: "#ba4b42",
  park: "#197256",
  culture: "#356fa8"
};

const categoryLabels = {
  oil: "Н",
  memory: "П",
  park: "З",
  culture: "К"
};

const mapBounds = {
  latMin: 54.586,
  latMax: 54.615,
  lonMin: 52.397,
  lonMax: 52.520,
  width: 2200,
  height: 895
};

const mapTransform = {
  scale: 1,
  x: 0,
  y: 0,
  dragging: false,
  startX: 0,
  startY: 0,
  originX: 0,
  originY: 0
};

const quiz = [
  {
    question: "Какой объект считается одним из главных символов Лениногорска?",
    options: ["Монумент первооткрывателям нефти", "Парк «Юбилейный»", "Бюст Габдуллы Тукая"],
    answer: "Монумент первооткрывателям нефти"
  },
  {
    question: "Где находится Музей нефти ПАО «Татнефть» в Лениногорске?",
    options: ["ул. Ленина, 3", "ул. Набережная, 26", "ул. Шашина, 1"],
    answer: "ул. Ленина, 3"
  },
  {
    question: "Какой парк открыт к 50-летию города?",
    options: ["Парк «Юбилейный»", "Парк «Мэхэббэт»", "Парк им. М. Горького"],
    answer: "Парк «Юбилейный»"
  }
];

let activeCategory = "all";
let selectedPlace = places[0];
let route = JSON.parse(localStorage.getItem("leninogorskRoute") || "[]");
let answered = new Set();
let pins = new Map();
let gallery = [];
let galleryIndex = 0;
let galleryTimer = null;

const galleryFocus = {
  "oil-monument": ["center", "50% 38%", "50% 62%"],
  "oil-museum": ["center", "50% 45%", "50% 68%"],
  "alley-heroes": ["center", "50% 36%", "50% 64%"],
  "time-monument": ["center", "50% 30%", "50% 70%"],
  "yubileiny": ["center", "50% 42%", "50% 68%"],
  "makhabbat": ["center", "50% 48%", "68% 52%"],
  "gorky-park": ["center", "50% 42%", "50% 70%"],
  "ak-bars": ["center", "70% 52%", "50% 65%"],
  "tuqay": ["center", "50% 38%", "50% 66%"]
};

const dom = {
  map: document.querySelector("#map"),
  mapCanvas: document.querySelector("#mapCanvas"),
  pinLayer: document.querySelector("#pinLayer"),
  routePath: document.querySelector("#routePath"),
  zoomInButton: document.querySelector("#zoomInButton"),
  zoomOutButton: document.querySelector("#zoomOutButton"),
  resetMapButton: document.querySelector("#resetMapButton"),
  zoomLabel: document.querySelector("#zoomLabel"),
  visibleCount: document.querySelector("#visibleCount"),
  routeCount: document.querySelector("#routeCount"),
  searchInput: document.querySelector("#searchInput"),
  filterButtons: document.querySelectorAll(".filter-button"),
  title: document.querySelector("#placeTitle"),
  description: document.querySelector("#placeDescription"),
  category: document.querySelector("#placeCategory"),
  year: document.querySelector("#placeYear"),
  address: document.querySelector("#placeAddress"),
  addRouteButton: document.querySelector("#addRouteButton"),
  focusButton: document.querySelector("#focusButton"),
  clearRouteButton: document.querySelector("#clearRouteButton"),
  routeList: document.querySelector("#routeList"),
  routeEmpty: document.querySelector("#routeEmpty"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizOptions: document.querySelector("#quizOptions"),
  quizScore: document.querySelector("#quizScore"),
  detailOverlay: document.querySelector("#detailOverlay"),
  detailImage: document.querySelector("#detailImage"),
  galleryDots: document.querySelector("#galleryDots"),
  detailTag: document.querySelector("#detailTag"),
  detailTitle: document.querySelector("#detailTitle"),
  detailText: document.querySelector("#detailText"),
  detailAddress: document.querySelector("#detailAddress"),
  detailYear: document.querySelector("#detailYear"),
  detailValue: document.querySelector("#detailValue"),
  detailHistory: document.querySelector("#detailHistory"),
  detailVisit: document.querySelector("#detailVisit"),
  detailFact: document.querySelector("#detailFact"),
  detailSource: document.querySelector("#detailSource"),
  closeDetailButton: document.querySelector("#closeDetailButton")
};

function mercatorY(lat) {
  const radians = lat * Math.PI / 180;
  return Math.log(Math.tan(Math.PI / 4 + radians / 2));
}

function lonLatToPoint([lat, lon]) {
  const x = ((lon - mapBounds.lonMin) / (mapBounds.lonMax - mapBounds.lonMin)) * mapBounds.width;
  const top = mercatorY(mapBounds.latMax);
  const bottom = mercatorY(mapBounds.latMin);
  const y = ((top - mercatorY(lat)) / (top - bottom)) * mapBounds.height;
  return [x, y];
}

function positionToPercent(coords) {
  const [x, y] = lonLatToPoint(coords);
  return {
    left: `${(x / mapBounds.width) * 100}%`,
    top: `${(y / mapBounds.height) * 100}%`
  };
}

function initPins() {
  places.forEach((place) => {
    const pin = document.createElement("button");
    const position = positionToPercent(place.coords);
    pin.type = "button";
    pin.className = `map-pin pin-${place.category}`;
    pin.style.left = position.left;
    pin.style.top = position.top;
    pin.style.marginLeft = `${place.offset?.[0] || 0}px`;
    pin.style.marginTop = `${place.offset?.[1] || 0}px`;
    pin.style.setProperty("--pin-photo", `url("../${place.image}")`);
    pin.dataset.id = place.id;
    pin.title = `${place.title}. ${place.short}`;
    pin.setAttribute("aria-label", `Точка на карте: ${place.title}`);
    pin.innerHTML = `<span>${categoryLabels[place.category]}</span>`;
    pin.addEventListener("click", () => {
      selectPlace(place.id, false);
      openDetails(place);
    });
    dom.pinLayer.append(pin);
    pins.set(place.id, pin);
  });
}

function selectPlace(id, scrollToMap) {
  selectedPlace = places.find((place) => place.id === id) || places[0];
  dom.title.textContent = selectedPlace.title;
  dom.description.textContent = selectedPlace.description;
  dom.category.textContent = selectedPlace.categoryLabel;
  dom.year.textContent = selectedPlace.year;
  dom.address.textContent = selectedPlace.address;
  dom.addRouteButton.textContent = route.includes(selectedPlace.id) ? "Уже в маршруте" : "Добавить в маршрут";

  pins.forEach((pin) => pin.classList.remove("active"));
  const selectedPin = pins.get(selectedPlace.id);
  if (selectedPin) selectedPin.classList.add("active");

  if (scrollToMap) {
    dom.map.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function getPlaceGallery(place) {
  const positions = galleryFocus[place.id] || ["center", "50% 42%", "50% 66%"];
  return [
    { src: place.image, label: "Общий вид", fit: "contain", position: positions[0] },
    { src: place.image, label: "Крупный план", fit: "cover", position: positions[1] },
    { src: place.image, label: "Детали места", fit: "cover", position: positions[2] }
  ];
}

function renderGalleryDots() {
  dom.galleryDots.innerHTML = "";
  gallery.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-dot";
    button.setAttribute("aria-label", `${item.label}: фото ${index + 1}`);
    button.addEventListener("click", () => {
      showGalleryImage(index);
      startGalleryAutoplay();
    });
    dom.galleryDots.append(button);
  });
}

function showGalleryImage(index) {
  if (!gallery.length) return;
  galleryIndex = (index + gallery.length) % gallery.length;
  const item = gallery[galleryIndex];
  dom.detailImage.src = item.src;
  dom.detailImage.alt = `${selectedPlace.title}. ${item.label}`;
  dom.detailImage.style.objectFit = item.fit;
  dom.detailImage.style.objectPosition = item.position;
  dom.galleryDots.querySelectorAll(".gallery-dot").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === galleryIndex);
  });
}

function startGalleryAutoplay() {
  stopGalleryAutoplay();
  if (gallery.length < 2 || dom.detailOverlay.hidden) return;
  galleryTimer = window.setTimeout(() => {
    showGalleryImage(galleryIndex + 1);
    startGalleryAutoplay();
  }, 10000);
}

function stopGalleryAutoplay() {
  if (galleryTimer) {
    window.clearTimeout(galleryTimer);
    galleryTimer = null;
  }
}

function openDetails(place = selectedPlace) {
  selectedPlace = place;
  gallery = getPlaceGallery(place);
  galleryIndex = 0;
  renderGalleryDots();
  showGalleryImage(0);
  dom.detailTag.textContent = place.categoryLabel;
  dom.detailTitle.textContent = place.title;
  dom.detailText.textContent = place.details;
  dom.detailAddress.textContent = place.address;
  dom.detailYear.textContent = place.year;
  dom.detailValue.textContent = place.value;
  dom.detailHistory.textContent = place.history;
  dom.detailVisit.textContent = place.visit;
  dom.detailFact.textContent = place.fact;
  dom.detailSource.href = place.imageSource;
  dom.detailOverlay.hidden = false;
  startGalleryAutoplay();
  dom.closeDetailButton.focus();
}

function closeDetails() {
  stopGalleryAutoplay();
  dom.detailOverlay.hidden = true;
}

function visiblePlaces() {
  const query = dom.searchInput.value.trim().toLowerCase();
  return places.filter((place) => {
    const categoryMatch = activeCategory === "all" || place.category === activeCategory;
    const haystack = `${place.title} ${place.description} ${place.address} ${place.categoryLabel}`.toLowerCase();
    return categoryMatch && haystack.includes(query);
  });
}

function renderPins() {
  const visibleIds = new Set(visiblePlaces().map((place) => place.id));
  pins.forEach((pin, id) => {
    pin.classList.toggle("hidden", !visibleIds.has(id));
  });
  dom.visibleCount.textContent = visibleIds.size;
}

function addSelectedToRoute() {
  if (!route.includes(selectedPlace.id)) {
    route.push(selectedPlace.id);
    localStorage.setItem("leninogorskRoute", JSON.stringify(route));
  }
  renderRoute();
  selectPlace(selectedPlace.id, false);
}

function renderRoute() {
  dom.routeList.innerHTML = "";
  const routePlaces = route.map((id) => places.find((place) => place.id === id)).filter(Boolean);
  dom.routeEmpty.hidden = routePlaces.length > 0;
  dom.routeCount.textContent = routePlaces.length;
  dom.routePath.setAttribute("points", routePlaces.map((place) => lonLatToPoint(place.coords).join(",")).join(" "));

  routePlaces.forEach((place) => {
    const item = document.createElement("li");
    item.textContent = place.title;
    item.style.borderLeft = `4px solid ${categoryColors[place.category]}`;
    dom.routeList.append(item);
  });
}

function clampMapOffset() {
  const rect = dom.map.getBoundingClientRect();
  const canvasWidth = Number.parseFloat(dom.mapCanvas.style.width) || rect.width;
  const canvasHeight = Number.parseFloat(dom.mapCanvas.style.height) || rect.height;
  const maxX = Math.max(0, (canvasWidth * mapTransform.scale - rect.width) / 2);
  const maxY = Math.max(0, (canvasHeight * mapTransform.scale - rect.height) / 2);
  mapTransform.x = Math.max(-maxX, Math.min(maxX, mapTransform.x));
  mapTransform.y = Math.max(-maxY, Math.min(maxY, mapTransform.y));
}

function fitMapCanvas() {
  const rect = dom.map.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const mapAspect = mapBounds.width / mapBounds.height;
  const viewportAspect = rect.width / rect.height;
  let width;
  let height;

  if (viewportAspect > mapAspect) {
    width = rect.width;
    height = rect.width / mapAspect;
  } else {
    height = rect.height;
    width = rect.height * mapAspect;
  }

  dom.mapCanvas.style.width = `${width}px`;
  dom.mapCanvas.style.height = `${height}px`;
  dom.mapCanvas.style.left = `${(rect.width - width) / 2}px`;
  dom.mapCanvas.style.top = `${(rect.height - height) / 2}px`;
}

function applyMapTransform() {
  fitMapCanvas();
  clampMapOffset();
  dom.mapCanvas.style.transform = `translate(${mapTransform.x}px, ${mapTransform.y}px) scale(${mapTransform.scale})`;
  dom.zoomLabel.textContent = `${Math.round(mapTransform.scale * 100)}%`;
}

function zoomMap(delta) {
  const nextScale = Math.max(1, Math.min(2.8, +(mapTransform.scale + delta).toFixed(2)));
  mapTransform.scale = nextScale;
  applyMapTransform();
}

function resetMapTransform() {
  mapTransform.scale = 1;
  mapTransform.x = 0;
  mapTransform.y = 0;
  applyMapTransform();
}

function startMapDrag(event) {
  if (mapTransform.scale <= 1) return;
  mapTransform.dragging = true;
  mapTransform.startX = event.clientX;
  mapTransform.startY = event.clientY;
  mapTransform.originX = mapTransform.x;
  mapTransform.originY = mapTransform.y;
  dom.mapCanvas.classList.add("dragging");
}

function moveMapDrag(event) {
  if (!mapTransform.dragging) return;
  mapTransform.x = mapTransform.originX + event.clientX - mapTransform.startX;
  mapTransform.y = mapTransform.originY + event.clientY - mapTransform.startY;
  applyMapTransform();
}

function endMapDrag() {
  mapTransform.dragging = false;
  dom.mapCanvas.classList.remove("dragging");
}

function clearRoute() {
  route = [];
  localStorage.removeItem("leninogorskRoute");
  renderRoute();
  selectPlace(selectedPlace.id, false);
}

function renderQuiz(index = 0) {
  const item = quiz[index];
  dom.quizQuestion.textContent = item.question;
  dom.quizOptions.innerHTML = "";

  item.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      const isCorrect = option === item.answer;
      button.classList.add(isCorrect ? "correct" : "wrong");
      if (isCorrect) answered.add(index);
      dom.quizScore.textContent = `${answered.size}/${quiz.length}`;

      setTimeout(() => {
        renderQuiz((index + 1) % quiz.length);
      }, 750);
    });
    dom.quizOptions.append(button);
  });

  dom.quizScore.textContent = `${answered.size}/${quiz.length}`;
}

function bindEvents() {
  dom.searchInput.addEventListener("input", renderPins);

  dom.filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      dom.filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeCategory = button.dataset.category;
      renderPins();
    });
  });

  dom.addRouteButton.addEventListener("click", addSelectedToRoute);
  dom.focusButton.addEventListener("click", () => openDetails(selectedPlace));
  dom.clearRouteButton.addEventListener("click", clearRoute);
  dom.zoomInButton.addEventListener("click", () => zoomMap(0.25));
  dom.zoomOutButton.addEventListener("click", () => zoomMap(-0.25));
  dom.resetMapButton.addEventListener("click", resetMapTransform);
  dom.map.addEventListener("wheel", (event) => {
    if (!event.ctrlKey) return;
    event.preventDefault();
    zoomMap(event.deltaY < 0 ? 0.15 : -0.15);
  }, { passive: false });
  dom.mapCanvas.addEventListener("pointerdown", startMapDrag);
  window.addEventListener("pointermove", moveMapDrag);
  window.addEventListener("pointerup", endMapDrag);
  window.addEventListener("resize", applyMapTransform);
  dom.closeDetailButton.addEventListener("click", closeDetails);
  dom.detailOverlay.addEventListener("click", (event) => {
    if (event.target === dom.detailOverlay) closeDetails();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !dom.detailOverlay.hidden) closeDetails();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPins();
  bindEvents();
  selectPlace(selectedPlace.id, false);
  renderPins();
  renderRoute();
  renderQuiz();
  applyMapTransform();
});
