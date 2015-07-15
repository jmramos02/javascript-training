var tasks = [];

function addTask() {
	
	'use strict'
	
	var task = document.getElementById('task');
	var output = document.getElementById('output');
	var list = document.getElementById('list');
	var message =  "";
	var items = ""; 
	
	if(task.value) {
		tasks[tasks.length] = task.value;
	}

	message = 'You have ' + tasks.length +  ' task(s)' + 'right now';	
	items = list.innerHTML + '<li>' + tasks[tasks.length - 1] + '</li>';

	if(output.textContent !== undefined) {
		
		output.textContent = message;
	} else {
		
		output.innerHTML = message;
	}
	list.innerHTML = items;
	return false;	
}

function init(){
	
	'use strict'
	document.getElementById('theForm').onsubmit = addTask;
}

window.onload = init();
