export function initVideo(){ 
    if( document.querySelector('#master-video')){
        document.querySelectorAll('#master-video').forEach((video) =>{ 
            video.addEventListener('mouseenter', function() {
                video.play();
            });
        })
    }
}