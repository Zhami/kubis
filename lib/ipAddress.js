//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";


//==============================
// ipVersion
//==============================
function ipVersion (ipAddr) {

	if (ipAddr.indexOf(':') >= 0) {
		return 6
	}
	
	return 4;
};


//===========================
// exports
//===========================

exports = module.exports = {
	ipVersion	: ipVersion
};


