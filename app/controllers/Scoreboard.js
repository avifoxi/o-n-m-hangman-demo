'use strict';

var Scoreboard = function() {
	// DOM hooks
	var $turnsLeft = $('td[data="turnsLeft"]'),
		$guessMap = $('td[data="guessMap"]'),
		$wrongs = $('td[data="wrongs"]'),
		_viewsMap = {
			turnsLeft: $turnsLeft,
			guessMap: $guessMap,
			wrongs: $wrongs
		},
		_state = undefined;

	this.updateState = function( newState ){
		for ( let key in newState ){
			if ( _state[ key ] !== newState[ key ]){
				render( _viewsMap[ key ], newState[ key ] );
			}
		}
	};
	function render( $view, newContent ){
		$view.text( newContent );
	}
}

module.exports = Scoreboard;