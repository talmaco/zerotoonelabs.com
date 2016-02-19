$(function() {
	$('#willpower').click(function() {
		mixpanel.track("Video play");
	});
});