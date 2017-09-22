var SenseHat = require('node-sense-hat');

var joystickLib = SenseHat.Joystick;

joystickLib.getJoystick()
.then(function(joystick) {
	joystick.on('press', function(direction) {
		console.log('The joystick was pressed in the ' + direction + ' direction');
	});
});
