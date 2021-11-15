let ham = document.getElementsByClassName('hamburger-menu')[0];
let clickh = document.getElementsByClassName('fas fa-bars')[0];
let cl = document.getElementsByClassName('close')[0];

clickh.addEventListener('click',
    function(){
        ham.style.display = 'block';
    }
)

cl.addEventListener('click',
    function(){
        ham.style.display = 'none';
    }
)