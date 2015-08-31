'use strict';

var validate = require('../utils/validations.js');

var GuessInput = function ( MASTER ) {
	var $submit = $('[data="hangman[guess]"]'),
		$input = $('input[name="hangman[guess]"]'),
		_oldGuesses = [];

	$submit.click(function(e){
		e.preventDefault();

		let error = null,
			guess = $input.val(),
			valid = validate( guess );

		$input.val('');

		if ( _oldGuesses.indexOf( guess ) !== -1 ){
			error = 'already guessed';
		} else if ( !valid ){
			error = 'not a letter';
		}
		_oldGuesses.push( guess );

		if ( error ){
			MASTER.handleUserError( error );
		} else {
			MASTER.handleGuessSubmit( guess );
		}
	});
	this.clearGuesses = function(){
		_oldGuesses = [];
	}
}

module.exports = GuessInput;