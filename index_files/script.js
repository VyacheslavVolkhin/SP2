/*---------------------------- start search ------------------------*/

$(".header__searchvisible").click(function() {
    $(".header__searchhiden").slideToggle("slow");
});
$(document).mouseup(function(e) {
    var container = $(".header__search");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".header__searchhiden").slideUp("slow");
    }
});
$(document).ready(function() {
    $(".hamburger").click(function() {
        $('.hamburger').toggleClass('open');
        $(".mobilemenu").fadeToggle("slow");
    });
});
$(document).ready(function() {
    $(".hamburgercab").click(function() {
        $(".cabinet__left").fadeIn("slow");
    });
});
$(document).ready(function() {
    $(".cabclose").click(function() {
        $(".cabinet__left").fadeOut("slow");
    });
});
$(document).ready(function() {
    $(".serviceshowmore").click(function() {
        $(this).hide();
        $(".services__item").addClass("active");
    });
});
$(document).ready(function() {
    $(".openchild").click(function() {
        $(this).toggleClass('active');
        $(this).next('ul').slideToggle("slow");
    });
});
$(document).ready(function() {
    $(".tabsitem__header").click(function() {
        // $('.tabsitem__header').removeClass('active');
        $(this).toggleClass('active');
        // $('.tabsitem__body').slideUp("slow");
        $(this).next('.tabsitem__body').slideToggle("slow");
    });
});
/*---------------------------- finish Hamburger_menu_mobile ------------------------*/

/*---------------------------- start Slick_slider ------------------------*/

$('.team__sliderjs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 30000,
    arrows: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 930,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.about__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    infinite: true,
    autoplaySpeed: 30000,
    arrows: false,
    responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.reference__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 30000,
    arrows: false,
    responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        }
    ]
});
$('.diplomslider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    infinite: true,
    autoplaySpeed: 30000,
    arrows: false,
    responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
/*---------------------------- finish Slick_slider ------------------------*/
/*---------------------------- start modals work!!! ------------------------*/
$(".popupfull__close").click(function() {
    $('.popupfull').hide();
})
$(document).mouseup(function(e) {
    var container = $(".popupfull__inside");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.popupfull').hide();
    }
});

/*---------------------------- start Mask_input_telephone ------------------------*/

$(".teclass").mask("+7(999) 999-99-99");

/*---------------------------- finish Mask_input_telephone ------------------------*/

/*---------------------------- start MagnificPopup ------------------------*/

$(".magnificpopupjs").magnificPopup()

$(document).ready(function() {
    $('.videomagnificjs').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });
});
$(document).ready(function() {
    $('.objectblock__imgrow').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
        });
    });
});
/*---------------------------- finish MagnificPopup ------------------------*/

/*---------------------------- start Scroll_To ------------------------*/

$("#pol").click(function() {
    $('html, body').animate({
        scrollTop: $("#polblock").offset().top
    }, 1000);
})


/*---------------------------- start Animate WOW ------------------------*/

new WOW().init();

/*---------------------------- finish Animate WOW ------------------------*/

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 150) {
        $('.fixed_header').fadeIn();
    } else {
        $('.fixed_header').fadeOut();
    }
});


// 
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


$(document).ready(function() {
    $(".moneytop1").click(function() {
        $('.moneytop').removeClass('active');
        $(this).toggleClass('active');
        $('.moneybody__item').hide();
        $('.moneybody__item1').show();
    });
    $(".moneytop2").click(function() {
        $('.moneytop').removeClass('active');
        $(this).toggleClass('active');
        $('.moneybody__item').hide();
        $('.moneybody__item2').show();
    });
    $(".moneytop3").click(function() {
        $('.moneytop').removeClass('active');
        $(this).toggleClass('active');
        $('.moneybody__item').hide();
        $('.moneybody__item3').show();
    });
    $(".moneytop4").click(function() {
        $('.moneytop').removeClass('active');
        $(this).toggleClass('active');
        $('.moneybody__item').hide();
        $('.moneybody__item4').show();
    });
    $(".moneytop5").click(function() {
        $('.moneytop').removeClass('active');
        $(this).toggleClass('active');
        $('.moneybody__item').hide();
        $('.moneybody__item5').show();
    });
});