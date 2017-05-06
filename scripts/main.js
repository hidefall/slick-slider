;(function($){
  'use strict';

  $(window).on('load', function() {
    $('.ba-slider').slick({
      dots: true,
      slidesToShow: 1,
      pauseOnFocus: true,
      autoplay: false,
      autoPlaySpeed: 1001,
      pauseOnHover: true,
      infinite: true,
      // centerMode: true,
      // adaptiveHeight: true,
      // draggable: false,

    });
  })
  
})(jQuery);
  

