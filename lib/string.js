/**
 * Common string functions for Js/NodeJs
 * @author git@github.com:nemofun/function-park.git
 * @version 1.0.0
 */

(function(){
	"use strict";

	var crypto = require('crypto');

	var S = function(str) {
		if (Object.prototype.toString.call(str) === "[object String]") {
			this.string = str;
		} else if (s !== null && s !== undefined) {
			this.string = str.toString();
		} else {
			this.string = "";
		}
	}

	S.prototype = {

		/**
		 * Used for trimming whitespace
		 * @param String:str string input 
		 * @return
		 */
		trim: function() {
			var s = this.string.replace(/^\s+/, "").replace(/\s+$/, "");
			return new this.constructor(s);
		},

		/**
		 * Used for trimming whitespace at left
		 * @param String:str string input 
		 * @return
		 */
		ltrim: function() {
			var s = this.string.replace(/^\s+/, "");
			return new this.constructor(s);
		},

		/**
		 * Used for trimming whitespace at right
		 * @param String:str string input 
		 * @return
		 */
		rtrim: function() {
			var s = this.string.replace(/\s+$/, "");
			return new this.constructor(s);
		},

		/**
		 * Make a string's first character uppercase
		 * @param String:str string input 
		 * @return
		 */
		ucfirst: function() {
			var s = this.string.replace(/(\w)/,function(v){return v.toUpperCase();});
			return new this.constructor(s);
		},

		/**
		 * Make a string's first character lowercase
		 * @param String:str string input 
		 * @return
		 */
		lcfirst: function() {
			var s = this.string.replace(/(\w)/,function(v){return v.toLowerCase();});
			return new this.constructor(s);
		},

		/**
		 * Calculate the md5 hash of a string
		 * @param String:str string input 
		 * @return
		 */
		md5: function(format) {
			var s = crypto.createHash('md5').update(this.string).digest(format || 'hex');
			return new this.constructor(s);
		},

		/**
		 * Calculate the sha1 hash of a string
		 * @param String:str string input 
		 * @return
		 */
		sha1: function(format) {
			var s = crypto.createHash('sha1').update(this.string).digest(format || 'hex');
			return new this.constructor(s);
		},

		/**
		 * String is chinese or not
		 * @param String:str string input 
		 * @return Bool
		 */
		is_cn: function(str, format) {
			return "";
		},

	};

	/*************************************
	/* Exports
	/*************************************/

	function func_export(str) {
		return new S(str);
	}

	if (typeof module !== 'undefined'  && typeof module.exports !== 'undefined') {
		module.exports = func_export;
	} else {
		window.S = func_export;
	}

}).call(this);