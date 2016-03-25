var S = require("../lib/string.js");

var str = " {1}   asdf   \r\n     {2} ";

console.log(S(str).trim());