(function() {
	"use strict";

	if (!('ondeviceproximity' in window)) {
		document.querySelector('h3').innerText = 'Device Proximity API not supported';
	}

	var init = function() {
		var val = document.querySelector('h3');

		window.addEventListener('deviceproximity', function(e) {
			val.innerHTML = Math.round(e.value);

			if (e.value < 5) {
				window.navigator.vibrate(1000);
			}
		});
	}

	window.addEventListener("DOMContentLoaded", init, true);
}());