
import Swiper, { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import "swiper/css/bundle";


export function swiper(){
    new Swiper(".mySwiper", {
        modules: [ Navigation, 
            Pagination, 
            Autoplay],
        speed: 1500,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    new Swiper(".Swiper-gallery", {
        modules: [ FreeMode],
        spaceBetween: 30,
        freeMode: true,
        grabCursor: true,
        breakpoints: {
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            720: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          },
    });

    new Swiper(".Swiper-present", {
        
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3,
            },
          },
    });

    new Swiper(".Swiper-master", {
      modules: [ FreeMode],
      spaceBetween: 30,
      freeMode: true,
      grabCursor: true,
      breakpoints: {
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
        },
    });
}
