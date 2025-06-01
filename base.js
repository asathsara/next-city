// base.js - Handles responsive navbar and navigation drawer

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.navbar-menu-btn');
    const drawer = document.querySelector('.nav-drawer');
    const drawerOverlay = document.querySelector('.nav-drawer-overlay');
    const closeBtn = document.querySelector('.nav-drawer-close');

    if (menuBtn && drawer && drawerOverlay && closeBtn) {
        menuBtn.addEventListener('click', function() {
            drawer.classList.add('open');
            drawerOverlay.classList.add('open');
        });
        closeBtn.addEventListener('click', function() {
            drawer.classList.remove('open');
            drawerOverlay.classList.remove('open');
        });
        drawerOverlay.addEventListener('click', function() {
            drawer.classList.remove('open');
            drawerOverlay.classList.remove('open');
        });
    }

    // Hero title text animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const phrases = [
            'Your City. Reimagined',
            'Smart. Connected. Green.',
            'Welcome to the Future',
            'Next City: For Everyone'
        ];
        let idx = 0;
        setInterval(() => {
            heroTitle.classList.add('fade');
            setTimeout(() => {
                idx = (idx + 1) % phrases.length;
                heroTitle.textContent = phrases[idx];
                heroTitle.classList.remove('fade');
            }, 600);
        }, 3200);
    }
});
