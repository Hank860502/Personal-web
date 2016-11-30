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
	$(".footer_link").hover(linkChangesColor, linkReturnsColor);
	$(".read_more").on("click", spendIntro);
	$(".read_more").hover(linkChangesColor, linkReturnsColor);
	$(".new_page").on("click", newWindow)
}



function linkChangesColor(e){
	$(this).removeClass("black-text");
	$(this).addClass("grey-text");
}


function linkReturnsColor(e){
	$(this).removeClass("grey-text");
	$(this).addClass("black-text");
}

function spendIntro(e){
	e.preventDefault();
}

function newWindow(e){
	e.preventDefault();
	window.open(
    "http://www.itftennis.com/juniors/players/player/profile.aspx?PlayerID=100211263",
    "_blank"
    )};