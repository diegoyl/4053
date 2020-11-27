window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

const gap = 100;
const sources = [
	"/img/0.png",
	"/img/0.png",
	"/img/0.png",
	"/img/0.png",
	"/img/0.png",
	"/img/0.png",
	"/img/0.png",
	"/img/1.png",
	"/img/1.png",
	"/img/2.png",
	"/img/2.png",
	"/img/3.png",
	"/img/3.png",
	"/img/4.png",
	"/img/4.png",
	"/img/5.png",
	"/img/5.png",
	"/img/6.png",
	"/img/6.png",
	"/img/7.png",
	"/img/7.png",
	"/img/8.png",
	"/img/8.png",
	"/img/9.png",
	"/img/9.png",
	"/img/10.png",
	"/img/10.png",
	"/img/11.png",
	"/img/11.png",
	"/img/12.png",
	"/img/12.png",
	"/img/13.png",
	"/img/13.png",
	"/img/14.png",
	"/img/14.png",
	"/img/15.png",
	"/img/15.png",
	"/img/16.png",
	"/img/16.png",
	"/img/17.png",
	"/img/17.png",
	"/img/18.png",
	"/img/18.png",
	"/img/19.png",
	"/img/19.png",
	"/img/20.png",
	"/img/20.png",
	"/img/21.png",
	"/img/21.png",
	"/img/22.png",
	"/img/22.png",
	"/img/23.png",
	"/img/23.png",
	"/img/24.png",
	"/img/24.png",
	"/img/25.png",
	"/img/25.png",
	"/img/26.png",
	"/img/26.png",
	"/img/27.png",
	"/img/27.png",
	"/img/28.png",
	"/img/28.png",
	"/img/29.png",
	"/img/29.png",
	"/img/30.png",
	"/img/30.png",
	"/img/30.png",
	"/img/31.png",
	"/img/31.png",
	"/img/31.png",
	"/img/32.png",
	"/img/32.png",
	"/img/32.png",
	"/img/33.png",
	"/img/33.png",
	"/img/33.png",
	"/img/34.png",
	"/img/34.png",
	"/img/34.png",
	"/img/35.png",
	"/img/35.png",
	"/img/35.png",
	"/img/36.png",
	"/img/36.png",
	"/img/36.png",
	"/img/37.png",
	"/img/37.png",
	"/img/38.png",
	"/img/38.png",
	"/img/39.png",
	"/img/39.png",
	"/img/40.png",
	"/img/40.png",
	"/img/41.png",
	"/img/41.png",
	"/img/42.png",
	"/img/42.png",
	"/img/43.png",
	"/img/43.png",
	"/img/44.png",
	"/img/44.png",
	"/img/45.png",
	"/img/45.png",
	"/img/46.png",
	"/img/46.png",
	"/img/47.png",
	"/img/47.png",
	"/img/48.png",
	"/img/48.png",
	"/img/49.png",
	"/img/49.png",
	"/img/50.png",
	"/img/50.png",
	"/img/51.png",
	"/img/51.png",
	"/img/52.png",
	"/img/52.png",
	"/img/53.png",
	"/img/53.png"
]
function init() {	
	var i = 0
	var intervalID = window.setInterval(myCallback, gap);
	function myCallback() {
		$("#image").attr("src",sources[i]);
		i++;
		if (i==120) {
			window.clearInterval(intervalID);
			var intervalID2 = window.setInterval(myCallback2, gap);
			var j = 0;
			function myCallback2() {
				$("#image").attr("src",sources[120-j]);
				j++;
				if (j==120) {
					window.clearInterval(intervalID2);
					$("#image").attr("src","/img/0.png");

				}
			}
		}
	}
	
	 


}

