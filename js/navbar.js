$(document).ready(function(){

	$('#navbar li .inactiveMenu').each(function(){
		// Duplicate hyperlink, position above current link
		$(this).before($(this).clone().removeClass().addClass('hoverMenu'));

	});
	// on hover..
	$('#navbar li').hover(function(){

		$(this).find('.hoverMenu').stop().animate({marginTop: '0px'}, 200);

	},
	// on mouseleave
	function(){

		$(this).find('.hoverMenu').stop().animate({marginTop: '-30px'}, 200);
	});
});