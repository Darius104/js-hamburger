const burgerButton = document.querySelector('.header-right > a');
burgerButton.addEventListener('click',
    function() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        hamburgerMenu.classList.add('active');
    }
);
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click',
    function() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        hamburgerMenu.classList.remove('active');
    }
);