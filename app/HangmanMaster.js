'use strict';

import Hangman from './models/Hangman.js';

import Scoreboard from './controllers/Scoreboard.js';
import WordInput from './controllers/WordInput.js';
import GuessMapFlipCards from './controllers/GuessMapFlipCards.js';

var MASTER = function () {
	// Models
	var _hangmanModel = undefined,
		_validator = undefined,

	// Controllers
		_Scoreboard = {},
		_WordInput = {},
		_GuessMapFlips = {},

	// Internal States
		_what = '?';

	// initialize controllers, and cache DOM nodes
	$(document).ready(function(){
		_Scoreboard = new Scoreboard();
		_WordInput = new WordInput( this );
		_GuessMapFlips = new GuessMapFlipCards();
	}.bind(this))

	function play(){
		// let guess = prompt('guess a letter'),
		// 	state = undefined;

		// _hangmanModel.guess( guess );
		// state = _hangmanModel.getState();
		// render( state );
	}

	this.handleWordSubmit = function( word ){
		_hangmanModel = new Hangman( word );
		render( _hangmanModel.getState(), 'NEW_GAME' );
		play();
	};

	function render( state, special ){
		if ( special === 'NEW_GAME' ){
			_WordInput.toggle();
		}
		_GuessMapFlips.render( state.guessMap );
		
	}
}

module.exports = MASTER;