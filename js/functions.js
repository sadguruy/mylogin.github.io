// JavaScript Document
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
            $('.header').addClass('fix');
        } else {
            $('.scrollup').fadeOut();
            $('.header').removeClass('fix');
        }
    });
    $('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $(".searchBtn").click(function() {
        $('.search_bar').slideDown();
    });
    $(".sbClose").click(function() {
        $('.search_bar').slideUp();
    });

    $(".goBottom").click(function() {
        $('html, body').animate({ scrollTop:$("#home_blocks").offset().top-80}, 500);
    });

    $(".apply_job").click(function() {
        $('#career_form').slideToggle();
        $('html, body').animate({ scrollTop:$("#career_form").offset().top-80}, 500);
    });

    $('div.multipleAdrData:first').slideDown('500');
      $('.multipleAdr:first h2').addClass('open'); 
      $('.multipleAdr h2').click(function () {
          $('div.multipleAdrData').slideUp('500');
          $('.multipleAdr h2').removeClass('open'); 
          var text = $(this).next('div.multipleAdrData');
          if (text.is(':hidden')) {
              text.slideDown('500');
              $(this).addClass('open');     
          } else {
              text.slideUp('500');
              $(this).removeClass('open');     
          } 
      });

      $(".micon").click(function() {
            $('.menu_nav').addClass('open');
            $('body').addClass('open');
        });

        $(".mclose").click(function() {
            $('.menu_nav').removeClass('open');
            $('body').removeClass('open');
        });

        $('.menu li .hasmenu').click(function () {
            $('ul.submenu').slideUp('500');
            $('.menu li .hasmenu').removeClass('open'); 
            var text = $(this).next('ul.submenu');
            if (text.is(':hidden')) {
                text.slideDown('500');
                $(this).addClass('open');     
            } else {
                text.slideUp('500');
                $(this).removeClass('open');     
            } 
        });
        $('.menu li .hasmenu2').click(function () {
            $('.submenu2').slideUp('500');
            $('.menu li .hasmenu2').removeClass('open'); 
            var text = $(this).next('.submenu2');
            if (text.is(':hidden')) {
                text.slideDown('500');
                $(this).addClass('open');     
            } else {
                text.slideUp('500');
                $(this).removeClass('open');     
            } 
        });

});

(function($) {
    var $window = $(window);
    $window.resize(function resize(){

        if ($window.width() < 1280) {

            
        }
    }).trigger('resize');
})(jQuery);