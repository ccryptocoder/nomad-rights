const swiper = new Swiper('#partnersSwiper', {
    loop: false,
  
    navigation: {
        prevEl: '#partnersSwiperPrev',
        nextEl: '#partnersSwiperNext',
    },
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        340: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1480: {
            slidesPerView: 5,
        }
    }

  });