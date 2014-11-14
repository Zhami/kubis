//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	kubis = require('../index.js');
var dataTypes = kubis('dataTypes');

var isObject = dataTypes.isObject;
var obj = {};

console.log('obj is an object:', isObject(obj));

var isArray = dataTypes.isArray;
var array = [];
console.log('array is an object:', isObject(array));
console.log('array is an array:', isArray(array));

var isNumber = dataTypes.isNumber;
console.log('obj is a number:', isNumber(obj));

var number = 123;
console.log('number is a number:', isNumber(number));
console.log('number is a object:', isObject(number));
