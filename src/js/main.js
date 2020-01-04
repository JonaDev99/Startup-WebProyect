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
})