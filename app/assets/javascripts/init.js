(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function() {
	eventListeners();
});

var eventListeners = function(){
	$(".jquery").on("click", linkChangeColor);
}



function linkChangeColor(e){
	e.preventDefault();
	$(this).removeClass("black-text");
	$(this).addClass("white-text");
}