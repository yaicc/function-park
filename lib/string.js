/**
 * Common string functions for Js/NodeJs
 * @author git@github.com:nemofun/function-park.git
 * @version 1.0.0
 */

(function(){
	"use strict";

	var crypto = require('crypto');

	/**
	 * Used for trimming whitespace
	 * @param String:str string input 
	 * @return
	 */
	exports.trim = function(str) {
		return is_string(str) ? str.replace(/^\s+/, "").replace(/\s+$/, "") : "";
	}

	/**
	 * Used for trimming whitespace at left
	 * @param String:str string input 
	 * @return
	 */
	exports.ltrim = function(str) {
		return is_string(str) ? str.replace(/^\s+/, "") : "";
	}

	/**
	 * Used for trimming whitespace at right
	 * @param String:str string input 
	 * @return
	 */
	exports.rtrim = function(str) {
		return is_string(str) ? str.replace(/\s+$/, "") : "";
	}

	/**
	 * Make a string's first character uppercase
	 * @param String:str string input 
	 * @return
	 */
	exports.ucfirst = function(str) {
		return is_string(str) ? str.replace(/(\w)/,function(v){return v.toUpperCase();}) : "";
	}

	/**
	 * Make a string's first character lowercase
	 * @param String:str string input 
	 * @return
	 */
	exports.lcfirst = function(str) {
		return is_string(str) ? str.replace(/(\w)/,function(v){return v.toLowerCase();}) : "";
	}

	/**
	 * Calculate the md5 hash of a string
	 * @param String:str string input 
	 * @return
	 */
	exports.md5 = function(str, format) {
		return is_string(str) ? crypto.createHash('md5').update(str).digest(format || 'hex') : "";
	}

	/**
	 * Calculate the sha1 hash of a string
	 * @param String:str string input 
	 * @return
	 */
	exports.sha1 = function(str, format) {
		return is_string(str) ? crypto.createHash('sha1').update(str).digest(format || 'hex') : "";
	}

	/**
	 * Return a formatted string
	 * @param String:str string input
	 * @param Array:params
	 * @return
	 */
	exports.format = function(str, params) {
		var params_type = Object.prototype.toString.call(params);
		if (params_type !== "[object Array]" && params_type !== "[object Object]") {
			throw new Error("argument at 2 must be an array or an object");
		}
		if (params_type === "[object Array]") {
			return is_string(str) ? str.replace(/{(\d+)}/gm, function(match, name){
				if (~~name in params) {
					return params[~~name];
				} else {
					return "{" + name + "}";
				}
			}) : "";
		}
		if (params_type === "[object Object]") {
			return is_string(str) ? str.replace(/{([^{}]+)}/gm, function(match, name){
				if (name in params) {
					return params[name];
				} else {
					return "{" + name + "}";
				}
			}) : "";
		}
	}

	function is_string(str) {
		return !!str;
	}

}).call(this);