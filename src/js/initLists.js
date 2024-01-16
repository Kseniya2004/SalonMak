export function initLists(){
                  
    document.querySelectorAll('.prices-content__item-title').forEach(el=>{
        el.addEventListener('click', ()=>{

            if (el.nextElementSibling.childElementCount == 0) {
                const list = el.nextElementSibling.nextElementSibling;
                if (list.classList.contains('close')) {
                    el.querySelector('.prices-content__plus').innerHTML = '-'
                    list.classList.replace("close", "open");
                } else {
                    list.classList.replace("open", "close");
                    el.querySelector('.prices-content__plus').innerHTML = '+'
                }
            } else {
                const list = el.nextElementSibling;
                if (list.classList.contains('close')) {
                    el.querySelector('.prices-content__plus').innerHTML = '-'
                    list.classList.replace("close", "open");
                } else {
                    list.classList.replace("open", "close");
                    el.querySelector('.prices-content__plus').innerHTML = '+'
                }
            }

        }
        )
    })
}