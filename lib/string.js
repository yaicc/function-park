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

		/**
		 * Is an email string or not
		 * @param String:str string input 
		 * @return
		 */
		is_email: function() {
			return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.s);
		},

		/**
		 * Is an ip string or not
		 * @param String:str string input 
		 * @return
		 */
		is_ip: function() {
			return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(this.s);
		},

		/**
		* Strip HTML tags from a string
		* @param String:str string input 
		* @return
		*/
		strip_tags: function() {
			var s = this.s, args = arguments.length > 0 ? arguments : [
				'!DOCTYPE','a','abbr','acronym','address','applet','area','article','aside','audio','b','base',
				'basefont','bdi','bdo','big','blockquote','body','br','button','canvas','caption','center',
				'cite','code','col','colgroup','command','datalist','dd','del','details','dir','div','dfn',
				'dialog','dl','dt','em','embed','fieldset','figcaption','figure','font','footer','form','frame',
				'frameset','h1','h2','h3','h4','h5','h6','head','header','hr','html','i','iframe','img','input',
				'ins','isindex','kbd','keygen','label','legend','li','link','map','mark','menu','menuitem','meta',
				'meter','nav','noframes','noscript','object','ol','optgroup','option','output','p','param','pre',
				'progress','q','rp','rt','ruby','s','samp','script','section','select','small','source','span',
				'strike','strong','style','sub','summary','sup','table','tbody','td','textarea','tfoot','th','thead',
				'time','title','tr','track','tt','u','ul','var','video','wbr','xmp'
			];

			if (arguments.length === 1 && Object.prototype.toString.call(arguments[0]) === '[object Array]') {
				args = args[0];
			} else {
				for (var x in arguments) args[x] = arguments[x].toString();
			}
			
			for (var i in args) {
				s = s.replace(RegExp('<\/?' + args[i] + '[^<>]*?\/?>', 'gi'), '');
			}
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

	function Export(str) {
		return new S(str);
	}

	Export.extendToString = extendToString;

	if (typeof module !== 'undefined'  && typeof module.exports !== 'undefined') {
		module.exports = Export;
	} else {
		window.S = Export;
	}

}).call(this);