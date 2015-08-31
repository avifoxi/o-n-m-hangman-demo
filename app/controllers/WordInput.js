'use strict';

var validate = require('../utils/validations.js');

var WordInput = function( MASTER ) {
	var $jumbotron = $('.jumbotron').data('hidden', false),
		$submit =  $('[data="hangman[word-input]"] a'),
		$input = $('input[name="hangman[word-input]"]');

	$submit.click(function(e){
		e.preventDefault();

		let word = $input.val(), 
			valid = validate( word );
		$input.val('');

		if ( !valid ){
			MASTER.handleUserError( 'invalid word', this );
		} else {
			MASTER.handleWordSubmit( word );
		}
	});

	this.toggle = function(){
		let flip = !$jumbotron.data('hidden');
		$jumbotron.data('hidden', flip);
		$('.jumbotron').toggle('height');
	}
}

module.exports = WordInput;


		