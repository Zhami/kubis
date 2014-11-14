//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

//==============================
// parseJson
//==============================
function parseJson (json) {
	var obj;

	try {
		obj = JSON.parse(json)
	} catch (e) {
		return e;
	}
	return obj;
};


//===========================
// exports
//===========================

exports = module.exports = {
	parseJson		: parseJson
};
