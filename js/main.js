(function($) {
	"use strict";

	var pre = ["webkit", "moz", "ms", "o"];
	var api = [
		{
			name: 'Ambient Light API',
			attr: 'ondevicelight',
			in: window
		},
		{
			name: 'Battery Status API',
			attr: 'battery',
			in: window.navigator
		},
		{
			name: 'Class List API',
			attr: 'classList',
			in: document.createElement("span")
		},
		{
			name: 'Compass Needs Calibration',
			attr: 'oncompassneedscalibration',
			in: window
		},
		{
			name: 'Dataset API',
			attr: 'dataset',
			in: document.createElement("span")
		},
		{
			name: 'Device Motion API',
			attr: 'DeviceMotionEvent',
			in: window
		},
		{
			name: 'Device Orientation API',
			attr: 'DeviceOrientationEvent',
			in: window
		},
		{
			name: 'Geolocation API',
			attr: 'geolocation',
			in: window.navigator
		},
		{
			name: 'Get User Media API',
			attr: 'getUserMedia',
			in: window.navigator
		},
		{
			name: 'High Resolution Time API',
			attr: 'now',
			in: window.performance
		},
		{
			name: 'Network Information API',
			attr: 'connection',
			in: window.navigator
		},
		{
			name: 'Page Visibility API',
			attr: 'hidden',
			in: document
		},
		{
			name: 'Presentation API',
			attr: 'presentation',
			in: window.navigator
		},
		{
			name: 'Proximity API',
			attr: 'ondeviceproximity',
			in: window
		},
		{
			name: 'Resource Timing API',
			attr: 'getEntriesByType',
			in: window.performance
		},
		{
			name: 'Speech Synthesis API',
			attr: 'SpeechSynthesisUtterance',
			in: window
		},
		{
			name: 'Standby API',
			attr: 'wakeLock',
			in: window.navigator
		},
		{
			name: 'User Timing API',
			attr: 'mark',
			in: window.performance
		},
		{
			name: 'Vibration API',
			attr: 'vibrate',
			in: window.navigator
		},
		{
			name: 'Web Alarms API',
			attr: 'alarms',
			in: window.navigator
		},
		{
			name: 'Web Notification API',
			attr: 'Notification',
			in: window
		},
		{
			name: 'Web Speech API',
			attr: 'SpeechRecognition',
			in: window
		}
	];


	for (var i = 0; i < api.length; i++) {
		var a = api[i],
			u = a.attr,
			v = '',
			c = 'no';
		if (a.attr in a.in) {
			c = 'yes';
		} else {
			for (var j = 0; j < pre.length; j++) {
				var n = pre[j] + a.attr.charAt(0).toUpperCase() + a.attr.substring(1);
				if (n in a.in) {
					c = 'kinda';
					v = n;
					break;
				}
			}
		}
		$('body').append('<section class="' + c + '"><span>' + api[i].name + '</span><span>' + u + '</span><span>' + v + '</span></section>');
	}
}(jQuery));