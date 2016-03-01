// function will be called when all DOM element initialized 
// this function can have multiple instances in distributed 
// source file
$(document).ready(function(){
	$(".has_children").click(function(){
		$(this).addClass("highlight")
			.children("a").show().end()
		.siblings().removeClass("highlight")
			.children("a").hide();
	});	
	var btnObj = document.getElementById("btnTest");
	btnObj.innerHTML = "<b>hello</b>";

});

