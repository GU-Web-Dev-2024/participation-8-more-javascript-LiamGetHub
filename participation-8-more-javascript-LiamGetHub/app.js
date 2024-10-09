"use strict"

//import modules
import { addtTask, clearInput } from "./todo";
import { saveTasks, loadTasks } from "./storage";

//set up dom references
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-list");
const addTaskButton = document.getElementById("add-list");


//load tasks from local storage
const tasks = loadTasks();


//add event listener for new task
addTaskButton.addEventListener("click",(()=>{

    const task = newTaskInput.value.trim();
    task.push(task);
    saveTasks(tasks);
    clearInput(newTaskInput);
}))