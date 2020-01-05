//importamos el archivo de css
import '../scss/style.scss';

const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > 0){
        header.classList.add('scrolled');
        console.log("scroll");
    } else{
        header.classList.remove('scrolled');
    }
});

const menuBtn = window.document.getElementById("menu-btn");
var cont = 0;
window.addEventListener('click', (e) => {   
    if (document.getElementById('menu-btn').contains(e.target)){
        cont ++;
        console.log("Click dentro");
        if(cont%2 == 0){
            menuBtn.checked = false;
            cont = 0;
        }
    } else{
        console.log("Click fuera");
        menuBtn.checked = false;
    }
  });