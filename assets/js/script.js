$(function($){

    $('.search').on('click', function(){
        $('.search_overlay').show();
    })

    $('.close-button').on('click', function(){
        $('.search_overlay').hide(50);
    })

// Offcanvas Lightbox Gallery Initializaton

    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    // Home Slider Initialization

    $('.home_slider--wrapper').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: $('.prev_btn'),
        nextArrow: $('.next_btn'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // FAQ Video Initialization
    const lightbox = GLightbox({
        href: "https://www.youtube.com/watch?v=PeoGZVnT5DI&t",
        type: "video",
        source: "youtube", //vimeo, youtube or local
        width: 900,
        autoplayVideos: true,
        hideControls: false,
        
      });

    // Testimonial Slide Initialization

    $('.testimonial_slider--wrapper').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        arrows: false,
        dots: true,
        appendDots: $('.slider_dots'),
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // NEWS update Slide Initialization

    $('.blogs').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
})