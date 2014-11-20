//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	kubis = require('../index.js');
var numbers = kubis('numbers');

var ensureInteger = numbers.ensureInteger;

var values = [123, 123.456, '-45', 'text', NaN];
var value;
var i;
var numValues = values.length;

for (i = 0; i < numValues; i += 1) {
	value = values[i];
	console.log('value:', value, 'typeof:', typeof value, '-->', ensureInteger(value));
}
