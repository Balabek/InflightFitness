/* 𝙲𝚞𝚜𝚝𝚘𝚖 𝙹𝚂 */

$(document).ready(function() {

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


    let userAgent = window.navigator.userAgent;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
        $('.advantages_area').css('background-attachment','initial');
    }
    else {
        $('.advantages_area').css('background-attachment','fixed');
    }








});