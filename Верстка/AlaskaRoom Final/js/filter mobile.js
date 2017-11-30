$(document).ready(function () {
    $('.mbl-filter').on('click', function(){
		$('.main-filter').show();
		$('.listing').hide();
	});
	
	 $('.find-filter').on('click', function(){
		$('.main-filter').hide();
		$('.listing').show();
	});
	
});