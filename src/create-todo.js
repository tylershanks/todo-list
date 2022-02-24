import { deleteTodo } from './delete-todo.js'
import { checkBox } from './check-box.js'

export function createToDo(toDoDesc, toDoDueDate) {

    //if i use this in place of all of this

    let toDo = document.getElementById(toDoDesc);

    //adding to the todo itself
    //adding the checkbox
    const checkBoxBtn = document.createElement("input");
    checkBoxBtn.setAttribute("type", "checkbox")
    checkBoxBtn.setAttribute("id", "checkbox")
    checkBoxBtn.classList.add("checkBox");

    toDo.appendChild(checkBoxBtn);

    //adding the label
    const toDoLabel = document.createElement("label");
    toDoLabel.classList.add("task");
    toDoLabel.innerHTML = toDoDesc;
    toDo.appendChild(toDoLabel);

    //adding the due date
    const toDoDate = document.createElement("div");
    toDoDate.classList.add("dueDate");
    if (toDoDueDate == "") {
        toDoDate.innerHTML = "";
    }
    else {
        toDoDate.innerHTML = "Due by: " + toDoDueDate;
    }
        toDo.appendChild(toDoDate);

    //adding the x box
    const deleteTodoBtn = document.createElement("button")
    deleteTodoBtn.classList.add("deleteTodo");
    deleteTodoBtn.setAttribute("id", "deleteTodo")
    deleteTodoBtn.innerHTML = "X";
    toDo.appendChild(deleteTodoBtn);

    deleteTodoBtn.addEventListener("click", deleteTodo);
    checkBoxBtn.addEventListener("click", checkBox);
}