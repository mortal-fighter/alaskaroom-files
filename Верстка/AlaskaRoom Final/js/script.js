$(document).ready(function(){
    $('.action-btn').click(function(){
		$('.popup,.popup-shadow').fadeIn(400);
	});

	$('.popup-shadow,.close-popup').click(function(){
		$('.popup,.popup-shadow').fadeOut(400);
		$('form').submit();
	});
	
	
});
