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
