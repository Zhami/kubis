//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var dataTypes		= require ('./dataTypes.js');

var isNumber		= dataTypes.isNumber;
var isString		= dataTypes.isString;

//==============================
// ensureInteger
//==============================
function ensureInteger (value) {
	var intValue;

	if (isNumber(value)) {
		if (parseInt(value.toString(), 10) === value) {
			return value;
		}
	}

	if (isString(value)) {
		intValue = parseInt(value, 10);
		if (intValue.toString() === value) {
			return intValue;
		}
	}
	
	return false;
};


//===========================
// exports
//===========================

exports = module.exports = {
	ensureInteger	: ensureInteger
};


