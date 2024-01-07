const pageUp = document.getElementsByClassName("pageUp");
window.addEventListener('scroll', function() {
    if(window.scrollY > 1600 && window.scrollY < 7000) {
        pageUp.item(0).style.display = "block";
    } else {
        pageUp.item(0).style.display = "none";
    }
});

document.querySelectorAll('a[href^="#up"]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.pageUp').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
