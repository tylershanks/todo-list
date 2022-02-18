import { changeCategory } from './change-category.js'

export function deleteCategory() {
    console.log("delete category button pressed")
    //stops the div from being clicked thru the button
    event.stopPropagation();

    var thisCategoryDesc = this.parentNode;

    //select drop down menu value
    let categorySelector = document.getElementById("categorySelector");
    let options = categorySelector.getElementsByTagName('OPTION')
    for (let i=0; i<categorySelector.length; i++) {
        if (categorySelector.options[i].value == thisCategoryDesc.id){
            categorySelector.removeChild(options[i]);
        }
    }
    

    var categoryDiv = this.parentNode; //this is the div that will be removed. ID is cat name
    var categoryColumn = categoryDiv.parentNode;
    categoryColumn.removeChild(categoryDiv);


    
    //class is the same name as the cat. desc
    
    //get elements by class
    let listToBeRemoved = document.getElementsByClassName(thisCategoryDesc.id);  
    //remove all of the to do's with class of that corresponding cat description   
    while(listToBeRemoved.length > 0) {
        listToBeRemoved[0].parentNode.removeChild(listToBeRemoved[0]);
    }

    /* trying to make it so if i click something that i am selected on, it will fake a click
    on main and go there instead.

    i also need to fix it so that if i click an x it doesnt count as a click on the div itself.
    right now it thinks i click the div, then the button. so it auto swaps to the category i am trying to delete
    and it looks weird and every "to do" disappears and you dont have a selected category*/

            let thisCategoryDeleteButtonClicked = this.parentNode;
            let mainCatBtn = document.getElementById("maincatbutn");
            console.log(thisCategoryDeleteButtonClicked.style.backgroundColor)
            //mainCatBtn.addEventListener("click", changeCategory);
            //mainCatBtn.onclick = changeCategory;
            if (thisCategoryDeleteButtonClicked.style.backgroundColor == "rgb(136, 136, 136)") {
                mainCatBtn.click();
                console.log("main cat butn should be clicked")
            }
    
}