/*===================================================
Project: consulto - landing page 
Auther: Amin - Themes
Version: 1.0
Last change: 20 Novmber 2020
Template Description: HTML5 landing page Template
====================================================*/




//GLOBAL VARIBALES
var
    //selector vars
    main_window = $(window),
    root = $('html, body'),
    bdyOnePage = $('body.landing-page-demo '),
    pageHeader = $('#page-header'),
    navMain = $('nav.main-navbar'),
    navMenuWraper = $('.navbar-menu-wraper'),
    hasSubMenu = $(".has-sub-menu"),
    onePage_navLink = $('.landing-page-demo .main-navbar .nav-link, .landing-page-demo .goto-link'),
    pageHero = $('#page-hero'),
    backToTopButton = $('.back-to-top'),
    heroVegasSlider = $(".page-hero.hero-vegas-slider"),
    heroSwiperSlider = ".hero-swiper-slider .swiper-container",
    textInput = $("form.main-form .text-input"),
    tabLink = $(".ma-tabs .tabs-links .tab-link"),
    togglerLink = $(".ma-tabs .toggler-links .toggler"),
    portfolioGroup = $('.portfolio .portfolio-group'),

    // Measurements vars
    navMainHeight = navMain.innerHeight(),
    pageHeroHeight = pageHero.innerHeight(),

    //class Names Strings vars

    hdrStandOut = "header-stand-out",
    inputHasText = "has-text",

    // condetionals vars
    counterShowsUp = false;




$(function () {
    "use strict"
    /*-----------------  START GENERAL FUNCTIONS  -----------------*/
    // function to fire the conter plugin 
    function fireCounter() {
        if ($('.stats-counter').length) {
            if (jQuery().countTo && counterShowsUp === false) {
                var pos = $('.stats-counter').offset().top;
                if (((main_window.scrollTop() + main_window.innerHeight() - 50) >= pos)) {
                    $('.counter').countTo();
                    counterShowsUp = true;
                }
            }
        }
    }
    /*-----------------  END GENERAL FUNCTIONS  -----------------*/








    /*----------------- Start Calling global function -----------------*/


    // to fire the counter when its section appear on screen
    fireCounter();


    /*----------------- End Calling global function -----------------*/


    // to remove class from navbar if the page refreshed and the scrolltop of the window > 50px
    if (main_window.scrollTop() > 100) {
        $(pageHeader).toggleClass(hdrStandOut)
        $(backToTopButton).toggleClass("show")
    }

    // == overlay effect on portfolio items

    // $('.portfolio .item').on('mouseenter', function (e) {
    //     var x = e.pageX - $(this).offset().left,
    //         y = e.pageY - $(this).offset().top;
    //     $(this).find($('.overlay')).css({
    //         top: y,
    //         left: x
    //     });
    // });
    // $('.case-study-item').on('mouseout', function (e) {
    //     var x = e.pageX - $(this).offset().left,
    //         y = e.pageY - $(this).offset().top;
    //     $(this).find($('.overlay')).css({
    //         top: y,
    //         left: x
    //     });
    // });



    /* ----------------- End page loading Actions * ----------------- */


    /* ----------------- Start onClick Actions * ----------------- */

    //  Start Smooth Scrolling To page Sections
    $(onePage_navLink).on('click', function (e) {
        var link = $(this).attr('href');
        var currentMainNavHeight = navMain.innerHeight();

        if (link.charAt(0) === '#') {
            e.preventDefault();
            var target = this.hash;
            $(root).animate({
                scrollTop: $(target).offset().top - currentMainNavHeight + 1
            }, 500);
        }

    });

    //showing navbar sub-menus
    hasSubMenu.on("click", function (e) {
        e.stopPropagation()
        if (!(main_window.innerWidth() > 1199)) {
            $(this).children('.sub-menu').slideToggle();
        }
    });

    //End Smooth Scrolling To page Sections

    $(".navbar-nav").on("click", function (e) {
        e.stopPropagation()
    })

    //  open and close menu btn
    $('.menu-toggler-btn, .navbar-menu-wraper ').on('click', function () {
        $('.menu-toggler-btn').toggleClass('close-menu-btn');
        navMenuWraper.toggleClass('show-menu');

        //  add/remove  .header-stand-out  class to .main-navbar when menu-toogler-clicked

        //  if the menu is opened
        if ($(".show-menu").length) {
            // add .header-stand-out class to .main-nav
            if (!pageHeader.hasClass(hdrStandOut))
                $(pageHeader).addClass(hdrStandOut);
        } else {
            // remove .header-stand-out class to .main-nav in case the window scrolltop less than 50px
            if (pageHeader.hasClass(hdrStandOut) && main_window.scrollTop() < 50 && main_window.innerWidth > '991px')
                $(pageHeader).removeClass(hdrStandOut);

        }

    })


    // Start Smooth Scrolling To Window Top When Clicking on Back To Top Button
    $(backToTopButton).on('click', function () {
        root.animate({
            scrollTop: 0
        }, 1000);
    });
    // End Smooth Scrolling To Window Top When Clicking on Back To Top Button



    /* ----------------- End onClick Actions ----------------- */




    /* ----------------- Start onScroll Actions ----------------- */

    main_window.on('scroll', function () {

        if ($(this).scrollTop() > 50) {
            //show back to top btn
            backToTopButton.addClass("show");

        } else {
            //hide back to top btn
            backToTopButton.removeClass("show");
        }

        // to add/remove a class that makes navbar stands out 
        // by changing its colors to the opposit colors
        if ($(this).innerWidth() > 991) {

            if ($(this).scrollTop() > 50) {
                if (!$(pageHeader).hasClass(hdrStandOut))
                    $(pageHeader).addClass(hdrStandOut);
            } else {

                if ($(pageHeader).hasClass(hdrStandOut))
                    $(pageHeader).removeClass(hdrStandOut);
            }

        } else {

            // on screens smaller than 992px always add header-standout class
            if (!$(pageHeader).hasClass(hdrStandOut)) {
                $(pageHeader).addClass(hdrStandOut);
            }
        }

        // to make sure the counter will start counting whit its section apear on the screen  
        fireCounter();
    });
    /* ----------------- End onScroll Actions ----------------- */



    /* ----------------- Start Window Resize Actions ----------------- */

    main_window.on('resize', function () {

        if (main_window.innerWidth() > 991) {
            if (navMenuWraper.hasClass('show-menu')) {
                navMenuWraper.removeClass('show-menu');
                $('.menu-toggler-btn').toggleClass('close-menu-btn');
            }

            if (hasSubMenu.children('.sub-menu').css("display", "none")) {
                hasSubMenu.children('.sub-menu').css("display", "block")
            };

        } else {
            if (hasSubMenu.children('.sub-menu').css("display", "block")) {
                hasSubMenu.children('.sub-menu').css("display", "none")
            };
        }

    });

    /* ----------------- End Window Resize Actions ----------------- */

    /*************Start Contact Form Functionality************/
    var
        contactForm = $("#contact-form"),

        iputWraper = $("form.main-form .input-wraper"),
        textInput = $("form.main-form .text-input"),
        userName = $("#user-name"),
        userEmail = $("#user-email"),
        msgSubject = $("#msg-subject"),
        msgText = $("#msg-text"),
        submitBtn = $("#submit-btn"),
        errorMsg = $(".error-msg"),
        isValidInput = false,
        isValidEmail = false;

    function ValidateNotEmptyInput(input, errMsg) {
        if (input.val().trim() === "") {
            $(input).siblings(".error-msg").text(errMsg).css("display", "block");
            isValidInput = false;
        } else {
            $(input).siblings(".error-msg").text("").css("display", "none");
            isValidInput = true;
        }
    }


    function validateEmailInput(emailInput) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (pattern.test(emailInput.val()) === false) {
            $(emailInput).siblings(".error-msg").text("Please Enter a valid Email").css("display", "block");
            isValidEmail = false;
        } else {
            $(emailInput).siblings(".error-msg").text("").css("display", "none");
            isValidEmail = true;
        }
    }



    submitBtn.on("click", function (e) {
        e.preventDefault();

        ValidateNotEmptyInput(userName, "Please Enter Your Name");
        ValidateNotEmptyInput(userEmail, "Please Enter Your Email");
        ValidateNotEmptyInput(msgSubject, "Please Enter Your subject");
        ValidateNotEmptyInput(msgText, "Please Enter Your Message");
        validateEmailInput(userEmail);


        if (isValidInput && isValidEmail) {
            $.ajax({
                type: "POST",
                url: contactForm.attr('action'),
                data: contactForm.serialize(),

                success: function (data) {
                    $(".done-msg").removeClass("hide").addClass("show");
                    setTimeout(function () {
                        $(".done-msg").removeClass("show").addClass("hide");
                    }, 5000)
                    contactForm[0].reset();
                }
            });
            return false;
        }
    })



    /*************End Contact Form Functionality************/

    /* --------------------------
    Start Vendors plugins options  
    ----------------------------*/


    /* Start  wow.js  Options */
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();
    /* Start Swiper Options */



    //initialize swiper [Hero Section] fade slider
    if ($('.hero-swiper-slider.slider-fade .swiper-container').length) {
        var heroSlider = new Swiper('.hero-swiper-slider.slider-fade .swiper-container', {
            speed: 1000,
            spaceBetween: 30,
            loop: true,
            reverseDirection: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            // effect: 'coverflow',
            // coverflowEffect: {
            //     stretch: 100,
            // },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.hero-swiper-slider.slider-fade .swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.hero-swiper-slider.slider-fade .swiper-button-next',
                prevEl: '.hero-swiper-slider.slider-fade .swiper-button-prev',
            },
        });
    };

    // initialize swiper [Testimonials with ONE Column]
    if ($('.testimonials-2-col  .swiper-container').length) {
        var testimonialsSlider_1 = new Swiper('.testimonials-2-col  .swiper-container', {
            // Optional parameters
            speed: 500,
            loop: true,
            grabCursor: true,
            slidesPerView: 2,
            spaceBetween: 20,
            delay: 5000,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                }
            },
            navigation: {
                nextEl: '.testimonials-2-col .swiper-button-next',
                prevEl: '.testimonials-2-col .swiper-button-prev',
            },
            on: {
                resize: function () {
                    this.update();
                }
            },
        });
    }

    //initialize swiper [clients Section]
    if ($('.our-clients .swiper-container').length) {
        var partenersSlider = new Swiper('.our-clients .swiper-container', {
            // Optional parameters
            speed: 600,
            loop: true,
            spaceBetween: 30,
            grabCursor: true,
            delay: 5000,
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 6,
            breakpoints: {
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            },
        });
    }

    if ($('.portfolio-slider .swiper-container').length) {
        var swiperPortfolioSlider = new Swiper('.portfolio-slider .swiper-container', {
            spaceBetween: 25,
            speed: 600,
            loop: true,
            centeredSlides: true,
            slidesPerView: 3,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            },

            pagination: {
                el: '.portfolio-slider .swiper-pagination',
                type: 'progressbar',
            },

            navigation: {
                nextEl: '.portfolio-slider .swiper-button-next',
                prevEl: '.portfolio-slider .swiper-button-prev'
            },
        });
    }





    /* Start fancybox Options */
    // portfolio fancy box initializer

    if ($('*').fancybox) {
        $().fancybox({
            selector: '[data-fancybox=".filter"]:visible',
            loop: true,
            buttons: ['zoom', 'close'],
        });

    }

    /* Start bootstrap Scrollspy Options  */
    /*-------------------------------------*/
    //on one page demos only
    if (navMain) {
        $(bdyOnePage).scrollspy({
            target: navMain,
            offset: navMainHeight + 1
        });
    }


    // before - after Comparing section
    if (jQuery().twentytwenty) {

        $(function () {
            $("#before-after").twentytwenty({
                default_offset_pct: 0.25, // How much of the before image is visible when the page loads
                no_overlay: true, //Do not show the overlay with before and after
            });
        });
    }


    /* Start isotope Options */
    /*-------------------------------------*/
    if ($('.portfolio .portfolio-btn').length) {
        $('.portfolio .portfolio-btn').on('click', function () {

            $(this).addClass('active').siblings().removeClass('active');

            var $filterValue = $(this).attr('data-filter');
            portfolioGroup.isotope({
                filter: $filterValue
            });
        });
    }

    /* start mail chimp  */
    if (jQuery().ajaxChimp) {

        var subscribeUrl = $(".mc-form").attr('action');
        // alert vars
        var alerts = $('.mailchimp-alerts'),
            msgAll = $('.mc-msg'),
            msgSubmitting = $('.mc-submitting'),
            msgSuccess = $('.mc-success'),
            msgError = $('.mc-error');

        $('.mc-form').ajaxChimp({
            language: 'en',
            url: subscribeUrl,
            callback: mailChimpResponse
        });

        function mailChimpResponse(resp) {
            if (resp.result === 'success') {
                alerts.addClass("show-message")
                msgSuccess.html('' + resp.msg).fadeIn().addClass('active');
                msgError.hide();
                $(".mc-form").trigger('reset');

                // to remove the all messages text after 5 seconds from response is success
                setTimeout(function () {
                    alerts.removeClass("show-message");
                    msgAll.html('').removeClass('active');
                }, 5000);
            } else if (resp.msg.indexOf('is already subscribed') >= 0) {
                //if the e-mail already subscribed
                alerts.addClass("show-message")
                msgError.html('This E-mail is already subscribed, Please try another one').fadeIn(0).addClass('active');
                // remove the all messages but the error message so the user can notice the error
                msgSuccess.html('').removeClass('active');
                msgSubmitting.html('').removeClass('active');

            } else if (resp.result === 'error') {
                // any other errors 
                alerts.addClass("show-message");
                msgError.html('' + resp.msg).fadeIn(0).addClass('active');
                // remove the all messages but the error message so the user can notice the error
                msgSuccess.html('').removeClass('active');
                msgSubmitting.html('').removeClass('active');
            }
        }

    }
    /* End mail chimp  */

    /*----------------- End Vendors plugins options ----------------- */

});




/*----------------- Start page loading Actions -----------------  */

$(window).on("load", function () {

    //Fire the isotope plugin
    if (jQuery().isotope) {

        portfolioGroup.isotope({
            // options
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
            percentPosition: true,
            filter: '*',
            stagger: 30,
            containerStyle: null,
        });
    }

    //loading screen
    $("#loading-screen").fadeOut(500);
    $("#loading-screen").remove();

    // check if the loaded page have [dat-splitting] attr so the let the page fire splitting.js plugin  ;
    if ($("[data-splitting]").length) {
        Splitting();
    }

});

/*----------------- End Loading Event functions -----------------*/