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


    // Detecting iOS
    let isSafari = !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MS
    if(isSafari && iOS){
        alert("You are using Safari on iOS!");
        $('.advantages_area').css('background-attachment','initial');
    }
    else {
        $('.advantages_area').css('background-attachment','fixed');
    }






});