'use strict';

var ErrorCtrl = function () {
	var html = $('#alert').html().trim(),
		$alert = $( $.parseHTML(html) );

	this.alert = function( msg ){ 
		$alert.text( msg ).show(400, function(){
			setTimeout( function(){
				$alert.hide(400);
			}, 1500);
		})
	};
}

module.exports = ErrorCtrl;