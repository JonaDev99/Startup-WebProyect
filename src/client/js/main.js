//importamos el archivo de css
import '../scss/style.scss';

//Control de scroll en el header
const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > 0){
        header.classList.add('scrolled');
        //console.log("scroll");
    } else{
        header.classList.remove('scrolled');
    }
});
//Control de apertura y cierre de header
const menuBtn = window.document.getElementById("menu-btn");
var cont = 0;
window.addEventListener('click', (e) => {   
    if (document.getElementById('menu-btn').contains(e.target)){
        cont ++;
        //console.log("Click dentro", cont);
        if(cont%2 == 0){
            menuBtn.checked = false;
            cont = 0;
        }
        /**Con este else obligamos a que se seleccione una opción */
        else{
            cont = 0;
        }
    } else{
        //console.log("Click fuera", cont);
        menuBtn.checked = false;
    }
  });
  var getContent = document.getElementsByClassName('focus');
    //getContent[0].style.background = 'red';