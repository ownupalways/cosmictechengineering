const http = require('http')
const port = 3000;

const server = http.createServer(function(req, res){

})

server.listen(port,function(error){
	if(error) {
		console.log('something went wrong',error)
	}else{
		console.log('server is listening on port' + port)
	}
})

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