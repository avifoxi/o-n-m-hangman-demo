'use strict';

var GuessMapFlipCards = function () {
	var $mountNode = $('[data="hangman[guessMap]"]'),
		$flipCardRow = $('.flipCard-row'),
		_template = $('#flipCard').html().trim(),
		_guessMap = [];

	this.render = function( newGuessMap ){
		let row = [];
		newGuessMap.forEach(function(guess, index){
			let flipCard;
			if ( _guessMap[ index ] !== newGuessMap[ index ]){
				flipCard = formatFlipcard(guess);
				row.push( flipCard );
			} else {
				flipCard = $flipCardRow.children()[index];
			} 
		})
		$flipCardRow.append( row );
	};
	function formatFlipcard( guess ){
		let flip = $.parseHTML(_template),
			text = ( guess === null ) ? '_' : guess; 
		$(flip).children().first().html(text);
		return $(flip);
	};
}

module.exports = GuessMapFlipCards;