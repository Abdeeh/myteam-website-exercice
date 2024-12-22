const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuBtns = document.querySelectorAll('.burger-menu-btn');
var toggle = false;

burgerMenuBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        console.log('dlkkdsdqsdlmksq');
    });
});
