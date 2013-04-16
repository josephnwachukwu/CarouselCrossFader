//CrossFade Carousel v1.0
//Copyright 2012 Joseph Nwachukwu
//Licenced under MIT GPL

(function($){
	$.fn.carouselCrossFade = function(options) {
	//Default Styles
	var defaults = { 
		'delay' : '5000',
		'border' : '#333 1px solid'
	};
	var options = $.extend(defaults, options);
		return this.each(function() {
			var opts = options;
			var slideshow = $(this);
			slideshow.css({
				'position':'relative',
				'border': opts.border
			});
			$('.slideshow div').css({
				'position':'absolute',
				'left':'0',
				'top':'0',
				'width':'100%',
				'height':'100%',
				'float':'left'
			});
			$('.slideshow div:gt(0)').hide();
			setInterval(function(){$('.slideshow div:first').fadeOut().next('div').fadeIn().end().appendTo(slideshow);}, opts.delay);
		})
	};
})(jQuery);