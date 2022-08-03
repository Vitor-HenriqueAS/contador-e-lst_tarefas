//CONTADOR
let count = 0;
const CURRENTNUMBER = document.getElementById('currentNumber');
const AUMENTA = document.getElementById("adicionar");
const DIMINUI = document.getElementById("subtrair");

function corNumber (count){
    if (count < 0){
        CURRENTNUMBER.style.color = 'red';
    }
    else{
        CURRENTNUMBER.style.color = 'black';
    }
    CURRENTNUMBER.innerHTML = count;
}

AUMENTA.addEventListener('click', function(){
    if(count < 10){
        count++;
        corNumber (count);
    }
})

DIMINUI.addEventListener('click', function(){
    if (count > -10){
        count--;
        corNumber (count);
    }
})

//TO-DO LIST
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}