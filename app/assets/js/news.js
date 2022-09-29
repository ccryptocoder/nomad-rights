const newsEvents = ['resize', 'DOMContentLoaded'];

projEvents.forEach(e => {
    window.addEventListener(e, () => {
        if (window.matchMedia("(max-width: 1023px)").matches) {
            const newsSwiper = new Swiper('#newsSwiper', {
                loop: false,
              
                // Navigation arrows
                navigation: {
                    prevEl: '#newsPrev',
                    nextEl: '#newsNext',
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
        }
    })
})