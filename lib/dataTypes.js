//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";


//==============================
// isArray
//==============================
if (!Array.isArray) {
	Array.isArray = function (obj) {
		return Boolean(obj && toString.call(Object(obj)) === '[object Array]');
	}
}

//==============================
// isDefined
//==============================
function isDefined (obj) {
	return obj !== void 0;
};

//==============================
// isFunction
//==============================
function isFunction (obj) {
	return toString.call(obj) == '[object Function]';
};

//==============================
// isNumber
//==============================
function isNumber (obj) {
	return toString.call(obj) == '[object Number]';
};

//==============================
// isObject
//==============================
function isObject (obj) {
	if (isUndefined(obj)) return false;
	return (obj === Object(obj)) && !Array.isArray(obj);
}

//==============================
// isString
//==============================
function isString (obj) {
	return Boolean(typeof obj == 'string');
};

//==============================
// isUndefined
//==============================
function isUndefined (obj) {
	return obj === void 0;
};

//===========================
// exports
//===========================

exports = module.exports = {
	isArray			: Array.isArray
	, isDefined		: isDefined
	, isFunction	: isFunction
	, isNumber		: isNumber
	, isObject		: isObject
	, isString		: isString
	, isUndefined	: isUndefined
};


