import { addTodo } from './add-todo.js'
import { addCategory } from './add-category.js'
import { changeCategory } from './change-category.js'
import { deleteTodo } from './delete-todo.js'
import { checkBox } from './check-box.js'

//localStorage.clear();
console.log('hello new program')










//currently working here nothing else in any other file really changed

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



//local storage stuff
let savedListColumn = localStorage.getItem('listColumn');
let listColumn = document.getElementById("listColumn");

if (savedListColumn) {
    listColumn.innerHTML = savedListColumn.substring(1, savedListColumn.length-1);
}

else {
    console.log("no")
}











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









