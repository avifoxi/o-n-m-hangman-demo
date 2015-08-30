// for quick prototyping -- worth the speed to globally expose jQuery and bootstrap
// though for more complicated apps - this is likely not worth the initial ease

window.$ = require('jquery');
window.jQuery = $;
window.bootstrap = require('bootstrap');

require('babel/register'); // to use es6 syntax
var MASTER = require('./HangmanMaster.js'); // master controller

window.MASTER = new MASTER();