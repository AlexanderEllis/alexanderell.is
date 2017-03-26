$(document).ready(function(){
	var visible = false;
	var visibleInterval;

$("#to-portfolio").click(function(){
	$("html, body").stop().animate({
		scrollTop: $("#portfolio-title").offset().top - 55
	}, 2000);
});

$("#to-about").click(function(){
	$("html, body").stop().animate({
		scrollTop: $("#about-container").offset().top
	}, 2000);
});

$("#to-top").click(function(){
	$("html, body").stop().animate({
		scrollTop: 0
	}, 2000);
});

$(".project-card").hover(
	function(){
		$(this).find(".example-picture").stop().animate({
			opacity: 1
		}, 300)},
	function() {
		$(this).find(".example-picture").stop().animate({
			opacity: 0.5
		},300)});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if ((scroll > windowHeight) && (!visible)) {
			clearInterval(visibleInterval);
			visible = true;
			$("#header").css({"display": "flex"});
			$("#header").stop().animate({
				"opacity": ".7"
			}, 500);
		};
		if ((scroll < windowHeight) && (visible)) {
			visible = false;
			visibleInterval = setTimeout(function() {
				$("#header").css({"display": "none"});
			}, 500);
			$("#header").stop().animate({
				"opacity": "0"
			}, 500);
		};
    // Do something
});


});
