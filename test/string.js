var S = require('../index.js').string;

var str = "	 kkasjdif\s\t 	";

console.log("String will be test: " + str);
console.log("\r\nfunction trim: S(str).trim()\r\n==================== \r\n" + S(str).trim());
console.log("\r\nfunction trim: S(str).ltrim()\r\n==================== \r\n" + S(str).ltrim());
console.log("\r\nfunction trim: S(str).rtrim()\r\n==================== \r\n" + S(str).rtrim());
console.log("\r\nfunction trim: S(str).ucfirst()\r\n==================== \r\n" + S(str).ucfirst());
console.log("\r\nfunction trim: S(str).lcfirst()\r\n==================== \r\n" + S(str).lcfirst());

S.extendToString();

console.log("\r\nfunction trim: S(str).ucfirst().ltrim().rtrim()\r\n==================== \r\n" + S(str).ucfirst().ltrim().rtrim());