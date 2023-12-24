import { Fancybox } from '@fancyapps/ui';

export function fancybox(){ 
    Fancybox.bind("[data-fancybox]", {
         // Your custom options
    });

    if(document.querySelector('.products-catalog__item-empty')){
        document.querySelector('.products-catalog__item-empty').addEventListener('click', () => {
            Fancybox.show([{ src: "#empty", type: "inline" }]);
        })
    }
    document.querySelector('.header-section__entry').addEventListener('click', () => {
        Fancybox.show([{ src: "#main-empty", type: "inline" }]);
    })
    
    if(document.querySelector('.master-content__services-btn')){
        document.querySelector('.master-content__services-btn').addEventListener('click', () => {
            Fancybox.show([{ src: "#master-empty", type: "inline" }]);
        })
    }
}