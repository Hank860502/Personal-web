(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function() {
	eventListeners();
	var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
});

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
	$("a.more_text").toggle();
	if($(".read_more").find('i.fa.fa-angle-double-down')[0]){
		$(".col.s12.center.button_toggle").toggle()
	} 
}

function newWindow(e){
	e.preventDefault();
	window.open(
    "http://www.itftennis.com/juniors/players/player/profile.aspx?PlayerID=100211263",
    "_blank"
    )};