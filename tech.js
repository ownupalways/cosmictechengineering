function adjust() {
	var x = document.getElementById("power_nav");
	if (x.className === "topnav") {
		x.className += " responsive";
	}else {
		x.className = "topnav";
	}
}

$(function() {
	$(".firstDay").click(function(){
		$(".firstDay-Activities").toggle();
	});
});