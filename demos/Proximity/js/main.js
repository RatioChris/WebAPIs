(function() {
	"use strict";

	if (!('ondeviceproximity' in window)) {
		document.querySelector('body').innerHTML = '<h3>Proximity API not supported</h3>';
		return;
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