let ham = document.getElementsByClassName('hamburger-menu')[0];
let hRight = document.getElementsByClassName('header-right')[0];
let cl = document.getElementsByClassName('close')[0];

hRight.addEventListener('click',
    function(){
        ham.style.display = 'block';
    }
)

cl.addEventListener('click',
    function(){
        ham.style.display = 'none';
    }
)