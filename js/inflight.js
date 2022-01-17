/* 𝙲𝚞𝚜𝚝𝚘𝚖 𝙹𝚂 */

$(document).ready(function() {

    console.log("Tupik!");

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        if (browserRatio >=1.5) {
            $('.advantages_area').css('background-attachment', 'initial');
        } else {
            $('.advantages_area').css('background-attachment', 'fixed');
        }
    }

    // Testimonials slider
    $('.t_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 400,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });









});