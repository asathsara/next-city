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
});
