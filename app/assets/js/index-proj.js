const projEvents = ['resize', 'DOMContentLoaded'];
let projSwiper = undefined;

projEvents.forEach(e => {
    window.addEventListener(e, () => {
        if (window.matchMedia("(max-width: 1023px)").matches) {
            projSwiper = new Swiper('#projSwiper', {
                loop: false,
              
                // Navigation arrows
                navigation: {
                    prevEl: '#projPrev',
                    nextEl: '#projNext',
                },

                breakpoints: {
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        spaceBetween: 10
                    }
                }
            });
        } else {
            if (projSwiper != undefined && projSwiper != null) {
                projSwiper.destroy();
            }
        }
    })
})