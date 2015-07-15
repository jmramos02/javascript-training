function init(){
	'use strict';
	
	var today = new Date();
	var message = 'Right now it is ' + today.toLocaleDateString();
	message += ' at ' + today.getHours() + ':' + today.getMinutes();
	
	var output = document.getElementById('output');
	
	if(output.textContext !== undefined) {
		output.textContext = message;
	} else {
		output.innerHTML = message;
	}
	console.log(message);
}

window.onload = init;
