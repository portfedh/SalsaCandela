/*
    Template Name: Handstand - Gym & Fitness HTML Template
    Template URI: https://devitems.com/html/coffee-preview/
    Description: This is html5 template
    Author: HasTech
    Author URI: https://devitems.com/
    Version: 1.0
*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. Owl Carousel
	03. jQuery MeanMenu
	04. Mail Chimp
	05. ScrollUp
	06. Wow js
	07. Portfolio Isotope
    08. Magnific Popup
 
======================================
[ End table content ]
======================================*/

(function ($) {
  "use strict";

  /*------------------------------------
    01. Sticky Menu
-------------------------------------- */
  var windows = $(window);
  var stick = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 245) {
      stick.removeClass("sticky");
    } else {
      stick.addClass("sticky");
    }
  });

  /*----------------------------------------
    02. Owl Carousel
---------------------------------------- */
  /*----------------------------------------
    Slider Carousel
---------------------------------------- */
  $(".slider-wrapper").owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 2500,
    autoplay: false,
    items: 1,
    nav: true,
    navText: [
      "<i class='zmdi zmdi-chevron-left'></i>",
      "<i class='zmdi zmdi-chevron-right'></i>",
    ],
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  /*--------------------------------------
    Testimonial Carousel
--------------------------------------- */
  $(".testimonial-owl").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    autoplay: false,
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /*-------------------------------------
    Blog Carousel
-------------------------------------- */
  $(".blog-carousel").owlCarousel({
    loop: true,
    items: 3,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  /*-------------------------------------
    Event Carousel
-------------------------------------- */
  $(".event-owl").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  /*--------------------------------
	Testimonial Slick Carousel
-----------------------------------*/
  $(".testimonial-text-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: ".slider-nav",
  });

  /*------------------------------------
	Testimonial Slick Carousel as Nav
--------------------------------------*/
  $(".testimonial-image-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".testimonial-text-slider",
    dots: true,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: false,
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
  /*-------------------------------------------
    03. jQuery MeanMenu
--------------------------------------------- */
  // $(".main-menu nav").meanmenu({
  //   meanScreenWidth: "991",
  //   meanMenuContainer: ".mobile-menu",
  // });

  // $(".main-menu").meanmenu({
  //   meanScreenWidth: "991",
  //   meanMenuContainer: ".mobile-menu",
  // });

  // $(".main-menu").meanmenu({
  //   meanScreenWidth: "991",
  //   meanMenuContainer: ".mobile-menu",
  //   meanMenuOpen: '<i class="fa fa-bars"></i>',   // Font Awesome hamburger <i class="fa-solid fa-bars"></i>
  //   meanMenuClose: '<i class="fa fa-times"></i>', // Font Awesome close (X)
  // });

    $(".main-menu").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    meanMenuOpen: '<i class="fa-solid fa-bars fa-2x"></i>',   // Font Awesome hamburger <i class="fa-solid fa-bars"></i>
    meanMenuClose: '<i class="fa-solid fa-xmark fa-2x"></i>', // Font Awesome close (X)
  });

  /*----------------------------------------
	04. Mail Chimp
------------------------------------------*/
  // $('#mc-form').ajaxChimp({
  //     language: 'en',
  //     callback: mailChimpResponse,
  //     // ADD YOUR MAILCHIMP URL BELOW HERE!
  //     url: 'https://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
  // });

  // function mailChimpResponse(resp) {

  //     if (resp.result === 'success') {
  //         $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
  //         $('.mailchimp-error').fadeOut(400);

  //     } else if(resp.result === 'error') {
  //         $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
  //     }
  // }

  /*------------------------------------------
    05. ScrollUp
------------------------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });

  /*-------------------------------------------
    06. Wow js
--------------------------------------------- */
  new WOW().init();

  /*--------------------------
    07. Portfolio Isotope
---------------------------- */
  $(".grid").imagesLoaded(function () {
    // filter items on button click
    $(".portfolio-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });
  });

  $(".portfolio-menu button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  /*--------------------------
    08. Magnific Popup
---------------------------- */
  $(".video-popup").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    zoom: {
      enabled: true,
    },
  });

  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
})(jQuery);
