const projEvents = ['resize', 'DOMContentLoaded'];

projEvents.forEach(e => {
    window.addEventListener(e, () => {
        if (window.matchMedia("(max-width: 1023px)").matches) {
            const projSwiper = new Swiper('#projSwiper', {
                loop: false,
              
                // Navigation arrows
                navigation: {
                    prevEl: '#projPrev',
                    nextEl: '#projNext',
                },
            });
        }
    })
})