'use strict';

const OUTCOMES = ['lose', 'win'];

var Hangman = function( word ) {
	
	// INTERNAL STATE
	
	var _chars = word.split(''),
		_guessMap = _chars.map(function(){
			return null;
		}),
		_turnsLeft = 8,
		_wrongs = [],
		_gameOverStatus = undefined;

	// PUBLIC METHODS
	
	this.guess = function( char ){
		let correct = false,
			i = 0,
			length = _chars.length,
			result = undefined;

		for ( i; i < length; i++ ){
			if ( _chars[i] === char ){
				correct = true;
				_guessMap[i] = char;
			}
		}
		if ( !correct ){
			_wrongs.push( char );
		}
		_turnsLeft--;
		// logState.apply(this);
		result = isGameOver();
		return result ? result : null;
	};
	
	this.getState = function(){
		return {
			wrongs: _wrongs,
			turnsLeft: _turnsLeft,
			guessMap: _guessMap
		}
	};

	// PRIVATE METHODS

	function isGameOver(){
		let openSpaces = _guessMap.filter( function( guess ){
				return guess === null;
			}).length;

		if ( openSpaces === 0 ){ // user has filled all open spaces and guessed the word
			return OUTCOMES[1]; // win - HOORAY!
		} else if ( _turnsLeft === 0){
			return OUTCOMES[0]; // lose... sorry!
		} else {
			return false;
		}
	};
	function logState(){
		let state = this.getState(),
			keys = Object.getOwnPropertyNames( state );

		keys.forEach(function(k){
			console.log(k);
			console.log( state[ k ] );
		});
	}
}

module.exports = Hangman;