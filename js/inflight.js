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



    $('.big_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.mini_slider'
    });
    $('.mini_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.big_slider',
        dots: true,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 620,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()


    // Sent message notification toast (correct button class is '.iff_send_btn')
    $('.iff_send_btn').click(function() {
        $('.toast').toast('show')
    });












});