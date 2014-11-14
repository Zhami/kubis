//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	kubis = require('../index.js');
var jsonAide = kubis('jsonAide');

var parseJson = jsonAide.parseJson;

var badJSON = '{"attr1": true, "attr2": [],}';	// note the trailing comma

console.log('badJSON:', badJSON);

var res = parseJson(badJSON);

console.log('result of parsing badJSON is:', res);