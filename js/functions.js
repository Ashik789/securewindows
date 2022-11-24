   //LOADER
   jQuery(window).on("load", function () {
      "use strict";
      jQuery(".loader").fadeOut(800);


   });

   

   jQuery(function ($) {
      "use strict";
      var $window = $(window);
      var windowsize = $(window).width();
      var $root = $("html, body");
      var $this = $(this);
 



      /*----- Menu On click -----*/
      if ($("#sidemenu_toggle").length) {
         $("body").addClass("pushwrap");
         $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
         }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
         }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
         });
      }

      /* ------- Smooth scroll ------- */
      $("a.pagescroll").on("click", function (event) {
         event.preventDefault();
         $("html,body").animate({
            scrollTop: $(this.hash).offset().top
         }, 1200);
      });

      $(".navbar-nav>li>a").on("click", function () {
         $(".navbar-collapse").collapse("hide");
      });

      /*------ MENU Fixed ------*/
      if ($("nav.navbar").hasClass("static-nav")) {
         $window.scroll(function () {
            var $scroll = $window.scrollTop();
            var $navbar = $(".static-nav");
            if ($scroll > 200) {
               $navbar.addClass("fixedmenu");
            } else {
               $navbar.removeClass("fixedmenu");
            }
         });
      }
      if ($("nav.navbar").hasClass("fixed-bottom")) {
         var navHeight = $(".fixed-bottom").offset().top;
         $(window).scroll(function () {
            if ($(window).scrollTop() > navHeight) {
               $('.fixed-bottom').addClass('fixedmenu');
            } else {
               $('.fixed-bottom').removeClass('fixedmenu');
            }
         });
      }


      
    /* ===================================
       Owl Carousel
       ====================================== */

    $(".product-carousel").owlCarousel({
      items: 4,
      margin: 30,
      dots: false,
      nav: true,
      navText: [
          "<i class='fas fa-long-arrow-alt-left'></i>",
          "<i class='fas fa-long-arrow-alt-right'></i>"
      ],
      loop:true,
      autoplay: true,
      smartSpeed:500,
      autoplayHoverPause:true,
      responsiveClass:true,
      responsive: {
          992: {
              items:4
          },
          800: {
              items: 2
          },
          320: {
              items: 1
          }
      }
  });

  $(".project-carousel").owlCarousel({
      items: 3,
      margin: 30,
      dots: false,
      nav: true,
      navText: [
          "<i class='fas fa-long-arrow-alt-left'></i>",
          "<i class='fas fa-long-arrow-alt-right'></i>"
      ],
      loop:false,
      autoplay: false,
      autoplaySpeed:2000,
      autoplayHoverPause:true,
      responsiveClass:true,
      responsive: {
          992: {
              items:3
          },
          800: {
              items: 2
          },
          320: {
              items: 1,
              loop:true,
              autoplay:true
          }
      }
  });

  $(".testimonial-carousel").owlCarousel({
      items: 1,
      margin: 30,
      dots: false,
      nav: true,
      navText: [
        "<i class='fas fa-long-arrow-alt-left'></i>",
        "<i class='fas fa-long-arrow-alt-right'></i>"
    ],
      loop:true,
      autoplay: true,
      smartSpeed:500,
      autoplayHoverPause:true,
      responsiveClass:true,
  });

  $(".gallery-carousel").owlCarousel({
    items: 4,
    margin: 30,
    dots: false,
    nav: true,
    navText: [
        "<i class='fas fa-long-arrow-alt-left'></i>",
        "<i class='fas fa-long-arrow-alt-right'></i>"
    ],
    loop:false,
    autoplay: true,
    smartSpeed:500,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        992: {
            items:4
        },
        800: {
            items: 2
        },
        320: {
            items: 1
        }
    }
});


  // popup  //
var imaggepoppup = $(".image-popup");
imaggepoppup.length && $(".image-popup").magnificPopup({
    type: "image",
    callbacks: {
        beforeOpen: function() {
            this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure animated zoomIn")
        }
    },
    gallery: {
        enabled: !0
    }
});
var popupyoutube = $(".popup-youtube");
popupyoutube.length && $(".popup-youtube").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: true
    });


    $(document).ready(function() {
      var newCustomer = (sessionStorage.getItem('demoPop') === 'true') ? false : true;
      $('#enquire').popup({
          autoopen: newCustomer,
          pagecontainer: '.container',
          transition: 'all 0.3s',
          scrolllock:true,
          blur:false,
          
      });
      sessionStorage.setItem('demoPop', 'true');
  });



   });

   jQuery(document).ready(function($){
    //---------------------------------------------------
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();
   
    // Account for home page with empty path
    if ( path == '' ) {
      path = 'index';
    }
        
    var target = $('.navbar-nav a[href="'+path+'"]');
    // Add active class to target link
    target.parent().addClass('active');
    //-----------------------------------------------------
  });
