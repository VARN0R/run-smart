var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1
        }
    }
});