const menuBtn = document.querySelector('#menu-btn');
const headerNavigation = document.querySelector('.header__navigation');

menuBtn.addEventListener('click', () => {
    headerNavigation.classList.toggle('toggle-navigation');
});
