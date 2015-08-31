'use strict';

var validation = function( input ){
	// regExp test returns true for only alphabetical inputs
	// disallows any punctuation, or nums
	// useful for both words + single char guess inputs
	return /^[a-zA-Z]+$/.test( input );
}

module.exports = validation;