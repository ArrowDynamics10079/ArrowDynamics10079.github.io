document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.sponsors-slider');
    

    if (!slider) {
        return;
    }

    const track = slider.querySelector('.slider-track');
    const links = slider.querySelectorAll('a');


    if (links.length === 0) {
        return;
    }

    const lastLink = links[links.length - 1];

  
    const resumeAnimation = () => {
        track.style.animationPlayState = 'running';
    };

    slider.addEventListener('blur', resumeAnimation, true); 


    lastLink.addEventListener('keydown', (e) => {
      
        if (e.key === 'Tab' && !e.shiftKey) {
           
            setTimeout(resumeAnimation, 50);
        }
    });


    slider.addEventListener('focusin', () => {
        track.style.animationPlayState = 'paused';
    });
});