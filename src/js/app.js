import '../scss/app.scss';

import { swiper } from './swiper';
import { burgerMenu } from './burgerMenu';
import { fancybox } from './fancybox';
import { initLists } from './initLists';
import { initIMask } from './initIMask';
import { initVideo } from './initVideo';





document.addEventListener('DOMContentLoaded', () => {
    init();
});
  
const init = () => {
    swiper();
    burgerMenu();
    fancybox();
    initLists();
    initIMask();
    initVideo();
};
