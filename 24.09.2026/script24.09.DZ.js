const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        addTaskToDOM(task);
    });
};

function addTask() {
    let task = taskInput.value.trim();

    if (task === "") return;

    saveTask(task);
    addTaskToDOM(task);

    taskInput.value = "";
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToDOM(task) {
    let li = document.createElement("li");

    li.textContent = task;

    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Видалити";

    deleteButton.onclick = function () {
        removeTask(li, task);
    };

    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

function removeTask(li, task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] === task) {
            tasks.splice(i, 1);
            break;
        }
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    li.remove();
}