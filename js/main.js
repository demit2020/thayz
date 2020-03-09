jQuery(document).ready(function($) {
	
   'use strict';
   
       
	//FULLSCREEN SLIDER
	$('#slides').superslides({
      animation: 'fade'
   });

	
	//MAGNIFIC POPUP LIGHTBOX
	 $('.image-link').magnificPopup({type:'image'});
    
	
    // TWITTER FEEDS
	$('#tweets').tweetable({
    	username: 'envato_support', 
    	time: true,
    	rotate: true,
    	speed: 4000, 
    	limit: 5,
    	replies: false,
    	position: 'append',
    	failed: "Sorry, twitter is currently unavailable for this user.",
    	loading: "Loading tweets...",
    	html5: true,
	});
 
 	
	//ANIMATIONS
  	new WOW().init();
    
	  
	//OWLCAROUSEL TESTIMONIAL
	$("#testimonial").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
	});
  
	//OWLCAROUSEL SCREENSHOTS
	$("#screenshot-carousel").owlCarousel({
	 
		autoPlay: false, //Set AutoPlay to 3 seconds
		
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		navigation : true,
		navigationText : ['<i class="fa fa-2x fa-chevron-left"></i>','<i class="fa fa-2x fa-chevron-right"></i>'],
		pagination : false
	 
	});

 
}); 

$(window).load(function(){
	
	//PARALLAX BACKGROUND
	$(window).stellar({
		horizontalScrolling: false,
	});
    
	
    //PRELOADER
    $('.preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow-y':'visible'});

	});

	//HEADER ANIMATION
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

