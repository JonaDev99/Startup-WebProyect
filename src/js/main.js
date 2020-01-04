//importamos el archivo de css
import '../scss/style.scss';

const header = document.querySelector('.main-header');
const menuBtn = document.querySelector('.menu-btn');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > 0){
        header.classList.add('scrolled');
        console.log("scroll");
    } else{
        header.classList.remove('scrolled');
    }
});

/**const clas = window.document.getElementsByClassName("nav-links");
window.addEventListener('click', (e) => {
  if(e.clas[0]==clas[0]){
      console.log("click en la clase");
  }
});
 */



/*
const menu = window.document.getElementById("menu-btn");
window.addEventListener("click", (e)=> {
    console.log("clicks");
    if(e.menu==menu){
        console.log("clicks"+ menu);
        menu.checked = false;
    }    
},false);
*/