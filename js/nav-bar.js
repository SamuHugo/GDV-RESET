// Variables

let nav = document.getElementById('nav');
let logo = document.getElementById('logo-nav');

//transicion de barra de menu nav1 --> nav2
function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 200){
        nav.classList.remove('nav-blank');
        nav.className = ('header-nav');
        nav.style.transition = '.7s';
    }else{
        nav.classList.remove('header-nav');
        nav.className = ('nav-blank');
        nav.style.transition = '.7s';
    }
}

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});