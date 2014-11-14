# kubis

A set of support modules to help you attend to your application.

## Example

```js
var	kubis = require('kubis');
var dataTypes = kubis('dataTypes');

var isObject = dataTypes.isObject;
var obj = {};
console.log('obj is an object:', isObject(obj));
```

```
var	kubis = require('../index.js');
var jsonAide = kubis('jsonAide');
var parseJson = jsonAide.parseJson;

var badJSON = '{"attr1": true, "attr2": [],}';	// note the trailing comma
var res = parseJson(badJSON);
```

## Installation

```
npm install kubis
```


## Release History
  * 2014-11-14			v0.1.0			Initial release.

