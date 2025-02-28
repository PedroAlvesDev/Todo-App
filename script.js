const theme = document.getElementById('theme');
const body = document.getElementById('root');

let newTask = document.querySelector('input#task');
let list = document.querySelector('.task-box');

function addTask() {
    let taskValue = newTask.value.trim();

    if (taskValue.length == 0) {
        alert(`Enter a valid task!`);
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
        trashItem.classList.add('fa-solid', 'fa-trash-can');

        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit-task')

        let editItem = document.createElement('i');
        editItem.classList.add('fa-solid', 'fa-pen');

        buttonEdit.appendChild(editItem);
        buttonTrash.appendChild(trashItem);

        labelTask.appendChild(inputTask);
        labelTask.appendChild(parTask);
        labelTask.appendChild(buttonEdit);
        labelTask.appendChild(buttonTrash);

        list.appendChild(labelTask);

        inputTask.addEventListener('change', completeTask);
        buttonTrash.addEventListener('click', deleteTask);
        buttonEdit.addEventListener('click', editTask);
    };
    newTask.value = '';
    newTask.focus();

};

function editTask(e) {
    let taskItem = e.target.closest('.task-item');
    let parTask = taskItem.querySelector('p');

    let newText = prompt('Edit your task..', parTask.innerText);
    if (newText !== null && newText.trim() !== '') {
        parTask.innerText = newText.trim();
    }
};

function deleteTask(e) {
    let taskItem = e.target.closest('.task-item');
    if (taskItem) {
        taskItem.remove();
    };
};

function completeTask(e) {
    e.target.closest('.task-item').classList.toggle('complete');
};

// moon <i class="fa-solid fa-moon"></i>
// sun <i class="fa-solid fa-sun"></i>

function lightMode() {
    theme.classList.remove('fa-moon');
    theme.classList.add('fa-sun');
    body.classList.add('light');
};

function darkMode() {
    theme.classList.remove('fa-sun');
    theme.classList.add('fa-moon');
    body.classList.remove('light');
};


if (localStorage.getItem('theme') === 'dark') {
    darkMode();
} else {
    lightMode();
};

theme.addEventListener('click', () => {
    if (theme.classList.contains('fa-moon')) {
        lightMode();
        localStorage.setItem('theme', 'light');
    } else {
        darkMode();
        localStorage.setItem('theme', 'dark');
    };
});
