'use strict';

var ErrorCtrl = function () {
	var html = $('#alert').html().trim(),
		$alert = $( $.parseHTML(html) ),
		_messageKey = {
			'not a letter': 'Try again! You must input a letter, and only a letter.',
			'already guessed': 'You\'ve already guessed this. Try something new!', 
			'invalid word': 'You must choose a single word with no numeric or punctuation marks.'
		};

	$('body').append($alert);
	$alert.hide();

	this.alert = function( msg ){ 
		$alert.children('.alert').text( _messageKey[ msg ] );
		$alert.show(400, function(){
			setTimeout( function(){
				$alert.hide(400);
			}, 1900);
		})
	};
}

module.exports = ErrorCtrl;