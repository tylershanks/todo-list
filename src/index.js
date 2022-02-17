import { addTodo } from './add-todo.js'
import { addCategory } from './add-category.js'
import { changeCategory } from './change-category.js'


console.log('hello new program')

document.getElementById("addTodo").addEventListener("click", addTodo);
document.getElementById("addCategory").addEventListener("click", addCategory);


let mainCategory = document.querySelector('.maincatbutn')
mainCategory.style.cursor = 'pointer';

document.getElementById("maincatbutn").addEventListener("click", changeCategory);





