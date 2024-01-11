window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header.classList.toggle('header_active');
    });

    window.addEventListener('click', (event) => {
        if (!header.contains(event.target)) {
            hamburger.classList.remove('hamburger_active');
            header.classList.remove('header_active');
        }
    });
})


const fadeIn = (element, duration) => {
    element.style.opacity = 0;
    element.style.display = 'block';

    let start = null;
    const step = (timestamp) => {
        start = start ?? timestamp;
        const progress = timestamp - start;
        element.style.opacity = progress / duration;
        progress < duration && requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
};