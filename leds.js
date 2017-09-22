var SenseHat = require('node-sense-hat');

var joystickLib = SenseHat.Joystick;
var matrix = SenseHat.Leds;

var currentLocation = [0, 0];

joystickLib.getJoystick()
.then(function(joystick) {

	joystick.on('press', function(direction) {

		console.log('The joystick was pressed in the ' + direction + ' direction');

		switch(direction) {
			case 'up':
				currentLocation[1]--;
				break;
			case 'down':
				currentLocation[1]++;
				break;
			case 'left':
				currentLocation[0]--;
				break;
			case 'right':
				currentLocation[0]++;
				break;
		}

	});

});

setInterval(function() {
	matrix.clear([0, 0, 0]);
	matrix.setPixel(currentLocation[0], currentLocation[1], [255, 0, 0]);
}, 250);
