'use strict';

var GuessMapFlipCards = function () {
	var $mountNode = $('[data="hangman[guessMap]"]'),
		$flipCardRow = $('.flipCard-row'),
		_template = $('#flipCard').html().trim(),
		_guessMap = [];

	this.render = function( newGuessMap ){
		_guessMap;
		_template;
		$flipCardRow;
		let row = [];
		newGuessMap.forEach(function(guess, index){

			if ( _guessMap[ index ] !== newGuessMap[ index ]){
				let flipCard = formatFlipcard(guess);
				row.push( flipCard );
			}
		})
		$flipCardRow.append( row );
		debugger;
	};
	function formatFlipcard( guess ){
		let flip = $.parseHTML(_template),
			text = ( guess === null ) ? '_' : guess; 
		$(flip).children().first().html(text);
		return $(flip);
	};
}

module.exports = GuessMapFlipCards;