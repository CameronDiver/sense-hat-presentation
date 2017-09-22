// Import the module
var SenseHat = require('node-sense-hat');

// Extract the hardware libraries from the module
var joystickLib = SenseHat.Joystick;
var matrix = SenseHat.Leds;
var imuLib = SenseHat.Imu;

// Create a handle to the IMU
var imu = new imuLib.IMU();

var currentPosition = [0, 0];

joystickLib.getJoystick()
.then((joystick) => {

	joystick.on('press', (direction) => {
		console.log('Direction: ', direction);

		switch(direction) {
			case 'up':
				break;
			case 'down':
				break;
			case 'left':
				break;
			case 'right':
				break;
		}

	});

});
