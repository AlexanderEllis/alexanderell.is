$(document).ready(function(){
	var visible = false;
	var visibleInterval;

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
  });
});
