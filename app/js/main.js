$(document).ready(function() {
	$('.menu_show').click(function(e) {
		$(this).toggleClass('active');
		$('.nav_menu').toggleClass('active');
	});
});