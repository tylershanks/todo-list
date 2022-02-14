

export function deleteTodo() {
    console.log("delete todo button pressed")

    var toDoDiv = this.parentNode;
    var listColumn = toDoDiv.parentNode;
    listColumn.removeChild(toDoDiv);
}