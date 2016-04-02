var S = require('../index.js').string;

var str = "	k kasjdif sd ";
var email = "chao507@vip.qq.com";
var ip = "255.255.255.0";
var html = '<!DOCTYPE html><html lang="en" class=" is-copy-enabled emoji-size-boost is-u2f-enabled"><head></head><body><h1>function-park</h1><br /></body></html>';

console.log("String will be test: " + str);
console.log("\r\nfunction trim: S(str).trim()\r\n==================== \r\n" + S(str).trim());
console.log("\r\nfunction ltrim: S(str).ltrim()\r\n==================== \r\n" + S(str).ltrim());
console.log("\r\nfunction rtrim: S(str).rtrim()\r\n==================== \r\n" + S(str).rtrim());
console.log("\r\nfunction ucfirst: S(str).ucfirst()\r\n==================== \r\n" + S(str).ucfirst());
console.log("\r\nfunction lcfirst: S(str).lcfirst()\r\n==================== \r\n" + S(str).lcfirst());
console.log("\r\nfunction left: S(str).left(5)\r\n==================== \r\n" + S(str).left(5));
console.log("\r\nfunction right: S(str).right(5)\r\n==================== \r\n" + S(str).right(5));
console.log("\r\nfunction is_email: S(str).is_email()\r\n==================== \r\n" + S(str).is_email());
console.log("\r\nEmail string will be test: " + email);
console.log("\r\nfunction is_email: S(email).is_email()\r\n==================== \r\n" + S(email).is_email());
console.log("\r\nIp string will be test: " + ip);
console.log("\r\nfunction is_ip: S(ip).is_ip()\r\n==================== \r\n" + S(ip).is_ip());
console.log("\r\nHtml string will be test: " + html);
console.log("\r\nfunction strip_tags: S(html).strip_tags()\r\n==================== \r\n" + S(html).strip_tags());
console.log("\r\nfunction strip_tags: S(html).strip_tags(['div', 'br'])\r\n==================== \r\n" + S(html).strip_tags(['div', 'br']));
console.log("\r\nfunction strip_tags: S(html).strip_tags('div', 'br')\r\n==================== \r\n" + S(html).strip_tags('div', 'br'));

S.extendToString();

console.log("\r\nfunction with link: S(str).ucfirst().ltrim().rtrim()\r\n==================== \r\n" + S(str).ucfirst().ltrim().rtrim());