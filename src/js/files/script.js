// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const header = document.getElementById('header');
const dropList = document.querySelectorAll('.header-dropdown__list');

window.addEventListener('scroll', function() {
    if(window.scrollY > 200) {
        changeBackgroundOnScroll()
    }
});

function changeBackgroundOnScroll () {
    header.classList.add('dark-background')
    dropList.classList.add('dark-background')
};

