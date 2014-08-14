(function() {
	'use strict';

	if (!('ondevicelight' in window)) {
		document.querySelector('h3').innerHTML = 'Ambient Light API not supported';
		return;
	}

	var init = function() {
		var val = document.querySelector('h3'),
			night = document.querySelector('.night'),
			dawn = document.querySelector('.dawn'),
			day = document.querySelector('.day');

		window.addEventListener('devicelight', function(e) {
			val.innerHTML = Math.round(e.value) + ' lux';

			if (e.value > 150) {
				night.classList.add('show');
				dawn.classList.add('show');
				day.classList.add('show');
			} else if (e.value > 100) {
				night.classList.add('show');
				dawn.classList.add('show');
				day.classList.remove('show');
			} else if (e.value > 50) {
				night.classList.add('show');
				dawn.classList.remove('show');
				day.classList.remove('show');
			} else {
				night.classList.remove('show');
				dawn.classList.remove('show');
				day.classList.remove('show');
			}
		});
	}

	window.addEventListener('DOMContentLoaded', init, true);
}());