(function($) {
	"use strict";

	var pre = ["webkit", "moz", "ms", "o"];
	var api = [
		{
			name: 'Ambient Light',
			attr: 'ondevicelight',
			in: window
		},
		{
			name: 'Battery Status',
			attr: 'battery',
			in: window.navigator
		},
		{
			name: 'Class List',
			attr: 'classList',
			in: document.createElement("span")
		},
		{
			name: 'Compass Needs Calibration',
			attr: 'oncompassneedscalibration',
			in: window
		},
		{
			name: 'Dataset',
			attr: 'dataset',
			in: document.createElement("span")
		},
		{
			name: 'Device Motion',
			attr: 'DeviceMotionEvent',
			in: window
		},
		{
			name: 'Device Orientation',
			attr: 'DeviceOrientationEvent',
			in: window
		},
		{
			name: 'Geolocation',
			attr: 'geolocation',
			in: window.navigator
		},
		{
			name: 'Get User Media',
			attr: 'getUserMedia',
			in: window.navigator
		},
		{
			name: 'High Resolution Time',
			attr: 'now',
			in: window.performance
		},
		{
			name: 'Network Information',
			attr: 'connection',
			in: window.navigator
		},
		{
			name: 'Page Visibility',
			attr: 'hidden',
			in: document
		},
		{
			name: 'Presentation',
			attr: 'presentation',
			in: window.navigator
		},
		{
			name: 'Proximity',
			attr: 'ondeviceproximity',
			in: window
		},
		{
			name: 'Resource Timing',
			attr: 'getEntriesByType',
			in: window.performance
		},
		{
			name: 'Screen Orientation',
			attr: 'orientation',
			in: window.screen
		},
		{
			name: 'Speech Synthesis',
			attr: 'SpeechSynthesisUtterance',
			in: window
		},
		{
			name: 'Standby',
			attr: 'wakeLock',
			in: window.navigator
		},
		{
			name: 'User Timing',
			attr: 'mark',
			in: window.performance
		},
		{
			name: 'Vibration',
			attr: 'vibrate',
			in: window.navigator
		},
		{
			name: 'Web Alarms',
			attr: 'alarms',
			in: window.navigator
		},
		{
			name: 'Web Notification',
			attr: 'Notification',
			in: window
		},
		{
			name: 'Web Speech',
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