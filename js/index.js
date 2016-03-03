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
	// get button DOM object
	var btnObj = document.getElementById("btnTest");
	btnObj.innerHTML = "<b>hello</b>";
	// convert button DOM object to jquery object 
	var $btn = $(btnObj);
	// set button click handler
	$btn.click(function(){
		alert("button clicked");
		$(this).html(":)");
	});
	// convert jquery object to DOM object
	var btnDOM = $btn.get(0);
	btnDOM.innerHTML = "Hello world";
	
	//
	$("#submit").click(function(){
	    var cr = document.getElementById("cr");
		if( !cr.checked){
			alert("read the rules and submit again");
		}
	});
	/*
	var ps = document.getElementsByTagName("p");
	for (var i = 0; i < ps.length; i++) {
	    ps[i].onclick = function () {
	        alert("clicked");
	    };
	}*/
	$("p").click(function(){
		alert($(this).html() + " clicked");
	});
	
	/*
	var table = document.getElementById("tb");
	var tbody = table.getElementsByTagName("tbody")[0];
	var rows = tbody.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
	    if (i % 2) {
	        rows[i].style.backgroundColor = "#888";
	    }
            
	}*/
	$("#tb tbody tr:odd").css("background", "#888");

	var btnck = document.getElementById("btnck");
	btnck.onclick = function () {
	    /*var cks = document.getElementsByName("check");
	    var count = 0;
	    for (var i = 0; i < cks.length; i++) {
	        if (cks[i].checked) {
	            count++;
	        }
	    }*/
		
	    alert($("input[name=check]:checked").length);
	};
    /*
	$("btnck").click(function () {
	    var cks = document.getElementsByName("check");
	    var count = 0;
	    for (var i = 0; i < cks.length; i++) {
	        if (cks[i].checked) {
	            count++;
	        }
	    }
	    alert(count);
	});*/

});

