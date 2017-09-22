var SenseHat = require('node-sense-hat');

var joystickLib = SenseHat.Joystick;
var matrix = SenseHat.Leds;
var imuLib = SenseHat.Imu;

var imu = new imuLib.IMU();

var currentLocation = [0, 0];
var backgroundColour = [0, 0, 0];

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

	imu.getValue(function(error, data) {

		backgroundColour = [
			127 * data.accel.x,
			127 * data.accel.y,
			127 * data.accel.z
		].map(function(value) {
			if (value < 0) return 0;
			if (value > 255) return 255;
			return Math.floor(value);
		});

	});
}, 500);

setInterval(function() {
	matrix.clear(backgroundColour);
	matrix.setPixel(currentLocation[0], currentLocation[1], [255, 0, 0]);
}, 250);
