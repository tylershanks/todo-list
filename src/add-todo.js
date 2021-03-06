import { deleteTodo } from './delete-todo.js'
import { checkBox } from './check-box.js'
import { toDoList } from './index.js'
import { createToDo } from './create-todo'

export function addTodo() {
    console.log("add todo button pressed")
    
    //resets the input values when you go to create a new to do
    document.getElementById("toDoDesc").value = "";
    document.getElementById("toDoDueDate").value = "";

    
    //All of this is the Add Todo popup menu
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var modalBtn = document.getElementById("addTodo");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    submitToDo.onclick = function submitToDo () {
        console.log('sumbit to do button pressed')
        let addTodo = document.getElementById("addTodo");
        let toDoDesc = document.getElementById("toDoDesc").value;
        let toDoDueDate = document.getElementById("toDoDueDate").value;
        let categorySelector = document.getElementById("categorySelector").value;
        console.log(categorySelector);

        //selecting the list column div and making it a constant so we can
        //append new todo's to it
        const mainCategoryList = document.querySelector(".mainCategoryList");
        const subCategoryList = document.querySelector("."+categorySelector);
        let subCategoryListString = subCategoryList.toString();

        //creating the todo div for the individual todo's
        const toDo = document.createElement("div");
        toDo.classList.add("todo");
        toDo.setAttribute("id", toDoDesc)
        //mainCategoryList.insertBefore(toDo, addTodo);
        subCategoryList.appendChild(toDo);
        //mainCategoryList.appendChild(toDo);

        
        //trying to make this all a separate function
        //createToDo(toDoDesc, toDoDueDate);
        //this didnt work. for whatever reason, when i make 2 todos with the same
        //description, when the function is like it is now they are separate.
        //but if i use the createToDo function, it bugs out and adds the new todo to the old one

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
        //when submit button is pressed, close the modal
        modal.style.display = "none";





/*
        //local storage stuff attempt 2
        let toDoString = JSON.stringify(toDo)
        console.log(toDo)
        console.log("^^toDo no string")
        console.log(toDoString)
        console.log("^^toDoString")
        localStorage.setItem("toDoItem", toDoString)
        localStorage.setItem("toDoNoStringify", toDo)
*/


/*
        //local storage stuff
        toDoList.push(toDo)
        console.log(toDoList)
        console.log("^^^toDoList array")

        let toDoListString = JSON.stringify(toDoList)
        console.log(toDoListString)
        console.log("^^^toDoList array AFTER stringify")

        localStorage.setItem("toDoList", toDoListString)
*/

        /*
        localStorage.setItem(toDoDesc, JSON.stringify(toDoList))
        console.log(localStorage)
        let toDoString = localStorage.getItem(toDoDesc)
        let toDoStringParsed = JSON.parse(toDoString);
        console.log(toDoStringParsed)
        console.log("^^^ToDoStringParsed")
        */

        
/*

        
        localStorage.clear();
        let listColumn = document.getElementById("listColumn");
        let listColumnStringify = JSON.stringify(listColumn.innerHTML);
        let listColumnStringifyNoSpecial = listColumnStringify.replace(/\\n/g, "")
                                                              .replace(/[\"\\\"]/g, "")
                                                              .replace(/[\"]/g, "")
                                                              .replace(/[\"\"]/g, "")
                                                              .replace(/\"/g, "")
        //console.log(listColumn.innerHTML)

        localStorage.setItem('listColumn', JSON.stringify(listColumnStringifyNoSpecial))

        

        */

        //adding both event listeners for the delete button and the check box
        

        
    }

    




}