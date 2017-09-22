// Import the module
var SenseHat = require('node-sense-hat');

// Extract the hardware libraries from the module
var joystickLib = SenseHat.Joystick;
var matrix = SenseHat.Leds;
var imuLib = SenseHat.Imu;

// Create a handle to the IMU
var imu = new imuLib.IMU();

// Clear the screen
matrix.clear([0, 0, 0]);


