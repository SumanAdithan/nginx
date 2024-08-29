const menuBtn = document.querySelector('#menu-icon');
const headerNavigation = document.querySelector('.header__navigation');

menuBtn.addEventListener('click', () => {
    headerNavigation.classList.toggle('toggle-navigation');
});
