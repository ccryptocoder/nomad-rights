const imgs = document.querySelectorAll('.img-decorated');

const events = ['resize', 'DOMContentLoaded'];

events.forEach(e => {
    window.addEventListener(e, () => {
        imgs.forEach(img => {
            const imgHeight = img.firstElementChild.scrollHeight;
            img.style.setProperty('--img-height', (imgHeight + 'px'))
        })
    })
})