(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        /*===== homepage-slide ====*/
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: false,
            dots: true,
            navText:['<i class="zmdi zmdi-long-arrow-left"></i>','<i class="zmdi zmdi-long-arrow-right"></i>']
        });
        /*===== homepage-slide end====*/
        
        /*===== case-studies-carousel ====*/
        $(".case-studies-carousel").owlCarousel({
            items: 3,
            loop: true,
            nav: false,
            autoplay: false,
            dots: true,
            margin: 30
        });
        /*===== case-studies-carousel end====*/
        
        /*===== case-studies-carousel2 ====*/
        $(".case-studies-carousel2").owlCarousel({
            items: 3,
            loop: true,
            nav: false,
            autoplay: false,
            dots: true,
        });
        /*===== case-studies-carousel2 end ====*/
        
        /*===== testimonial-carousel ====*/
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoplay: false,
            dots: true,
        });
        /*===== testimonial-carousel end ====*/
        
        /*===== logo-carousel ====*/
        $(".logo-carousel").owlCarousel({
            items: 6,
            loop: true,
            nav: false,
            autoplay: true,
            dots: false,
            margin: 30
        });
        /*===== logo-carousel end ====*/
        
        /*===== offcanvas-menu ====*/
        $(".menu-trigger").on('click', function() {
            $(".off-canvas-menu").addClass("show-offcanvas-menu");
        });
        
        $(".menu-trigger").on('click', function() {
            $(".offcanvas-menu-overlay").addClass("active");
        });
        $(".menu-close, .offcanvas-menu-overlay").on('click', function() {
            $(".off-canvas-menu").removeClass("show-offcanvas-menu");
            $(".offcanvas-menu-overlay").removeClass("active");
        });
        /*===== offcanvas-menu end ====*/
        
        /*===== single-testimonial-item ====*/
        $(".single-testimonial-item").hover(function(){
            $(".single-testimonial-item").removeClass("active");
            $(this).addClass("active");
        });
        /*===== single-testimonial-item end ====*/
        
         /*===== magnificPopup ====*/
       $(".video-play-btn").magnificPopup({
			type: 'video'
		});
        /*===== magnificPopup end====*/
    });
    
    jQuery(window).load(function(){
   
    });


}(jQuery));	