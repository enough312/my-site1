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
    gallery: ["assets/photos/oil-monument.jpg", "assets/photos/oil-monument-2.jpg", "assets/photos/oil-monument-3.jpg"],
    imageSource: "https://commons.wikimedia.org/wiki/File:%D0%9C%D0%BE%D0%BD%D1%83%D0%BC%D0%B5%D0%BD%D1%82_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC_%D0%BD%D0%B5%D1%84%D1%82%D0%B8.jpg",
    short: "33-метровый символ нефтяной истории города.",
    description: "Один из главных символов Лениногорска. Монумент посвящен геологам, буровикам и нефтедобытчикам, стоявшим у истоков нефтяной отрасли Татарстана, поэтому с него удобно начинать знакомство с городом.",
    details: "В центре монумента расположен стальной нефтяной фонтан высотой около 33 метров. Композиция напоминает о Ромашкинском месторождении, первых буровиках и людях, благодаря которым Лениногорск стал важной точкой нефтяной истории Татарстана. Для школьного маршрута объект ценен тем, что переводит промышленную историю в понятный визуальный образ: фонтан, вертикаль, площадь и городская перспектива.",
    history: "Монумент был открыт в 1975 году к 20-летию города. Он связан с периодом, когда нефтяные промыслы стали главным фактором роста Лениногорска и всего юго-востока Татарстана. Такие памятники помогают увидеть, как профессии геологов, буровиков, строителей и нефтяников вошли в городскую память.",
    visit: "На экскурсии здесь удобно начать рассказ о нефтяниках, рассмотреть форму фонтана, сравнить памятник с настоящей буровой вышкой и обсудить, почему промышленная тема стала частью городской символики. Рядом можно сделать вводную остановку маршрута и объяснить, как нефть повлияла на планировку и развитие Лениногорска.",
    fact: "Высота центрального элемента около 33 метров, поэтому объект хорошо виден на городской оси и воспринимается как вертикальный ориентир. Визуально он похож на нефтяной фонтан, но работает как памятный знак людям, а не машине.",
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
    gallery: ["assets/photos/oil-museum.jpg", "assets/photos/oil-museum-2.jpg", "assets/photos/oil-museum-3.jpg"],
    imageSource: "https://muzneft.tatneft.ru/fotogalereya/?lang=ru",
    short: "Первый в СССР музей нефти.",
    description: "Музей рассказывает об истории татарстанской нефти: от ранних геологических поисков до современной нефтедобычи, переработки и развития юго-востока республики.",
    details: "Экспозиции показывают развитие нефтяной отрасли, макеты промыслов, документы, фотографии, минералы, образцы оборудования и материалы о людях профессии. Это место помогает понять, почему Лениногорск называют одной из родин татарстанской нефти. В отличие от памятника, музей дает не только образ, но и факты: даты, технологии, карты месторождений и реальные предметы труда.",
    history: "Музей нефти в Лениногорске считается одним из первых специализированных музеев нефтяной отрасли. Его материалы показывают путь от первых геологических работ до современного производства. Для города это важная образовательная площадка: через экспозицию видно, как промышленность изменила поселение, профессию, быт и городскую инфраструктуру.",
    visit: "В маршруте музей лучше ставить после монумента: сначала городская символика, затем реальные экспонаты, документы, макеты и предметы труда нефтяников. На остановке можно дать задание: найти связь между макетом промысла, картой месторождения и современным обликом города.",
    fact: "Рядом с музеем находится памятник станку-качалке, поэтому это место хорошо показывает связь города с нефтедобычей не только в текстах, но и визуально. Экспозиция особенно полезна для тем по географии, истории, технологии и краеведению.",
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
    gallery: ["assets/photos/alley-heroes.jpg", "assets/photos/alley-heroes-2.jpg", "assets/photos/alley-heroes-3.jpg"],
    imageSource: "https://leninogorsk-rt.ru/catalog/document/alleia-geroev",
    short: "Мемориальный комплекс памяти защитников Отечества.",
    description: "На территории мемориала расположены памятник павшим, Вечный огонь, обелиски и барельефы, посвященные героям, защитникам Отечества и труженикам тыла.",
    details: "Аллея открыта в 1970 году. Сегодня она объединяет Вечный огонь, бюсты героев, обелиск Славы, памятные барельефы и пространство для городских церемоний. Это не просто точка на карте, а место коллективной памяти, куда жители приходят в памятные даты, на митинги и школьные мероприятия.",
    history: "Мемориальная зона посвящена жителям района, участвовавшим в защите страны, а также труженикам тыла. Аллея стала одним из главных мест памяти в городе. Через такие пространства история войны и труда перестает быть только страницей учебника и связывается с конкретными именами, семьями и улицами Лениногорска.",
    visit: "При осмотре стоит обратить внимание на композицию комплекса: Вечный огонь, памятные плиты, бюсты и пространство для торжественных церемоний. В школьной экскурсии здесь уместна спокойная остановка: можно обсудить, почему городам нужны мемориалы и как они помогают сохранять память.",
    fact: "Аллея подходит для маршрута о воинской и трудовой доблести, потому что соединяет историю семьи, города и страны. Это одна из точек, где лучше говорить не только о датах, но и о личной ответственности за сохранение памяти.",
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
    gallery: ["assets/photos/time-monument.jpg", "assets/photos/time-monument-2.jpg", "assets/photos/time-monument-3.jpg"],
    imageSource: "https://www.komandirovka.ru/sights/leninogorsk/monument-vremya/",
    short: "Символ связи поколений на месте первых палаток нефтяников.",
    description: "Монумент выполнен в образе часового механизма и напоминает о первых нефтяниках, строителях и времени, за которое рабочий поселок превратился в современный город.",
    details: "Монумент установлен на месте, которое связывают с первыми палатками нефтяников. Образ часового механизма подчеркивает ход времени: от первых строителей и нефтяников к современному городу. В маршруте эта точка помогает показать не только отдельный памятник, но и идею развития: город меняется, но сохраняет память о начале.",
    history: "Композиция появилась как знак памяти о первых годах освоения нефтяного района. Через образ времени она показывает, что город вырос из труда нескольких поколений. Для Лениногорска этот мотив особенно важен: нефтяная история здесь связана не с одной датой, а с длительной работой людей разных профессий.",
    visit: "Эту точку удобно включать в конец маршрута: после музея и мемориалов она помогает подвести итог и поговорить о развитии города во времени. Можно предложить участникам маршрута сравнить старые и новые городские символы и подумать, какие объекты лучше всего рассказывают о Лениногорске сегодня.",
    fact: "Монумент расположен на транспортном кольце, поэтому его часто видят не только пешеходы, но и автомобилисты. Это пример памятника-ориентира: он работает и как знак памяти, и как заметная городская точка.",
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
    gallery: ["assets/photos/yubileiny.jpg", "assets/photos/yubileiny-2.jpg", "assets/photos/yubileiny-3.jpg"],
    imageSource: "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B0%D1%80%D0%BA_%D0%AE%D0%B1%D0%B8%D0%BB%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA.jpg",
    short: "Парк отдыха, открытый к 50-летию города.",
    description: "Место отдыха для детей, молодежи и взрослых. В проекте парк отмечен как точка семейного маршрута по Лениногорску и пример благоустроенного пространства рядом с жилыми кварталами.",
    details: "Парк открыт в честь 50-летия Лениногорска. Его можно использовать как остановку для семейного маршрута: здесь удобно обсуждать городскую среду, благоустройство, озеленение, дорожки, малые архитектурные формы и места отдыха для жителей. Парк показывает, что городская история состоит не только из памятников, но и из повседневных мест, где люди гуляют и проводят время.",
    history: "Название парка связано с юбилейной датой города. Такие общественные пространства показывают, как менялся Лениногорск после промышленного роста: рядом с производственной и мемориальной историей появляется тема качества городской жизни. Для конкурса это хорошая точка, чтобы показать современное развитие города.",
    visit: "В маршруте парк можно использовать как спокойную точку отдыха: здесь уместны задания на наблюдение за городской средой, зелеными зонами и удобством пространства. Участники могут оценить, что делает парк комфортным: дорожки, освещение, обзорность, безопасность и близость к жилым домам.",
    fact: "Парк хорошо подходит для семейной части экскурсии, потому что тема города здесь раскрывается через повседневную жизнь жителей. Юбилейное название напоминает, что городские пространства тоже могут быть памятными.",
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
    gallery: ["assets/photos/makhabbat.jpg", "assets/photos/makhabbat-2.jpg", "assets/photos/makhabbat-3.jpg"],
    imageSource: "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B0%D1%80%D0%BA_%D0%9C%D1%8D%D1%85%D1%8D%D0%B1%D0%B1%D1%8D%D1%82,_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA.jpg",
    short: "Парк с декоративными мостиками и фонтаном «Ак Барс».",
    description: "Парк известен водоемом, декоративными мостиками, детской площадкой и фонтаном «Ак Барс». Это место хорошо показывает современную прогулочную среду Лениногорска.",
    details: "Парк открыт в 2007 году. На его территории есть водоем, декоративные мостики, детская площадка, дорожки и фонтан «Ак Барс». Это одно из узнаваемых мест для прогулок и городских фотографий. В проекте парк важен как пример того, как город работает не только как промышленный центр, но и как место для отдыха, встреч и семейных прогулок.",
    history: "Парк «Мэхэббэт» стал частью современного благоустройства Лениногорска. Его название переводится как «любовь», поэтому место часто воспринимается как прогулочная и семейная зона. В городской карте он дополняет нефтяные и мемориальные объекты темой современной повседневной жизни.",
    visit: "Здесь можно показать, как парк устроен вокруг воды, мостиков, дорожек и малых архитектурных форм. Это хороший пример современной городской среды: участники маршрута могут посмотреть, как рельеф, водоем и декоративные объекты формируют узнаваемое место.",
    fact: "Фонтан «Ак Барс» находится в этой же парковой зоне, но на карте он выделен отдельной меткой, чтобы не путать парк целиком и конкретный объект. Так маршрут показывает и пространство, и его самый заметный символ.",
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
    gallery: ["assets/photos/gorky-park.jpg", "assets/photos/gorky-park-2.jpg", "assets/photos/gorky-park-3.jpg"],
    imageSource: "https://commons.wikimedia.org/wiki/File:Leninogorsk_Lesopark.jpg",
    short: "Крупная лесопарковая зона со спортивными объектами.",
    description: "Парк открыт в 1956 году. На территории находятся спортивные объекты школы олимпийского резерва, прогулочные зоны, лесопарковый массив и памятник М. Горькому.",
    details: "Парк им. М. Горького расположен в северной части города. Он сочетает лесопарковую территорию, прогулочные зоны, спортивные объекты и видовые точки. В отличие от компактных городских скверов, это более природная часть маршрута: здесь хорошо видно, как город связан с ландшафтом, водой, деревьями и рельефом.",
    history: "Парк был открыт в 1956 году и относится к старейшим зеленым зонам Лениногорска. Его развитие связано с формированием города как полноценного места для жизни, спорта и отдыха. Такие территории важны для городов промышленного типа: они дают жителям пространство для восстановления, прогулок и занятий спортом.",
    visit: "На карте эта точка помогает показать не только памятники, но и природный каркас города: лесопарк, дорожки, спортивные площадки и места прогулок. Во время экскурсии здесь можно обсудить, почему зеленые зоны важны для здоровья города и жителей.",
    fact: "В парке находится памятник Максиму Горькому, поэтому место соединяет отдых, культуру и историю городской среды. Парк хорошо подходит для финальной прогулочной части маршрута.",
    value: "Показывает спортивную и природную часть городского пространства."
  },
  {
    id: "white-rotunda",
    title: "Белая ротонда",
    category: "culture",
    categoryLabel: "Архитектура",
    year: "1960-е",
    address: "Парк культуры и отдыха им. М. Горького",
    coords: [54.6108, 52.4452],
    offset: [-46, -8],
    image: "assets/photos/white-rotunda.jpg",
    gallery: ["assets/photos/white-rotunda.jpg", "assets/photos/white-rotunda-2.jpg", "assets/photos/white-rotunda-3.jpg"],
    imageSource: "https://leninogorsk-rt.ru/catalog/document/belaia-rotonda",
    short: "Светлая смотровая ротонда с надписью «Лениногорск».",
    description: "Белая ротонда расположена в парке им. М. Горького и давно воспринимается как один из видовых символов Лениногорска: с ней связаны прогулки, фотографии и узнаваемый силуэт города.",
    details: "Белая ротонда — архитектурная точка на возвышенности в зоне парка им. М. Горького. Ее колоннада, круглая форма и крупная надпись «Лениногорск» делают объект заметным городским ориентиром. Для интерактивной карты это важная остановка: она показывает не только памятники и музеи, но и видовые места, откуда город воспринимается как цельный ландшафт.",
    history: "Ротонда относится к тем объектам, которые формировали праздничный и прогулочный образ Лениногорска во второй половине XX века. В справочных материалах ее связывают с проектом архитектора В. И. Бельского и реконструкцией парковой зоны. Такие объекты часто становятся народными символами: жители узнают их не по официальной дате, а по личным фотографиям, встречам и прогулкам.",
    visit: "На остановке стоит рассмотреть колонны, форму площадки, памятный камень и надпись. Белая ротонда хорошо подходит для разговора о том, как архитектура работает вместе с рельефом: объект не просто стоит в парке, а подчеркивает высоту места и открывает видовую точку.",
    fact: "Белая ротонда особенно выразительна на фотографиях за счет контраста светлых колонн, зелени парка и красной надписи. Поэтому ее удобно использовать как визуальную обложку маршрута или финальную точку прогулки по парку.",
    value: "Добавляет маршруту узнаваемую видовую точку и архитектурный символ города."
  },
  {
    id: "black-rotunda",
    title: "Черная ротонда",
    category: "culture",
    categoryLabel: "Смотровая площадка",
    year: "2005",
    address: "Парк культуры и отдыха им. М. Горького, смотровая площадка",
    coords: [54.61237, 52.46589],
    offset: [28, -10],
    image: "assets/photos/black-rotunda.jpg",
    gallery: ["assets/photos/black-rotunda.jpg", "assets/photos/black-rotunda-2.jpg", "assets/photos/black-rotunda-3.jpg"],
    imageSource: "https://tatfrontu.ru/location/obekt-kulturnogo-naslediya-smotrovaya-ploshchadka-na-territorii-parka-kultury-i-otdyha",
    short: "Высокая смотровая башня-ротонда с видом на город.",
    description: "Черная ротонда — высокая смотровая площадка в парке им. М. Горького. Она выделяется темным каркасом, круговой верхней частью и обзором на лесопарковую территорию.",
    details: "Черная ротонда воспринимается как более современная и строгая пара белой ротонды. Вертикальные опоры, круглая верхняя площадка и темный цвет делают ее заметным ориентиром на границе парковой зоны. Для сайта это хороший объект, потому что он добавляет маршруту тему обзора: посетитель может не только читать о городе, но и представить, откуда его удобно рассматривать.",
    history: "Смотровая площадка связана с благоустройством парка и юбилейной темой Лениногорска. Ее часто называют черной ротондой из-за темного металлического каркаса. В отличие от классической белой колоннады, она выглядит как индустриальная башня: это хорошо сочетается с образом города нефтяников и природным окружением парка.",
    visit: "Здесь стоит обратить внимание на высоту, конструкцию опор, круговую форму и расположение среди деревьев. В маршруте черная ротонда может стать точкой сравнения: как меняется впечатление от объекта, если одна ротонда легкая и светлая, а другая высокая, темная и почти промышленная.",
    fact: "Пара белой и черной ротонды делает парк им. Горького более интересным для карты: два объекта находятся в одной зеленой зоне, но создают разные образы города — классический прогулочный и современный обзорный.",
    value: "Сильная смотровая точка и контрастная пара к белой ротонде."
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
    gallery: ["assets/photos/ak-bars.jpg", "assets/photos/ak-bars-2.jpg", "assets/photos/ak-bars-3.jpg"],
    imageSource: "https://leninogorsk-rt.ru/catalog/parki",
    short: "Фонтан со скульптурой барса в парке «Мэхэббэт».",
    description: "Фонтан с чашей и скульптурой барса стал заметной деталью парковой среды Лениногорска и одной из визуальных точек парка «Мэхэббэт».",
    details: "Фонтан «Ак Барс» расположен в парке «Мэхэббэт». Образ барса связан с символикой Татарстана, поэтому объект хорошо подходит для рассказа о региональных знаках и городской идентичности. В маршруте это небольшая, но выразительная остановка: через один декоративный объект можно объяснить, как город использует символы республики в общественном пространстве.",
    history: "Фонтан появился вместе с благоустройством парковой зоны. Он стал одной из деталей, по которым парк легко узнают на фотографиях и прогулочных маршрутах. Такие объекты создают не только украшение, но и точку притяжения: около них фотографируются, назначают встречи и запоминают место.",
    visit: "Эту метку стоит открывать отдельно от парка: парк показывает пространство целиком, а фонтан раскрывает символику и декоративное оформление. Можно рассмотреть фигуру барса, чашу, расположение объекта относительно дорожек и водной зоны.",
    fact: "Ак Барс — узнаваемый символ Татарстана, поэтому объект связывает местную карту с региональной культурой. На маршруте он помогает перейти от темы городской среды к теме символов и идентичности.",
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
    gallery: ["assets/photos/tuqay.jpg", "assets/photos/tuqay-2.jpg", "assets/photos/tuqay-3.jpg"],
    imageSource: "https://slava-dan.tatarstan.ru/gabdulla-tukay.htm",
    short: "Памятник татарскому поэту и общественному деятелю.",
    description: "Бюст Габдуллы Тукая расположен на одной из центральных городских осей и связывает карту Лениногорска с культурной историей Татарстана.",
    details: "Бюст открыт в сентябре 2000 года на пересечении улицы Тукая и проспекта Ленина. Памятник посвящен татарскому народному поэту, литературному критику, публицисту и переводчику. Для интерактивной карты эта точка важна тем, что добавляет к нефтяной и мемориальной теме культурное измерение города.",
    history: "Габдулла Тукай занимает особое место в татарской культуре, а его имя часто встречается в названиях улиц, школ и культурных объектов. Бюст в Лениногорске делает эту связь видимой в городской среде. Он показывает, что городская память складывается из разных слоев: промышленности, войны, литературы, языка и образования.",
    visit: "Эту точку удобно использовать в маршруте после объектов нефтяной истории: она показывает, что город важен не только промышленностью, но и культурной памятью. Здесь можно обсудить, почему именами писателей называют улицы и почему памятники литературным деятелям нужны не только в крупных столицах.",
    fact: "Памятник находится рядом с одной из центральных городских осей, поэтому его легко включить в пешую экскурсию. Эта остановка хорошо подходит для связи краеведения с уроками литературы и татарской культуры.",
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

const photoVersion = "20260501-quality-gallery";

function versionedPhoto(src) {
  return `${src}?v=${photoVersion}`;
}

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
  },
  {
    question: "Какой объект находится в парке «Мэхэббэт» и связан с символикой Татарстана?",
    options: ["Фонтан «Ак Барс»", "Монумент «Время»", "Аллея Героев"],
    answer: "Фонтан «Ак Барс»"
  },
  {
    question: "Какой объект лучше всего подходит для рассказа о татарской литературе?",
    options: ["Бюст Габдуллы Тукая", "Музей нефти", "Монумент первооткрывателям нефти"],
    answer: "Бюст Габдуллы Тукая"
  },
  {
    question: "Какая точка маршрута показывает природную и спортивную часть города?",
    options: ["Парк культуры и отдыха им. М. Горького", "Монумент «Время»", "Фонтан «Ак Барс»"],
    answer: "Парк культуры и отдыха им. М. Горького"
  },
  {
    question: "Какие две новые архитектурные точки находятся в парке им. М. Горького?",
    options: ["Белая и черная ротонда", "Музей нефти и фонтан «Ак Барс»", "Аллея Героев и бюст Тукая"],
    answer: "Белая и черная ротонда"
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
  "white-rotunda": ["center", "50% 44%", "50% 68%"],
  "black-rotunda": ["center", "50% 42%", "50% 68%"],
  "ak-bars": ["center", "70% 52%", "50% 65%"],
  "tuqay": ["center", "50% 38%", "50% 66%"]
};

const placeTasks = {
  "oil-monument": "Найдите на барельефе детали, которые напоминают о труде нефтяников: инструменты, фигуры людей, промышленные мотивы. Подумайте, почему памятник сделан таким высоким и заметным.",
  "oil-museum": "Выберите один экспонат и объясните, как он связан с добычей нефти: что он показывает, какую профессию представляет и почему без таких предметов история города была бы неполной.",
  "alley-heroes": "Посмотрите, как устроена аллея: направление дорожки, бюсты, плиты, Вечный огонь. Сформулируйте одно правило поведения в мемориальном месте и объясните его смысл.",
  "time-monument": "Рассмотрите шестерни и вертикальные элементы монумента. Придумайте короткую фразу для экскурсовода: как через образ времени рассказать о первых строителях Лениногорска.",
  yubileiny: "Оцените парк как место для жителей: где удобно гулять, где можно отдохнуть, что помогает чувствовать себя безопасно. Отметьте одну сильную сторону и одну идею для улучшения.",
  makhabbat: "Сравните парк и фонтан «Ак Барс»: что работает как пространство для прогулки, а что как символическая фототочка. Объясните, почему на карте они отмечены отдельно.",
  "gorky-park": "Найдите признаки лесопарка: деревья, водоем, спортивные зоны, дорожки. Подумайте, чем такой парк отличается от небольшого сквера в центре города.",
  "white-rotunda": "Сравните ротонду с окружающим парком: как колонны, надпись и памятный камень помогают сделать место узнаваемым? Найдите лучший ракурс для фотографии.",
  "black-rotunda": "Посмотрите на конструкцию башни: почему ее можно назвать смотровой площадкой и городским ориентиром? Сравните ее настроение с белой ротондой.",
  "ak-bars": "Рассмотрите фигуру барса и окружение фонтана. Объясните, как региональный символ Татарстана становится частью городской среды Лениногорска.",
  tuqay: "Вспомните, кто такой Габдулла Тукай, и найдите связь между памятником, названием улицы и культурной памятью города. Почему литературные имена важно показывать на карте?"
};

const placeExtras = {
  "oil-monument": "В рассказе стоит подчеркнуть, что Лениногорск вырос как город нефтяников: промышленность здесь стала не отдельной темой, а частью городской идентичности. Монумент хорошо открывает маршрут, потому что сразу объясняет, почему нефтяная история так важна для местных жителей.",
  "oil-museum": "Музей делает проект более сильным для конкурса: он добавляет образовательность. Карта не просто показывает красивые места, а помогает выстроить урок по истории, географии и технологии через реальные экспонаты, документы и фотографии.",
  "alley-heroes": "Эта остановка добавляет маршруту уважительный тон. Важно показать, что городская карта хранит не только достопримечательности для отдыха, но и места памяти, где личные истории семей соединяются с историей всей страны.",
  "time-monument": "Монумент «Время» хорошо связывает прошлое и настоящее. Его можно использовать как финальный вопрос маршрута: какие объекты сегодняшнего Лениногорска через десятилетия тоже станут символами города?",
  yubileiny: "Парк «Юбилейный» показывает повседневный Лениногорск. Для жюри это плюс: проект говорит не только о памятниках, но и о качестве городской среды, где живут, гуляют и отдыхают семьи.",
  makhabbat: "Название парка переводится как «любовь», поэтому место можно представить как современную прогулочную зону с эмоциональным образом. В маршруте оно смягчает промышленную тему и делает карту более живой.",
  "gorky-park": "Парк им. Горького полезен как природная остановка: он показывает, что у города есть зеленый каркас и места для спорта. Это делает маршрут разнообразным: история, культура, память, отдых и природа.",
  "white-rotunda": "Белая ротонда усиливает визуальную часть проекта: это понятный символ, который легко запоминается жюри. Она показывает, что в Лениногорске важны не только памятники, но и видовые архитектурные места.",
  "black-rotunda": "Черная ротонда добавляет маршруту контраст: рядом с классической белой ротондой появляется строгая высокая смотровая конструкция. Такое сравнение делает карту глубже и интереснее для рассказа.",
  "ak-bars": "Фонтан можно подать как пример малой архитектурной формы, которая создает узнаваемость места. Даже небольшой объект становится достопримечательностью, если он связан с символом республики и любимым маршрутом жителей.",
  tuqay: "Бюст Тукая добавляет татарскую литературную культуру в общую историю города. Он помогает показать, что Лениногорск интересен не только нефтью, но и языком, образованием, памятью о писателях и культурной традицией."
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
  detailBody: document.querySelector(".detail-body"),
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
  detailTask: document.querySelector("#detailTask"),
  detailExtra: document.querySelector("#detailExtra"),
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
    pin.style.setProperty("--pin-photo", `url("../${versionedPhoto(place.image)}")`);
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
  if (place.gallery && place.gallery.length) {
    return place.gallery.map((src, index) => ({
      src: versionedPhoto(src),
      label: index === 0 ? "Общий вид" : index === 1 ? "Дополнительный ракурс" : "Детали места",
      fit: "contain",
      position: "center"
    }));
  }

  const positions = galleryFocus[place.id] || ["center", "50% 42%", "50% 66%"];
  return [
    { src: versionedPhoto(place.image), label: "Общий вид", fit: "contain", position: positions[0] },
    { src: versionedPhoto(place.image), label: "Крупный план", fit: "cover", position: positions[1] },
    { src: versionedPhoto(place.image), label: "Детали места", fit: "cover", position: positions[2] }
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
  stopGalleryAutoplay();
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
  dom.detailTask.textContent = placeTasks[place.id] || "Выберите одну заметную деталь объекта и объясните, что она рассказывает о Лениногорске.";
  dom.detailExtra.textContent = placeExtras[place.id] || "Эта точка дополняет маршрут и помогает увидеть город не только как набор адресов, но как связанную историю людей, мест и городской среды.";
  dom.detailSource.href = place.imageSource;
  dom.detailOverlay.hidden = false;
  dom.detailOverlay.scrollTop = 0;
  dom.detailBody.scrollTop = 0;
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
