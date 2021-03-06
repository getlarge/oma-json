const omaResources = [
	{
		name: 'Tool Version',
		description:
			'The tool version that the device supports - used to determine the logging object/resource version to be used for parsing ',
		value: 1,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'IMEI',
		description: 'IMEI of device',
		value: 2,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'IMSI',
		description: 'IMSI of device',
		value: 3,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'MSISDN',
		description: 'MSISDN of device',
		value: 4,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'Device Name',
		description: 'Human-readable name of the device ',
		value: 10,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'Digital Input State',
		description: 'The current state of a digital input.',
		value: 5500,
		operations: 'R',
		type: 'Boolean',
	},
	{
		name: 'Digital Input Counter',
		description: 'The cumulative value of active state detected.',
		value: 5501,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'Digital Input Polarity',
		description:
			'The polarity of the digital input as a Boolean (0 = Normal, 1= Reversed).',
		value: 5502,
		operations: 'R,W',
		type: 'Boolean',
	},
	{
		name: 'Digital Input Debounce',
		description: 'The debounce period in ms.',
		value: 5503,
		operations: 'R,W',
		type: 'Integer',
		unit: 'ms',
	},
	{
		name: 'Digital Input Edge Selection',
		description:
			'The edge selection as an integer (1 = Falling edge, 2 = Rising edge, 3 = Both Rising and Falling edge).',
		value: 5504,
		operations: 'R,W',
		type: 'Integer',
		range: [1, 3],
	},
	{
		name: 'Digital Input Counter Reset',
		description: 'Reset the Counter value.',
		value: 5505,
		operations: 'E',
		type: null,
	},
	{
		name: 'Current Time',
		description:
			'Unix Time. A signed integer representing the number of seconds since Jan 1st, 1970 in the UTC time zone.',
		value: 5506,
		operations: 'R,W',
		type: 'Time',
		unit: 's',
		range: [0, 1],
	},
	{
		name: 'Fractional Time',
		description: 'For shorter times of a fraction of a second (i.e. 0.23).',
		value: 5507,
		operations: 'R,W',
		type: 'Float',
		unit: 'seconds',
		range: [0, 1],
	},
	{
		name: 'Min X Value',
		description: 'The minimum measured value along the X axis.',
		value: 5508,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Max X Value',
		description: 'The maximum measured value along the X axis.',
		value: 5509,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Min Y Value',
		description: 'The minimum measured value along the Y axis.',
		value: 5510,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Max Y Value',
		description: 'The maximum measured value along the Y axis.',
		value: 5511,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Min Z Value',
		description: 'The minimum measured value along the Z axis.',
		value: 5512,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Max Z Value',
		description: 'The maximum measured value along the Z axis.',
		value: 5513,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Latitude',
		description:
			'The decimal notation of latitude, e.g. -43.5723 (World Geodetic System 1984).',
		value: 5514,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'Longitude',
		description:
			'The decimal notation of longitude, e.g. 153.21760 (World Geodetic System 1984).',
		value: 5515,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'Uncertainty',
		description: 'The accuracy of the position in meters.',
		value: 5516,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'Velocity',
		description:
			'The velocity of the device as defined in 3GPP 23.032 GAD specification. This set of values may not be available if the device is static.',
		value: 5517,
		operations: 'R',
		type: 'Opaque',
	},
	{
		name: 'Timestamp',
		description:
			'The timestamp of when the location measurement was performed.',
		value: 5518,
		operations: 'R',
		type: 'Time',
	},
	{
		name: 'Min Limit',
		description: 'The minimum value that can be measured by the sensor.',
		value: 5519,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Max Limit',
		description: 'The maximum value that can be measured by the sensor.',
		value: 5520,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Delay Duration',
		description: 'The duration of the time delay.',
		value: 5521,
		operations: 'R,W',
		type: 'Float',
		unit: 's',
	},
	{
		name: 'Clip',
		description:
			'Audio Clip that is playable (i.e. short audio recording indicating the floor in an elevator).',
		value: 5522,
		operations: 'R,W',
		type: 'Opaque',
	},
	{
		name: 'Trigger',
		description: 'Trigger initiating actuation.',
		value: 5523,
		operations: 'E',
		type: null,
	},
	{
		name: 'Duration',
		description: 'The duration of the sound once trigger.',
		value: 5524,
		operations: 'R,W',
		type: 'Float',
		unit: 's',
	},
	{
		name: 'Minimum Off-time',
		description: 'The off time when On/Off control remains on.',
		value: 5525,
		operations: 'R,W',
		type: 'Float',
		unit: 's',
	},
	{
		name: 'Mode',
		description: 'type of timer pattern used by the patterns.',
		value: 5526,
		operations: 'R,W',
		type: 'Integer',
		range: [0, 4],
	},
	{
		name: 'Text',
		description: 'A string of text.',
		value: 5527,
		operations: 'R,W',
		type: 'String',
	},
	{
		name: 'X Coordinate',
		description: 'X Coordinate.',
		value: 5528,
		operations: 'R,W',
		type: 'Integer',
	},
	{
		name: 'Y Coordinate',
		description: 'Y Coordinate.',
		value: 5529,
		operations: 'R,W',
		type: 'Integer',
	},
	{
		name: 'Clear Display',
		description: 'Command to clear the display.',
		value: 5530,
		operations: 'E',
		type: null,
	},
	{
		name: 'Contrast',
		description:
			'Proportional control, integer value between 0 and 100 as a percentage.',
		value: 5531,
		operations: 'R,W',
		type: 'Float',
		unit: '%',
		range: [0, 100],
	},
	{
		name: 'Increase Input State',
		description: 'Indicates an increase control action.',
		value: 5532,
		operations: 'R',
		type: 'Boolean',
	},
	{
		name: 'Decrease Input State',
		description: 'Indicates an decrease control action.',
		value: 5533,
		operations: 'R',
		type: 'Boolean',
	},
	{
		name: 'Counter',
		description:
			'Counts the number of times the timer output transitions from 0 to 1.',
		value: 5534,
		operations: 'R,W',
		type: 'Integer',
	},
	{
		name: 'Current Position',
		description:
			'Current position or desired position of a positioner actuator.',
		value: 5536,
		operations: 'R,W',
		type: 'Float',
		unit: '%',
		range: [0, 100],
	},
	{
		name: 'Transition Time',
		description: 'The time expected to move the actuator to the new position.',
		value: 5537,
		operations: 'R,W',
		type: 'Float',
		unit: 's',
	},
	{
		name: 'Remaining Time',
		description: 'The time remaining in an operation.',
		value: 5538,
		operations: 'R',
		type: 'Float',
		unit: 's',
	},
	{
		name: 'Up Counter',
		description:
			'Counts the number of times the increase control has been operated. Writing a 0 resets the counter.',
		value: 5541,
		operations: 'R,W',
		type: 'Integer',
	},
	{
		name: 'Down Counter',
		description:
			'Counts the times the decrease control has been operated. Writing a 0 resets the counter',
		value: 5542,
		operations: 'R,W',
		type: 'Integer',
	},
	{
		name: 'Digital State',
		description: 'The current state of the timer output.',
		value: 5543,
		operations: 'R',
		type: 'Boolean',
	},
	{
		name: 'Cumulative Time',
		description:
			'The total time in seconds that the timer input is true. Writing a 0 resets the time.',
		value: 5544,
		operations: 'R,W',
		type: 'Float',
	},
	{
		name: 'Max X Coordinate',
		description:
			'The highest X coordinate the display supports before wrapping to the next line.',
		value: 5545,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'Max Y Coordinate',
		description:
			'The highest Y coordinate the display supports before wrapping to the next line.',
		value: 5546,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'Multi-state Input',
		description: 'The current state of a Multi-state input or selector.',
		value: 5547,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'Level',
		description:
			'Input/output level control, float value between 0 and 100 as a percentage.',
		value: 5548,
		operations: 'R,W',
		type: 'Float',
		unit: '%',
		range: [0, 100],
	},
	{
		name: 'Digital Output State',
		description: 'The current state of a digital output,  0=OFF, 1=ON..',
		value: 5550,
		operations: 'R,W',
		type: 'Boolean',
	},
	{
		name: 'Digital Output Polarity',
		description:
			'The polarity of a digital ouput as a Boolean (0 = Normal, 1= Reversed).',
		value: 5551,
		operations: 'R,W',
		type: 'Boolean',
	},
	{
		name: 'Analog Input State',
		description: 'The current value of the analog input.',
		value: 5600,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Min Measured Value',
		description: 'The minimum value that can be measured by the sensor',
		value: 5601,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Max Measured Value',
		description: 'The maximum value that can be measured by the sensor.',
		value: 5602,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Min Range Value',
		description: 'The minimum value that can be measured by the sensor.',
		value: 5603,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Max Range Value',
		description: 'The maximum value that can be measured by the sensor.',
		value: 5604,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Reset Min and Max Measured Values',
		description: 'Reset the Min and Max Measured Values to Current Value.',
		value: 5605,
		operations: 'E',
		type: null,
	},
	{
		name: 'Analog Output Current Value',
		description: 'The current state of the analogue output.',
		value: 5650,
		operations: 'R,W',
		type: 'Float',
	},
	{
		name: 'Sensor Value',
		description: 'Last or Current Measured Value from the Sensor.',
		value: 5700,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Sensor Units',
		description:
			'If present, the type of sensor defined as the UCUM Unit Definition e.g. “Cel” for Temperature in Celcius.',
		value: 5701,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'X Value',
		description: 'The measured value along the X axis.',
		value: 5702,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Y Value',
		description: 'The measured value along the Y axis.',
		value: 5703,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Z Value',
		description: 'The measured value along the Z axis.',
		value: 5704,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Compass Direction',
		description: 'The compass direction.',
		value: 5705,
		operations: 'R',
		type: 'Float',
		unit: 'deg',
		range: [0, 360],
	},
	{
		name: 'Colour',
		description: 'A string representing a value in some color space',
		value: 5706,
		operations: 'R,W',
		type: 'String',
	},
	{
		name: 'Application type',
		description:
			'The application type of the sensor or actuator as a string, for instance, “Air Pressure”.',
		value: 5750,
		operations: 'R,W',
		type: 'String',
	},
	{
		name: 'Sensor type',
		description: 'The type of the sensor (for instance PIR type).',
		value: 5751,
		operations: 'R',
		type: 'String',
	},
	{
		name: 'Instantaneous active power',
		description: 'The current active power.',
		value: 5800,
		operations: 'R',
		type: 'Float',
		unit: 'W',
	},
	{
		name: 'Min Measured active power',
		description:
			'The minimum active power measured by the sensor since it is ON.',
		value: 5801,
		operations: 'R',
		type: 'Float',
		unit: 'W',
	},
	{
		name: 'Max Measured active power',
		description:
			'The maximum active power measured by the sensor since it is ON.',
		value: 5802,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Min Range active power',
		description: 'The minimum active power that can be measured by the sensor.',
		value: 5803,
		operations: 'R',
		type: 'Float',
		unit: 'W',
	},
	{
		name: 'Max Range active power',
		description: 'The maximum active power that can be measured by the sensor.',
		value: 5804,
		operations: 'R',
		type: 'Float',
		unit: 'W',
	},
	{
		name: 'Cumulative active power',
		description: 'The total power in Wh that the light has used.',
		value: 5805,
		operations: 'R',
		type: 'Float',
		unit: 'Wh',
	},
	{
		name: 'Active Power Calibration',
		description:
			'Request an active power calibration by writing the value of a calibrated load.',
		value: 5806,
		operations: 'W',
		type: 'Float',
		unit: 'W',
	},
	{
		name: 'Instantaneous reactive power',
		description: 'The current reactive power.',
		value: 5810,
		operations: 'R',
		type: 'Float',
		unit: 'VAR',
	},
	{
		name: 'Min Measured reactive power',
		description:
			'The minimum reactive power measured by the sensor since it is ON.',
		value: 5811,
		operations: 'R',
		type: 'Float',
		unit: 'VAR',
	},
	{
		name: 'Max Measured reactive power',
		description:
			'The maximum reactive power measured by the sensor since it is ON.',
		value: 5812,
		operations: 'R',
		type: 'Float',
		unit: 'VAR',
	},
	{
		name: 'Min Range reactive power',
		description: 'The minimum active power that can be measured by the sensor.',
		value: 5813,
		operations: 'R',
		type: 'Float',
		unit: 'VAR',
	},
	{
		name: 'Max Range reactive power',
		description: 'The minimum active power that can be measured by the sensor.',
		value: 5814,
		operations: 'R',
		type: 'Float',
		unit: 'VAR',
	},
	{
		name: 'Cumulative reactive power',
		description:
			'The cumulative reactive power since the last cumulative energy reset or device start.',
		value: 5815,
		operations: 'R',
		type: 'Float',
		unit: 'VARh',
	},
	{
		name: 'Reactive Power Calibration',
		description:
			'Request a reactive power calibration by writing the value of a calibrated load.',
		value: 5816,
		operations: 'W',
		type: 'Float',
		unit: 'VAR',
	},
	{
		name: 'Power Factor',
		description: 'The power factor of the actuactor.',
		value: 5820,
		operations: 'R',
		type: 'Float',
	},
	{
		name: 'Current Calibration',
		description: 'Read or Write the current calibration coefficient.',
		value: 5821,
		operations: 'R,W',
		type: 'Float',
	},
	{
		name: 'Reset Cumulative energy',
		description: 'Reset both cumulative active/reactive power.',
		value: 5822,
		operations: 'E',
		type: null,
	},
	{
		name: 'Event Identifier',
		description: 'The event identifier as a string.',
		value: 5823,
		operations: 'R,W',
		type: 'String',
	},
	{
		name: 'Start Time',
		description: 'Time when the load control event will start started.',
		value: 5824,
		operations: 'R,W',
		type: 'Float',
	},
	{
		name: 'Duration In Min',
		description: 'The duration of the load control event.',
		value: 5825,
		operations: 'R,W',
		type: 'Float',
		unit: 'min',
	},
	{
		name: 'Criticality Level',
		description:
			'The criticality of the event.  The device receiving the event will react in an appropriate fashion for the device.',
		value: 5826,
		operations: 'R,W',
		type: 'Integer',
	},
	{
		name: 'Avg Load Adj Pct',
		description:
			"Defines the maximum energy usage of the receivng device, as a percentage of the device's normal maximum energy usage.",
		value: 5827,
		operations: 'R,W',
		type: 'String',
		unit: '%',
		range: [0, 100],
	},
	{
		name: 'Duty Cycle',
		description:
			'Defines the duty cycle for the load control event, i.e, what percentage of time the receiving device is allowed to be on.',
		value: 5828,
		operations: 'R,W',
		type: 'Integer',
		unit: '%',
		range: [0, 100],
	},
	{
		name: 'On/Off',
		description:
			'This resource represents a power source, which can be controlled, the setting of which is a Boolean value (1,0) where 1 is on and 0 is off',
		value: 5850,
		operations: 'R,W',
		type: 'Boolean',
	},
	{
		name: 'Dimmer',
		description:
			'This resource represents dimmer setting, which has an Integer value between 0 and 100 as a percentage.',
		value: 5851,
		operations: 'R,W',
		type: 'Integer',
		Units: '%',
		range: [0, 100],
	},
	{
		name: 'On Time',
		description:
			'The time in seconds that the device has been on. Writing a value of 0 resets the counter.',
		value: 5852,
		operations: 'R,W',
		type: 'Integer',
		Units: 's',
	},
	{
		name: 'Multi-state Output',
		description:
			'A string describing a state for multiple level output such as Pilot Wire.',
		value: 5853,
		operations: 'R,W',
		type: 'String',
	},
	{
		name: 'Off Time',
		description:
			'The time in seconds since the Off command was sent. Writing a value of 0 resets the counter.',
		value: 5854,
		operations: 'R,W',
		type: 'Integer',
		Units: 's',
	},
	{
		name: 'Set Point Value',
		description: 'The setpoint value.',
		value: 5900,
		operations: 'R,W',
		type: 'Float',
	},
	{
		name: 'Busy to Clear delay',
		description: 'Delay from the detection state to the clear state in ms.',
		value: 5903,
		operations: 'R,W',
		type: 'Integer',
	},
	{
		name: 'Clear to Busy delay',
		description: 'Delay from the clear state to the busy state in ms.',
		value: 5904,
		operations: 'R,W',
		type: 'Integer',
	},
	{
		name: 'Bitmap Input',
		description:
			"Integer in which each of the bits are associated with specific digital input value. Represented as a binary signed integer in network byte order, and in two's complement representation. Using values in range 0-127 is recommended to avoid ambiguities with byte order and negative values.",
		value: 5910,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'Bitmap Input Reset',
		description: 'Reset the Bitmap Input value.',
		value: 5911,
		operations: 'E',
		type: null,
	},
	{
		name: 'Element Description',
		description:
			'The description of each bit as a string. First instance describes the least significant bit, second instance the second least significant bit.',
		value: 5912,
		operations: 'R,W',
		type: 'String',
	},
	{
		name: 'UUID',
		description: 'A universally unique identifier to identify information',
		value: 5913,
		operations: 'R,W',
		type: 'String',
	},
	{
		name: 'plmnID',
		description: 'PLMN - mcc/mnc',
		value: 6030,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'BandIndicator',
		description: 'Band indicator',
		value: 6031,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'dlEarfcn',
		description: 'EARFCN - frequency',
		value: 6032,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'CellID',
		description: 'Cell Identity',
		value: 6033,
		operations: 'R',
		type: 'Integer',
	},

	{
		name: 'pci',
		description: 'PCI (0..504)',
		value: 6034,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'rsrp',
		description: 'RSRP Value in dBm (-180..-30)',
		value: 6035,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'rsrq',
		description: 'RSRQ Value in dB (-30..10)',
		value: 6036,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'sysFrameNumber',
		description: 'System Frame Number',
		value: 6037,
		operations: 'R',
		type: 'Integer',
	},
	{
		name: 'subFrameNumber',
		description: 'Sub Frame Number',
		value: 6038,
		operations: 'R',
		type: 'Integer',
	},
];
module.exports = omaResources;
