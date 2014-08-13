(function() {
	"use strict";

	if (!('Notification' in window)) {
		document.querySelector('body').innerHTML = '<h3>Web Notification API not supported</h3>';
		return;
	}

	var title = 'Notification!',
		options = {
			body: 'Hey, this is what a notification looks like.',
			icon: 'https://avatars0.githubusercontent.com/u/5340727?v=2&s=460'
		};

	document.querySelector('button').addEventListener('click', function() {
		Notification.requestPermission(function() {
			var notification = new Notification(title, options);
		});
	}, false);
}());