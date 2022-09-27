// window.addEventListener('DOMContentLoaded', () => {
    
// })

const headerMid = document.querySelector('[data-header-mid]');
const headerBtn = document.querySelector('[data-header-btn]');

headerBtn.addEventListener('click', () => {
    headerBtn.classList.toggle('active');
    headerMid.classList.toggle('active');
});

const headerSearchBtn = document.querySelector('[data-header-search-btn]');
const headerSearch = document.querySelector('[data-header-search]');

headerSearchBtn.addEventListener('click', () => {
    headerSearch.classList.toggle('active');
})