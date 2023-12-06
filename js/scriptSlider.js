$(document).ready(function(){
    $('.slider__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png" alt="leftArrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png" alt="rightArrow"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {

                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]

    });
});