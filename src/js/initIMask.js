export function initIMask(){ 

    document.querySelectorAll('.products-catalog__modal-number').forEach((el) =>{

        var phoneMask = IMask(
        el, {
            mask: '+{7} (000) 000 - 00 - 00'
        });
        
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if(isSafari){
            var dateMask = IMask(
            document.querySelector('.products-catalog__modal-date'),
            {
                mask: Date,
                min: new Date(2020, 0, 1),
                // max: new Date(2020, 0, 1),
                lazy: false
            });
        }
    })
   
    
   
}