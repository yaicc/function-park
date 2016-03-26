/**
 * Common string functions for Js/NodeJs
 * @author git@github.com:nemofun/function-park.git
 * @version 1.0.0
 */

(function(){
	"use strict";

	var crypto = require('crypto');

	var S = function(s) {
		if (s !== null && s !== undefined) {
			if (typeof s === 'string') {
				this.s = s;
			} else {
				this.s = s.toString();
			}
		} else {
			this.s = s;
		}

		var object = this;

		if (s !== null && s !== undefined) {
			if (object.__defineGetter__) {
				object.__defineGetter__('length', function(){
					return object.s.length;
				});
			} else {
				this.length = s.length;
			}
		} else {
			this.length = -1;
		}
	}

	S.prototype = {

		/**
		 * Used for trimming whitespace
		 * @param String:str string input 
		 * @return
		 */
		trim: function() {
			return this.s.replace(/^\s+/, "").replace(/\s+$/, "");
		},

		/**
		 * Used for trimming whitespace at left
		 * @param String:str string input 
		 * @return
		 */
		ltrim: function() {
			return this.s.replace(/^\s+/, "");
		},

		/**
		 * Used for trimming whitespace at right
		 * @param String:str string input 
		 * @return
		 */
		rtrim: function() {
			return this.s.replace(/\s+$/, "");
		},

		/**
		 * Return part of a string from left
		 * @param String:str string input 
		 * @return
		 */
		left: function(len) {
			if(isNaN(len) || len === null || len === undefined) {
				len = this.length;
			} else {
				if(parseInt(len) < 0 || parseInt(len) > this.length) {
					len = this.s.length;
				}
			}
			return this.s.substr(0, len);
		},

		/**
		 * Return part of a string from right
		 * @param String:str string input 
		 * @return
		 */
		right: function(len) {
			if(isNaN(len) || len === null || len === undefined) {
				len = this.length;
			} else {
				if(parseInt(len) < 0 || parseInt(len) > this.length) {
					len = this.s.length;
				}
			}
			return this.s.substring(this.length - len, this.length);
		},

		/**
		 * Uppercase the first character of string
		 * @param String:str string input 
		 * @return
		 */
		ucfirst: function() {
			return this.s.replace(/(\w)/,function(v){return v.toUpperCase();});
		},

		/**
		 * Lowercase the first character of string
		 * @param String:str string input 
		 * @return
		 */
		lcfirst: function() {
			return this.s.replace(/(\w)/,function(v){return v.toLowerCase();});
		},

		/**
		 * Calculate the md5 hash of a string
		 * @param String:str string input 
		 * @return
		 */
		md5: function(format) {
			var s = crypto.createHash('md5').update(this.s).digest(format || 'hex');
			return s;
		},

		/**
		 * Calculate the sha1 hash of a string
		 * @param String:str string input 
		 * @return
		 */
		sha1: function(format) {
			var s = crypto.createHash('sha1').update(this.s).digest(format || 'hex');
			return s;
		},

	};

	var __sp = S.prototype;
	var __nsp = String.prototype;

	function extendToString() {
		for (var name in __sp) {
			(function(name){
				var func = __sp[name];
				if (!__nsp.hasOwnProperty(name)) {
					__nsp[name] = function() {
						__nsp.s = this;
						return func.apply(this, arguments);
					}
				}
			})(name);
		}
	}

	/*************************************
	/* Exports
	/*************************************/

	function func_export(str) {
		return new S(str);
	}

	func_export.extendToString = extendToString;

	if (typeof module !== 'undefined'  && typeof module.exports !== 'undefined') {
		module.exports = func_export;
	} else {
		window.S = func_export;
	}

}).call(this);