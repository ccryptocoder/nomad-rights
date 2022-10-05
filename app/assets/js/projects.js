projSwiper = new Swiper('#projSwiper', {
    loop: false,
  
    // Navigation arrows
    navigation: {
        prevEl: '#projPrev',
        nextEl: '#projNext',
    },
    // centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});