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
	$(".read_more").on("click", spanIntro);
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



function spanIntro(e){
	e.preventDefault();
	$("p").toggle();
}
	// $(".more_text").css({"display": "inline"});
	// $(".original_text").css({"display": "none"})
	// $(".read_more").replaceWith("<a class='black-text read_less' href='#'><i aria-hidden='true' class='fa fa-angle-double-up fa-3x'></i></a>")

// function hideIntro(e){
// 	e.preventDefault();
// 	$(".more_text").css({"display": "none"});
// 	$(".original_text").css({"display": "inline"})
// 	$(this).children().replaceWith("<a class='black-text read_more' href='#'><i aria-hidden='true' class='fa fa-angle-double-down fa-3x'></i></a>")
// }

function newWindow(e){
	e.preventDefault();
	window.open(
    "http://www.itftennis.com/juniors/players/player/profile.aspx?PlayerID=100211263",
    "_blank"
    )};