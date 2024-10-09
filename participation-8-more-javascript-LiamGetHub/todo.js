"use strict";

let myInt = 42;

//function to add a task
function addtTask(task, taskList) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}


// function to clear input feild
function clearInput(inputField){
    inputField.value="";
}


//alternate methods to export
export function sayHello() {
    alert("Hello world")
}

//exporting functions
export {addtTask, clearInput};