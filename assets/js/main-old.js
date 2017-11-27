

$.fn.isInViewport = function() {
var elementTop = $(this).offset().top+100;
var elementBottom = elementTop + $(this).outerHeight();
var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();

console.log("elementTop"+elementTop+"\n");

console.log("elementBottom"+elementBottom+"\n");

console.log("viewportTop"+viewportTop+"\n");

console.log("viewportBottom"+viewportBottom+"\n");

console.log("viewportBottom"+viewportBottom+"\n");

console.log("elementBottom > viewportTop && elementTop < viewportBottom");

return  elementTop < viewportBottom;
};

function zkShowAnimate(element){
	$(element).addClass("inview");
}
$(window).on('resize scroll', function() {
	var i=0;
	$('.animate').each(function() { 
		var parent=$(this).parent('.animate_wrap');
		if ($(parent).isInViewport()) {
			
			$(parent).addClass("inview"); 
			
			var timeout=(i*400);
			var current = $(this);
			setTimeout(function(){
				$(current).addClass('start')

			}, timeout)
			
			i++;
			

		} else {
			/*
			$(this).removeClass('start')
			$(parent).removeClass('inview');
			*/
		}
	});
});

$(document).ready(function(){
	alert('WORK');
});