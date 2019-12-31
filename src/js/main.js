import { showAlert } from './messages';

//importamos el archivo de css
import '../scss/style.scss';


document.getElementById('btn-alert')
    .addEventListener('click', showAlert);