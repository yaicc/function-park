var S = require('../index.js').string;

var str = "	k kasjdif sd ";

console.log("String will be test: " + str);
console.log("\r\nfunction trim: S(str).trim()\r\n==================== \r\n" + S(str).trim());
console.log("\r\nfunction ltrim: S(str).ltrim()\r\n==================== \r\n" + S(str).ltrim());
console.log("\r\nfunction rtrim: S(str).rtrim()\r\n==================== \r\n" + S(str).rtrim());
console.log("\r\nfunction ucfirst: S(str).ucfirst()\r\n==================== \r\n" + S(str).ucfirst());
console.log("\r\nfunction lcfirst: S(str).lcfirst()\r\n==================== \r\n" + S(str).lcfirst());
console.log("\r\nfunction left: S(str).left(5)\r\n==================== \r\n" + S(str).left(5));
console.log("\r\nfunction right: S(str).right(5)\r\n==================== \r\n" + S(str).right(5));

S.extendToString();

console.log("\r\nfunction with link: S(str).ucfirst().ltrim().rtrim()\r\n==================== \r\n" + S(str).ucfirst().ltrim().rtrim());