const teamItems = document.querySelectorAll('[data-team-item]');

function disableTeamItems() {
    teamItems.forEach(item => {
        item.classList.remove('team-item-active');
    })
}

teamItems.forEach(item => {
    item.addEventListener('click', () => {
        disableTeamItems();
        item.classList.add('team-item-active');
    })
})