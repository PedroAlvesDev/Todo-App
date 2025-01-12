let newTask = document.querySelector('input#task');
let list = document.querySelector('.task-box');

function addTask() {
    let taskValue = newTask.value.trim();

    if(taskValue.length == 0) {
        alert(`Digite uma tarefa válida!`);
    } else {
        let labelTask = document.createElement('label');
        labelTask.classList.add('task-item');

        let inputTask = document.createElement('input');
        inputTask.type = 'checkbox';

        let parTask = document.createElement('p');
        parTask.innerText = taskValue;

        let buttonTrash = document.createElement('button');
        buttonTrash.classList.add('delete-task');

        let trashItem = document.createElement('i');
        trashItem.classList.add('fa-solid');
        trashItem.classList.add('fa-trash-can');

        labelTask.appendChild(inputTask);
        labelTask.appendChild(parTask);
        buttonTrash.appendChild(trashItem);
        labelTask.appendChild(buttonTrash);

        list.appendChild(labelTask);

        trashItem.addEventListener('click', deleteTask);
        list.addEventListener('click', completeTask);
    };
    
    newTask.value = '';
    newTask.focus();
};
function deleteTask(e) {
    let addTask = e.target.closest('.task-item');
    addTask.remove();
};

function completeTask(e) {
    if(e.target.type === 'checkbox') {
        e.target.closest('.task-item').classList.toggle('complete');
    };
};

