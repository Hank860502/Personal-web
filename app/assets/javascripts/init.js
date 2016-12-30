(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.slider').slider({full_width: true});
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function() {
	eventListeners();
	var chart = c3.generate({
	  data: {
      columns: [
        ['HTML5', 60],
        ["Ruby on Rails", 80],
      ],
      type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
	  },
	  color: {
	  	pattern: ["#ff9500", "#E70000", "#ffcc00", "#4cd964", "#ff2d55", "#5856d6", "#007aff", "#5ac8fa"]
	  },
    donut: {
        title: "TECHNOLOGIES"
    }
	});

	var options = [
	  	{selector: '#chart', offset: 210, callback: function(el) {
      	chart.load({
	        columns: [
	            ["CSS", 40],
	        ]
	    	});
    	} },
    	{selector: '#chart', offset: 300, callback: function(el) {
      	chart.load({
	        columns: [
	            ["Javascript", 40],
	        ]
	    	});
    	} },
    	{selector: '#chart', offset: 400, callback: function(el) {
      	chart.load({
	        columns: [
	            ["RSpec", 14],
	            ["jQuery", 15],
	            ["D3.js", 15],
	            ["C3.js", 15]
	        ]
	    	});
    	} },
    ];

Materialize.scrollFire(options);

});

var eventListeners = function(){
	$(".link").hover(linkChangesColor, linkReturnsColor);
	$(".read_more").on("click", spanIntro);
	$(".read_more").hover(linkChangesColor, linkReturnsColor);
	$(".new_page").on("click", newWindow);
	$(".go_top").on("click", goToTop);
	$(".go_top").hover(linkChangesColor, linkReturnsColor);
	$(".navbarlinks.grey-text").hover(linkReturnsColor, linkChangesColor)
}

function goToTop(e){
	e.preventDefault();
	$('html, body').animate({scrollTop : 0},800);
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
	$("p.intro").toggle();
	$("a.more_text").toggle();
	if($(".read_more").find('i.fa.fa-angle-down')[0]){
		$(".col.s12.center.button_toggle").toggle()
	} 
}

function newWindow(e){
	e.preventDefault();
	if($(this).attr("href")==="http://www.itftennis.com/juniors/players/player/profile.aspx?PlayerID=100211263"){
		window.open(
	    "http://www.itftennis.com/juniors/players/player/profile.aspx?PlayerID=100211263",
	    "_blank"
	  )} else if($(this).attr("href")==="https://github.com/Hank860502/Personal-web"){
		window.open(
	    "https://github.com/Hank860502/Personal-web",
	    "_blank"
	  )} else if($(this).attr("href")==="https://github.com/Hank860502"){
		window.open(
	    "https://github.com/Hank860502",
	    "_blank"
	  )} else if($(this).attr("href")==="https://www.linkedin.com/in/hank860502"){
		window.open(
	    "https://www.linkedin.com/in/hank860502",
	    "_blank"
	  )} else if($(this).attr("href")==="https://www.facebook.com/HankChenTennis/?ref=aymt_homepage_panel"){
		window.open(
	    "https://www.facebook.com/HankChenTennis/?ref=aymt_homepage_panel",
	    "_blank"
	  )} else if($(this).attr("href")==="https://www.instagram.com/hankchentennis"){
		window.open(
	    "https://www.instagram.com/hankchentennis",
	    "_blank"
	  )
	}
};