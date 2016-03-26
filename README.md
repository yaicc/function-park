function-park
=====

function-park is an common functions package for Nodejs。

## Installation

	npm install --save function-park

## Usage

### string.js

	var S = require('function-park').string;
	
##### Function list

| Name        | Description     |
| ----------- |:--------------- |
| trim        | Used for trimming whitespace |
| ltrim       | Used for trimming whitespace at left |
| rtrim       | Used for trimming whitespace at right |
| left        | Return part of a string from left |
| right       | Return part of a string from right |
| ucfirst     | Uppercase the first character of a string |
| lcfirst     | Lowercase the first character of a string |
| md5         | Calculate the md5 hash of a string |
| sha1        | Calculate the sha1 hash of a string |
| isEmail     | Is an email string or not |
| isIp        | Is an ip string or not |

##### Example

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

