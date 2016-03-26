function-park
=====

function-park是一个js/nodejs常用方法包。

## Installation

	npm install --save function-park

## Usage

### string.js

	var S = require('function-park').string;

#### Example

```javascript
var S = require('function-park').string;
var str = "My name is Nemo!";
console.log(S(str).lcfirst()); //print "my name is Nemo!"
```

Well, it's also can call these methods directly on native String. Just like this:

```javascript
var S = require('function-park').string;
S.extendToString();
console.log("My name is Nemo!".lcfirst().ucfirst()); //print "My name is Nemo!"
```

