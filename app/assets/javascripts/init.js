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
	var a = $(this);
	var b = $(this).parent();
	var c = $(this).parent().parent();
	var d = $(this).parent().parent().attr('.more_text');
	var e = $('.more_text')

	console.log(a)
	console.log(b)
	console.log(c)
	console.log(d)
	console.log(e)
	$("more_text").css({"background-color": "red"});
}

function newWindow(e){
	e.preventDefault();
	window.open(
    "http://www.itftennis.com/juniors/players/player/profile.aspx?PlayerID=100211263",
    "_blank"
    )};