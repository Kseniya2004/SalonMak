export function initLists(){
                  
        document.querySelectorAll('.prices-content__1lv-list li').forEach(el =>{
            el.addEventListener('click', ()=>{

                el.querySelectorAll('ul').forEach(list =>{

                if(list.classList.contains('close')){
                    el.querySelector('.prices-content__plus').innerHTML = '-'
                    list.classList.replace("close", "open");
                }
                else{
                    list.classList.replace("open", "close");
                    el.querySelector('.prices-content__plus').innerHTML = '+'
                }
                
            })
        }) 
    }) 
}