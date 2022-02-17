import { deleteCategory } from "./delete-category";
import { changeCategory } from './change-category.js'

export function addCategory() {
    console.log("add category button pressed")

    //All of this is the Add Category popup menu
    // Get the modal
    var modal = document.getElementById("myCategoryModal");

    // Get the button that opens the modal
    var modalBtn = document.getElementById("addCategory");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[1];

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        console.log('close category modal button pressed')
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }




    submitCategory.onclick = function submitCategory () {
        console.log('sumbit category button pressed')
        var addCategory = document.getElementById("addCategory");
        var categoryDesc = document.getElementById("categoryDesc").value;
        

        //selecting the category column div and making it a constant so we can
        //append new categories to it
        const categoryColumn = document.querySelector(".categoryColumn");

        //creating the category div for the individual categories
        //these will all be called sub categories, main category stays the same and cant be deleted
        const subCategory = document.createElement("div");
        subCategory.classList.add("subCategory");
        subCategory.setAttribute("id", categoryDesc)
        subCategory.setAttribute("style", "cursor: pointer")
        subCategory.addEventListener("click", changeCategory);
        categoryColumn.insertBefore(subCategory, addCategory);

        //adding to the category itself
        //adding the label
        const categoryLabel = document.createElement("label");
        categoryLabel.classList.add("task");
        categoryLabel.innerHTML = categoryDesc;
        subCategory.appendChild(categoryLabel);

        //adding the x box
        const deleteCategoryBtn = document.createElement("button")
        deleteCategoryBtn.classList.add("deleteCategory");
        deleteCategoryBtn.setAttribute("id", "deleteCategory")
        deleteCategoryBtn.innerHTML = "X";
        subCategory.appendChild(deleteCategoryBtn);

        //adding a sub category list that will be appended to listColumn to contain individual
        //to do's added to this sub category

        //selecting the list column div and making it a constant so we can
        //append new list containers to it
        const listColumn = document.querySelector(".listColumn");
        const subCategoryList = document.createElement("div");
        subCategoryList.classList.add(categoryDesc);
        subCategoryList.setAttribute("id", categoryDesc);
        listColumn.insertBefore(subCategoryList, addTodo);

        //add an option to select this sub category in the add task modal
        const categorySelector = document.querySelector(".categorySelector");
        const categorySelectorOption = document.createElement("option");
        categorySelectorOption.setAttribute("value", categoryDesc);
        categorySelectorOption.innerHTML = categoryDesc;
        categorySelector.appendChild(categorySelectorOption);
        console.log(categorySelector);






        //when submit button is pressed, close the modal
        modal.style.display = "none";

        //adding event listener for the delete button
        deleteCategoryBtn.addEventListener("click", deleteCategory);

        //document.getElementById("subCategory").addEventListener("click", changeCategory);
        //subCategory.style.cursor = 'pointer';

        //let categorySelector = document.getElementById("categorySelector").value;
        //categorySelector.style.cursor = 'pointer';
        //document.getElementById("categorySelector").addEventListener("click", changeCategory);

        //let categoryDescID = document.querySelector(categoryDesc);
        //categoryDesc.addEventListener("click", changeCategory);
        
    }



    




}