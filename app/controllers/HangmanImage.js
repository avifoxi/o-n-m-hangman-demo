'use strict';

var HangmanImageController = function() {
	var $imageCovers = $('.image-covers');

	this.reset = function(){
		$imageCovers.css({
			opacity: 1
		});
	}

	this.handleWrong = function( wrongNum ){
		let reveal = $imageCovers[ wrongNum ];
		$( reveal ).animate({
			opacity: 0
		}, 600);
	};
}

module.exports = HangmanImageController;