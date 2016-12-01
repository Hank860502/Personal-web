(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
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
	  	pattern: ["#FF8736", "#FF3636", "#369FFF", "#FCFF3B", "#157DDD", "#dd7a15", "#fb9329"]
	  },
    donut: {
        title: "TECHNOLOGIES"
    }
	});

	var options = [
	  	{selector: '#chart', offset: 300, callback: function(el) {
      	chart.load({
	        columns: [
	            ["CSS", 40],
	        ]
	    	});
    	} },
    	{selector: '#chart', offset: 400, callback: function(el) {
      	chart.load({
	        columns: [
	            ["Javascript", 40],
	        ]
	    	});
    	} },
    	{selector: '#chart', offset: 600, callback: function(el) {
      	chart.load({
	        columns: [
	            ["jQuery", 20],
	            ["D3.js", 15],
	            ["C3.js", 20],
	        ]
	    	});
    	} },
    ];

Materialize.scrollFire(options);

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