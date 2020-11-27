window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

const gap = 300;


const count = 56;
function init() {	
	var val =  gap*.5;
	if (val < 250) {
		val = 250;
		if (gap < 250){
			val = gap;
		}
	}
	val  = val + "ms";
	$(".img").css("transition", val);
	play();
}

function play() {
	console.log("FORWARDS");

	var i = 0
	var intervalID = window.setInterval(myCallback, gap);
	function myCallback() {
		$("#image"+i).css("opacity", 1);
		console.log(i);
		i++;
		if (i==count) {
			window.clearInterval(intervalID);
			var intervalID2 = window.setInterval(myCallback2, gap);
			var j = 0;
			console.log("BACKWARDS");

			function myCallback2() {
				jj = (count-j);
				$("#image"+jj).css("opacity", 0);
				console.log(jj);

				j++;
				if (j==count) {
					window.clearInterval(intervalID2);
					play();
				}
			}
		}
	}
}