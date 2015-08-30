'use strict';

var GuessInput = function ( MASTER ) {
	var $submit = $('[data="hangman[guess]"]'),
		$input = $('input[name="hangman[guess]"]');

	$submit.click(function(e){
		e.preventDefault();
		let guess = $input.val();
		$input.val('');
		MASTER.handleGuessSubmit( guess );
	});
}

module.exports = GuessInput;