$(document).ready(function(){
    
    //side info toggle
    $('.button-side-menu-toggle').on('click', function() {
        $('body').toggleClass('side-active');
        return false;
    })


    //btn tgl
    $('.js-btn-tgl:not(.tgl-one)').on('click', function () {
        $(this).toggleClass('active');
        return false;
    })


    //file input 
    $('.js-field-file .js-file-button').on('click', function () {
        $(this).parent().find('input').click();
        return false;
    })
    $('.js-field-file input[type=file]').on('change', function () {
        let fileName = ('' + $(this).val());
        if (fileName == "") {
            fileName = $(this).parent().find('.js-file-button').attr('data-title');
            $(this).parent().removeClass('active').find('.js-file-button').find('.button-title').html(fileName);
        } else {
            $(this).parent().addClass('active').find('.js-file-button').find('.button-title').html(fileName);
        }
    });


    //item-tile-video
    $('.js-btn-video').on('click', function () {
        let videoURL = $(this).parent('.item-tile-video').attr('data-video');
        $(this).parents('.item-tile-video').addClass('active');
        $(this).parents('.item-tile-video').append('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>')
        return false;
    })


    $('.reviews_sliderjs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 30000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            }
        ]
    });


    $('.abouttiles_sliderjs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 30000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

	
});


