import { addTodo } from './add-todo.js'
import { addCategory } from './add-category.js'
import { changeCategory } from './change-category.js'
import { deleteTodo } from './delete-todo.js'
import { checkBox } from './check-box.js'

//localStorage.clear();
console.log('hello new program')





export let toDoList = [];

//local storage attempt 2
/*
//get data from local storage
function getToDoList() {
    let savedToDoList = localStorage.getItem("toDoItem")
    let savedToDoListNoString = localStorage.getItem("toDoNoStringify")
    console.log(savedToDoList)
    console.log("^^SavedToDoList")
    console.log(savedToDoListNoString)
    console.log("^^savedToDoListNoString")
    let savedToDoListParsed = JSON.parse(savedToDoList);
    if (!savedToDoListParsed) {
        savedToDoListParsed = [];
    }

    let listColumn = document.getElementById("listColumn");
    //listColumn.innerHTML = savedToDoListNoString;
    console.log("getToDoList ran")
    console.log(savedToDoListParsed)
    console.log("^^^savedToDoListParsed")
}

getToDoList();
*/

/*
window.addEventListener ("beforeunload", function (event) {

    console.log('asfasdf')

    localStorage.clear();
    let listColumnSave = document.getElementById("listColumn");
    let listColumnStringify = JSON.stringify(listColumnSave.innerHTML);
    let listColumnStringifyNoSpecial = listColumnStringify.replace(/\\n/g, "")
                                                          .replace(/[\"\\\"]/g, "")
                                                          .replace(/[\"]/g, "")
                                                          .replace(/[\"\"]/g, "")
                                                          .replace(/\"/g, "")
    //console.log(listColumn.innerHTML)

    localStorage.setItem('listColumn', JSON.stringify(listColumnStringifyNoSpecial))
    
});
*/

/*
//local storage stuff attempt 1
let savedListColumn = localStorage.getItem('listColumn');
let listColumn = document.getElementById("listColumn");

if (savedListColumn) {
    listColumn.innerHTML = savedListColumn.substring(1, savedListColumn.length-1);
}

else {
    console.log("no")
}
*/




//buttons arent working after refresh
//i think it has to do w the event listeners
//when i uncomment those if statements, it only works for the first button available
//which is the first to do's check box





document.getElementById("addTodo").addEventListener("click", addTodo);
document.getElementById("addCategory").addEventListener("click", addCategory);
let deleteToDoBtn =  document.getElementById("deleteTodo")
/*
if (typeof(deleteTodoBtn) != 'undefined' && deleteTodoBtn != null)
{
    deleteToDoBtn.addEventListener("click", deleteTodo);
}

let checkBoxBtn =  document.getElementById("checkbox")
if (typeof(checkBoxBtn) != 'undefined' && checkBoxBtn != null)
{
    checkBoxBtn.addEventListener("click", checkBox);
}
*/

let mainCategory = document.querySelector('.maincatbutn')
mainCategory.style.cursor = 'pointer';

document.getElementById("maincatbutn").addEventListener("click", changeCategory);









