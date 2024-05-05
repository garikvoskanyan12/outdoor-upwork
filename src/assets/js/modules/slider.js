import Swiper from 'swiper';
import { Navigation, Mousewheel, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

Swiper.use([Navigation, Mousewheel, Thumbs, Pagination]);

const gradients = [
  'linear-gradient(117deg, #232D36 0.82%, #33414D 86.76%)',
  'linear-gradient(253deg, #2C3843 1.29%, #323F5E 91%)',
  'linear-gradient(253deg, #24323E 1.29%, #29385D 91%)',
];

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 24,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      mousewheel: false,
      direction: 'horizontal',
    },
    920: {
      direction: 'vertical',
    },
  },
});

new Swiper('.slider__images .swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 32,
  slideThumbActiveClass: 'active-slide',
  mousewheel: true,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  grabCursor: true,
  thumbs: {
    swiper: sliderThumbs,
    autoScrollOffset: 1,
  },
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      mousewheel: false,
      direction: 'horizontal',
    },
    768: {
      direction: 'vertical',
    },
  },
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.slider-btn--next',
    prevEl: '.slider-btn--prev',
  },
});

const mapSlider = new Swiper('.home-slider', {
  direction: 'horizontal',
  loop: true,
  modules: [Navigation, Pagination],
  pagination: {
    el: '.homeSlidePagination',
  },
  autoHeight: false,
  slidesPerView: 1,
  navigation: {
    nextEl: '.map-next-btn',
    prevEl: '.map-prev-btn',
  },
});

// mapSlider.on('slideChange', (e) => {
//   const mapContainer = document.querySelector('[data-element="home-slider-inner"]');
//   console.log(mapContainer, 'mapContainer')
//
//   mapContainer.style.background = gradients[mapSlider.realIndex];
//   const mobileElemets = document.querySelectorAll(
//       '[data-element="pin-content-mobile"]'
//   );
//   const mobilePins = document.querySelectorAll(
//       '[data-element="map-pin-mobile"]'
//   );
//
//   mobileElemets.forEach((pin, index) => {
//     if (pin.classList.contains('active')) {
//       pin.classList.remove('active');
//       mobilePins[index].style.zIndex = '-2';
//     }
//   });
// });
