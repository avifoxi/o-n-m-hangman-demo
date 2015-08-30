'use strict';

import Hangman from './models/Hangman.js';

import Scoreboard from './controllers/Scoreboard.js';
import WordInput from './controllers/WordInput.js';
import GuessMapFlipCards from './controllers/GuessMapFlipCards.js';
import GuessInput from './controllers/GuessInput.js';
import Modal from './controllers/ModalController.js';

var MASTER = function () {
	// Models
	var _hangmanModel = undefined,
		_validator = undefined,

	// Controllers
		_Scoreboard = {},
		_WordInput = {},
		_GuessMapFlips = {},
		_GuessInput = {},
		_Modal = {},

	// Internal States
		_previousGames = {
			win: 0,
			lose: 0
		};

	// initialize controllers, and cache DOM nodes
	$(document).ready(function(){
		_Scoreboard    = new Scoreboard();
		_WordInput     = new WordInput( this );
		_GuessMapFlips = new GuessMapFlipCards();
		_GuessInput 	 = new GuessInput( this );
		_Modal 				 = new Modal( this );
	}.bind(this));

	this.handleWordSubmit = function( word ){
		_hangmanModel = new Hangman( word );
		render( _hangmanModel.getState(), 'START_GAME' );
	};
	this.handleGuessSubmit = function( guess ){
		let newState, isGameOver;
		
		isGameOver = _hangmanModel.guess( guess );
		newState = _hangmanModel.getState();
		render( newState );
		if ( isGameOver ){
			handleResult( isGameOver );
		}
	};
	this.handleNewGameClick = function(){
		_WordInput.toggle();
	};

	function handleResult( isGameOver ){
		_previousGames[ isGameOver[0] ] = ++_previousGames[ isGameOver[0] ]; // increment score
		_Modal.handleResult( isGameOver );
		_Scoreboard.updateState({
			isGameOver[0]: _previousGames[ isGameOver[0] ]
		});
	}
	function render( state, special ){
		if ( special === 'START_GAME' ){
			_WordInput.toggle();
		}
		_GuessMapFlips.render( state.guessMap );
		_Scoreboard.updateState({
			turnsLeft: state.turnsLeft,
			wrongs: state.wrongs
		});
	}
}

module.exports = MASTER;