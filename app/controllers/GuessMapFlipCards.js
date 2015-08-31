'use strict';

var GuessMapFlipCards = function () {
	var $flipCardRow = $('.flipCard-row'),
		_template = $('#flipCard').html().trim(),
		_guessMap = [];

	this.render = function( newGuessMap ){
		let row = [];
		newGuessMap.forEach(function(guess, index){
			let flipCard;
			if ( _guessMap[ index ] !== newGuessMap[ index ]){
				flipCard = formatFlipcard( guess, index );
				row.push( flipCard );
			} else {
				flipCard = $flipCardRow.children()[index];
			} 
		})
		$flipCardRow.html( row );
	};
	function formatFlipcard( guess, index ){
		let $flip = $($.parseHTML( _template )),
			text = ( guess === null ) ? '' : guess;	

		$flip.children().children('.back').text( text );

		if ( guess ){
			setTimeout(function(){
				$flip.children('.flipCard').addClass('flipped')
			}, 250);
		}
		return $flip;
	};
}

module.exports = GuessMapFlipCards;