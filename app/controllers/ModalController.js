'use strict';

var Modal = function ( MASTER ) {
	var $modal = $('.modal'),
		$newGame = $('[data="hangman[play-again]"]'),
		$body = $('.modal-body'),
		_contents = {
			win: $('#winBody').html().trim(),
			lose: $('#loseBody').html().trim()
		};

	this.handleResult = function( isGameOver ){
		let result = isGameOver[ 0 ],
			word = isGameOver[ 1 ],
			content = _contents[ result ],
			parsed = $.parseHTML( content );
		
		$(parsed).children( 'span.word' ).text( word );
		$body.html( parsed );
		$modal.modal();
	}
	$newGame.click(function(e){
		e.preventDefault();
		MASTER.handleNewGameClick();
		$modal.modal( 'hide' );
	});
}

module.exports = Modal;