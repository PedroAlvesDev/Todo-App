let newTask = document.querySelector('input#task');
let list = document.querySelector('.task-box');

function AddTask() {
    if(newTask.value.length == 0) {
        alert(`Digite uma tarefa válida!`);
    } else {
        let ulTask = document.createElement('ul');
        let liTask = document.createElement('li');
        let inputCheckboxTask = document.createElement('input');
        inputCheckboxTask.type = 'checkbox';
        let spanTask = document.createElement('span');
        spanTask.innerText = newTask.value;

        list.appendChild(ulTask);;
        ulTask.appendChild(liTask);
        liTask.appendChild(inputCheckboxTask);
        liTask.appendChild(spanTask);
  
    };
    
    newTask.value = '';
    newTask.focus();

};
