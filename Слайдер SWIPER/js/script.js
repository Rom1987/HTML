// Инициализируем Swiper
// внутри скобок пишем объект который станет слайдером
let myImageSlider = new Swiper('.image-slider', {
    // Стрелки 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // // Буллеты
        // clickable: true,
        // // Динамические буллеты
        // dynamicBullets: true,
        // // Кастомные буллеты
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
        // Фракция - это пагинация в виде дроби текущий/всего эелементов
        type: 'fraction',
        // Кастомный вывод фракции
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' +
                ' из ' +
                '<span class="' + totalClass + '"></span>';
        },
        // // Прогрессбар
        // type: 'progressbar',
    },
    // Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true,
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор претаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: false,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Управление клавиатурой
    keyboard: {
        // Включить \ выключить
        enabled: true,
        // Включить \ выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить \ выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объекта на котором
        // будет срабатывать прокрутка мышью.
        // eventsTarget: ".image-slider"
    },

    // Автовысота
    autoHeight: false,

    // Количество слайдов для показа. Можно вводить не целые числа
    // slidesPerView: 'auto', // не будет работать если slidesPerColumn > 1
    slidesPerView: 3,

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 30,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    centeredSlides: false,

    // Стартовый слайд
    initialSlide: 0,

    // // Мультирядность.
    // // Нужно поставить autoHeight в значение false
    // modules: [Grid],
    // grid: {
    //     rows: 1,
    //     fill: 'column',
    // },

    // Бесконечный слайдер. slidesPerColumn не должна быть больше 1
    loop: true,

    // Кол-во дублирующих слайдов
    // Для корректной работы
    loopedSlides: 0,

    // Свободный режим. Перетаскивается как лента, т.е. без фиксации
    freeMode: true,

    // Автопрокрутка
    // autoplay: {
    //     // Пауза между прокруткой
    //     delay: 1000,
    //     // Закончить на последнем слайде
    //     stopOnLastSlide: true,
    //     // Отключить после ручного преключения
    //     disableOnInteraction: false
    // },

    // Скорость. По умолчанию 300
    speed: 800,

    // Вертикальный слайдер. По умолчинию horizontal
    direction: 'horizontal',

    // Эффекты переключения слайдов. По умолчнию slide
    // Листание
    effect: 'slide',

    // // Эффекты переключения слайдов.
    // // Смена прозрачности
    // effect: 'fade',

    // // Дополнение к fade
    // fadeEffect: {
    //     // Параллельная
    //     // смена прозрачности
    //     crossFade: true
    // },

    // // Эффекты переключения слайдов.
    // // Переворот
    // effect: 'flip',

    // // Дополнение к flip
    // flipEffect: {
    //     // Тень
    //     slideShadows: true,
    //     // Показ только аквиного слайда
    //     limitRotation: true
    // },

    // // Эффекты переключения слайдов.
    // // Куб
    // effect: 'cube',

    // // Дополнение к cube
    // cubeEffect: {
    //     // Настройки тени
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // },

    // // Эффекты переключения слайдов.
    // // Эффект потока
    // effect: 'coverflow',

    // // Дополнение к fade
    // coverflowEffect: {
    //     // Угол
    //     rotate: 20,
    //     // Наклон
    //     stretch: 50,
    //     // Тень
    //     slideShadows: true,
    // },

    // // Брейк поинты (адаптив)
    // // Ширина экрана
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     }
    // },

    // // Брейк поинты (адаптив)
    // // Соотношение сторон
    // breakpoints: {
    //     '@0.75': {
    //         slidesPerView: 1,
    //     },
    //     '@1.00': {
    //         slidesPerView: 2,
    //     },
    //     '@1.50': {
    //         slidesPerView: 3,
    //     }
    // },

    // Отключить предзагрузку картинок
    preloadImages: false,
    // Lazy Loading
    // (подгрузка картинок)
    lazy: {
        // Подгружать на смарте
        // перекдючения слайда
        loadOnTransitionStart: false,
        // Подгрузить предыдущую
        // и следующую картинку
        loadPrevNext: false,
    },
    // Лучше ставить когда slidesPerView = auto либо больше 1
    // Слежка за видимыми слайдами
    watchSlidesProgress: true,
    // Добавление класса видимым слайдом
    watchSlidesVisibility: true,

    // Зум картинки
    zoom: {
        // Максимальное увелечение
        maxRatio: 5,
        // Минимальное увеличение
        minRatio: 1,
    },

    // // Миниатюры (превью)
    // thumbs: {
    //     // Свайпер с мениатюрами
    //     // и его настройками
    //     swiper: {
    //         el: '.image-mini-slider',
    //         slidesPerView: 5,
    //     }
    // },

    // // Передача управления. Только в одну сторону
    // controller: {
    //     control: myTextSlider
    // },

    // Обновлять свайпер
    // при изменении элементов слайдера
    observer: true,

    // Обновлять свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Виртуальные слайды
    // формирование слайдера
    virtual: {
        slides: (function () {
            let slide = []
            for (let i = 0; i < 500; i++) {
                slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
            }
            return slide;
        }()),
    },

});

// // Слайдер в слайдере
// new Swiper('.image-in-slider', {
//     // Курсор перетаскивания
//     grabCursor: true,
//     // Навигация
//     // пагинация, текущее положение, прогрессбар
//     pagination: {
//         el: '.swiper-pagination',
//         // Буллеты
//         clickable: true,
//     },
//     // Корректная работа. Ещё лучше slideToClickedSlide поместить в значение false 
//     // перетаскивания/свайпа
//     // для дочерного слайдера
//     nested: true,
// });

// Ещё один слайдер
let myTextSlider = new Swiper('.text-slider', {
    // Количество слайдов для показа
    slidesPerView: 3,
    // Отступ между слайдами
    spaceBetween: 30,
});

// Перелача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;

// // Параллакс слайдер
// new Swiper('.parallax-slider', {
//     // Включаем параллакс
//     parallax: true,
//     // скорость переключения
//     speed: 2000,
//     // Стрелки
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
// });