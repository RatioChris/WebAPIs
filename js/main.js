(function($) {
	"use strict";

	var arr = [
		{
			name: 'Ambient Light API',
			event: 'ondevicelight',
			in: window
		},
		{
			name: 'Battery Status API',
			event: 'battery',
			in: window.navigator
		},
		{
			name: 'Class List API',
			event: 'classList',
			in: document.createElement("span")
		},
		{
			name: 'Compass Needs Calibration',
			event: 'oncompassneedscalibration',
			in: window
		},
		{
			name: 'Dataset API',
			event: 'dataset',
			in: document.createElement("span")
		},
		{
			name: 'Device Orientation API',
			event: 'DeviceOrientationEvent',
			in: window
		},
		{
			name: 'Device Motion API',
			event: 'DeviceMotionEvent',
			in: window
		},
		{
			name: 'Geolocation API',
			event: 'geolocation',
			in: window.navigator
		},
		{
			name: 'Get User Media API',
			event: 'getUserMedia',
			in: window.navigator
		},
		{
			name: 'High Resolution Time API',
			event: 'now',
			in: window.performance
		},
		{
			name: 'Network Information API',
			event: 'connection',
			in: window.navigator
		},
		{
			name: 'Page Visibility API',
			event: 'hidden',
			in: document
		},
		{
			name: 'Presentation API',
			event: 'presentation',
			in: window.navigator
		},
		{
			name: 'Proximity API',
			event: 'ondeviceproximity',
			in: window
		},
		{
			name: 'Resource Timing API',
			event: 'getEntriesByType',
			in: window.performance
		},
		{
			name: 'Speech Synthesis API',
			event: 'SpeechSynthesisUtterance',
			in: window
		},
		{
			name: 'Standby API',
			event: 'wakeLock',
			in: window.navigator
		},
		{
			name: 'User Timing API',
			event: 'mark',
			in: window.performance
		},
		{
			name: 'Vibration API',
			event: 'vibrate',
			in: window.navigator
		},
		{
			name: 'Web Alarms API',
			event: 'alarms',
			in: window.navigator
		},
		{
			name: 'Web Notification API',
			event: 'Notification',
			in: window
		},
		{
			name: 'Web Speech API',
			event: 'SpeechRecognition',
			in: window
		}
	];


	for (var i = 0; i < arr.length; i++) {
		var c = 'no';
		if (arr[i].event in arr[i].in) {
			c = 'yes';
		}
		$('body').append('<section class="' + c + '">' + arr[i].name + '</section>');
	}
}(jQuery));