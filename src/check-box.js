

export function checkBox() {
    console.log("check box button pressed")
    console.log(document.getElementById("checkbox").checked)
    //true = it is checked

    var toDoDiv = this.parentNode;
    var listColumn = toDoDiv.parentNode;
    var test = document.getElementById("test");

    if (this.checked == true) {
        console.log("if statemetn")

        toDoDiv.style.backgroundColor = "gray";
        toDoDiv.style.color = "white";
        toDoDiv.style.textDecoration = "line-through"

    }

    else {
        toDoDiv.style.backgroundColor = "cornflowerblue";
        toDoDiv.style.color = "black";
        toDoDiv.style.textDecoration = ""
    }
    

}