// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if(window.scrollY > 200) {
        changeBackgroundOnScroll()
    }
});

function changeBackgroundOnScroll () {
    header.classList.add('dark-background')
};
