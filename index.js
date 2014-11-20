//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";


function getModule (name) {
	switch (name) {
	case 'dataTypes':
		return require('./lib/dataTypes.js');
		break;
	case 'ipAddress':
		return require('./lib/ipAddress.js');
		break;
	case 'jsonAide':
		return require('./lib/jsonAide.js');
		break;
	case 'numbers':
		return require('./lib/numbers.js');
		break;
	default:
		return new Error('no such module:' + name);
	}
}

//===========================
// exports
//===========================

exports = module.exports = getModule;
