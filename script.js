const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

sr.reveal('.hero-left h1, .hero-left h2', { origin: 'left', distance: '100px' });
sr.reveal('.hero-left .team-logo', { delay: 400, scale: 0.8 });
sr.reveal('.hero-right', { origin: 'right', distance: '100px', delay: 200 });
sr.reveal('.about-content', { origin: 'left' });
sr.reveal('.about-image', { origin: 'right', delay: 200 });
sr.reveal('.sponsors-section', { delay: 200 });
sr.reveal('.footer-container', { interval: 100 });
sr.reveal('.leads-section .team-grid', { delay: 200 });
sr.reveal('.subteam-section', { interval: 100 });

const modalOpenButtons = document.querySelectorAll('[data-modal-target]');
const modalCloseButtons = document.querySelectorAll('.modal-close-btn');

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
}

modalOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});



const backToTopButton = document.querySelector('.back-to-top-btn');


const handleScroll = () => {

    if (window.scrollY > 300) {
     
        backToTopButton.classList.add('active');
    } else {
  
        backToTopButton.classList.remove('active');
    }
};


window.addEventListener('scroll', handleScroll);