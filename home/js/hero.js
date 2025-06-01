document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const phrases = [
            'Your City. Reimagined',
            'Smart. Connected. Green.',
            'Next City: For Everyone',
            'Colombo 2.0: A New Era'
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
