/**
 * Common string functions for Js/NodeJs
 * @author git@github.com:nemofun/function-park.git
 * @version 1.0.0
 */

(function(){
	"use strict";

	/**
	 * Used for trimming whitespace
	 * @param String:str string input 
	 * @return
	 */
	exports.trim = function(str) {
		return !!str ? str.replace(/^\s+/, "").replace( /\s+$/, "") : "";
	}

}).call(this);