'use strict';

var Scoreboard = function() {
	// DOM hooks
	var _viewsMap = {
			turnsLeft: $('td[data="turnsLeft"]'),
			wrongs: $('td[data="wrongs"]'),
			win: $('td[data="win"]'),
			lose: $('td[data="lose"]')
		},
		_state = {};

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