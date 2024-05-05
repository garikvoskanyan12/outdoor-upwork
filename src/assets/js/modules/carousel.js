import Swiper from 'swiper';

const swiper = new Swiper(".homeCarousel", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const dashboardCarousel = new Swiper(".dashboardCarousel", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".dashboardCarouselPagination",
    },
    mousewheel: true,
    keyboard: true,
});