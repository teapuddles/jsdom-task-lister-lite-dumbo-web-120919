document.addEventListener("DOMContentLoaded", () => {
//grab all the necessary DOM elements

const taskForm = document.querySelector("#create-task-form")
const taskContent = document.querySelector("#new-task-description")
//form and relevant input fields

const taskList = document.querySelector("#tasks")
//ul where new tasks will live on the DOM

const newTask = document.addEventListener("submit", createNewTask);
//attach event listeners

});

const createNewTask = e => {
  e.preventDefault();
  const taskContent = document.querySelector("#new-task-description");
  const newTask = document.createElement('li')
    newTask.innerText = taskContent.value;

    appendNewTask(newTask)
}

const appendNewTask = task => {
  document.querySelector("#tasks").appendChild(task);
}
