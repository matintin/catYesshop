$(function(){

	$(".hoverImg")
	.mouseover(function(){
		var src = $(this).attr("src").match(/[^\.]+/) + "Hover.png";
		$(this).attr("src",src);
	})

	.mouseout(function(){
		var src = $(this).attr("src").replace("Hover.png",".png");
		$(this).attr("src",src);
	});

});