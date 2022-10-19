window.addEventListener('DOMContentLoaded', () => {
    function search(input, items) {
        input.addEventListener('input', () => {
            let inputValue = input.value;
            inputValue = inputValue.toLowerCase();
            
            for (let i = 0; i < items.length; i++) { 
                if ( items[i].firstElementChild.textContent.toLowerCase().includes(inputValue) ) {
                    items[i].style.display="flex";
                }
                else {
                    items[i].style.display="none";                 
                }
            }
        })
    }

    const input = document.querySelector('.docs-search .search-form input[type=text]');
    const items = document.querySelectorAll('.docs-item');

    search(input, items);
});