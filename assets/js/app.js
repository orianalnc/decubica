$(function(){
    "use strict";
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })

    /*$(".carousel .carousel-item[data-src]").each(function(){
        var $this = $(this);
    
        $this.prepend(
            [
                '<div style="background-image: url(', $this.attr("data-src"),')"></div>'
            ].join("")
        );
    });*/
    
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });
    
      $('.back-to-top').click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
      });
});

