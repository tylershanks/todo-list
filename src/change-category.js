

export function changeCategory() {

    console.log('cat clicked')
    //subCategoryList.style.display = "block";
    console.log(this.id)

    //if (this.id = "mainCategory") {console.log("poof")}

    //selecting all of the classes labeled subCategory in the categoryColumn family
    let subCategories = document.getElementById("categoryColumn").querySelectorAll(".subCategory");
    //let mainCategory = document.getElementById("mainCategory");
    let mainCatButn = document.getElementById("maincatbutn");
    console.log(subCategories.length)

    //looping thru the length of the sub cats and making them all the unselected color
    for (let i=0; i < subCategories.length; i++) {
        subCategories[i].style.backgroundColor = "rgb(104, 104, 104)";
    }
    //mainCategory.style.backgroundColor = "rgb(104, 104, 104)";
    mainCatButn.style.backgroundColor = "rgb(104, 104, 104)";

    //after all of the colors are reset, changes the one you clicked to the "selected" color
    this.style.backgroundColor = "rgb(136, 136, 136)";
}