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