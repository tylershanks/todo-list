

export function changeCategory() {

    //console.log('cat clicked')
    //subCategoryList.style.display = "block";
    //console.log(this.id)

    //if (this.id = "mainCategory") {console.log("poof")}

    //selecting all of the classes labeled subCategory in the categoryColumn family
    let subCategories = document.getElementById("categoryColumn").querySelectorAll(".subCategory");
    //let mainCategory = document.getElementById("mainCategory");
    let mainCatButn = document.getElementById("maincatbutn");
    //console.log(subCategories.length)

    //looping thru the length of the sub cats and making them all the unselected color
    for (let i=0; i < subCategories.length; i++) {
        subCategories[i].style.backgroundColor = "rgb(104, 104, 104)";
        //subCategories[i].style.display = "none"
    }
    //mainCategory.style.backgroundColor = "rgb(104, 104, 104)";
    mainCatButn.style.backgroundColor = "rgb(104, 104, 104)";

    //after all of the colors are reset, changes the one you clicked to the "selected" color
    this.style.backgroundColor = "rgb(136, 136, 136)";



    //making the todos appear and disappear
    var thisCategoryDesc = this.id; //ID of the category we clicked on
    let listColumn = document.getElementById("listColumn") //main column holding all the lists

    //select thisCategoryDesc.id and make sytle.display = "not none"
    //will be a child of listColumn

    let mainCategoryList = document.getElementById("mainCategoryList");
    
    let thisSubCategoryTodoLists = listColumn.querySelectorAll("."+thisCategoryDesc);//selecting all with the specific id
    let allSubCategoryTodoLists = listColumn.childNodes;
    let ytest = document.getElementsByClassName(thisCategoryDesc.id)

    //allSubCategoryTodoLists.style.display = "none"
    //thisSubCategoryTodoLists.style.display = "block"

    //looping thru the length of the sub cats and making them all disappear or appear
    for (let i=0; i < allSubCategoryTodoLists.length; i++) {
        //if main cat button is pressed, everything appears
        if (allSubCategoryTodoLists[i].tagName == 'DIV' && thisCategoryDesc == "maincatbutn") {
            allSubCategoryTodoLists[i].style.display = "block"
        }
        
        //if something other than main cat button is pressed, make everything except what was clicked disappear
        else if (allSubCategoryTodoLists[i].tagName == 'DIV' && allSubCategoryTodoLists[i].id != thisCategoryDesc){ 
            allSubCategoryTodoLists[i].style.display = "none"
        }

        //if something other than main cat button is pressed, make what was clicked appear
        else if (allSubCategoryTodoLists[i].tagName == 'DIV' && allSubCategoryTodoLists[i].id == thisCategoryDesc) {
            allSubCategoryTodoLists[i].style.display = "block"
        }

        
    }
    
    //if (/*this is clicked on the x*/) {
        //force click main cat butn
    //}


}