

export function deleteCategory() {
    console.log("delete category button pressed")

    var categoryDiv = this.parentNode;
    var categoryColumn = categoryDiv.parentNode;
    categoryColumn.removeChild(categoryDiv);
}