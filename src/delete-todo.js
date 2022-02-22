

export function deleteTodo() {
    console.log("delete todo button pressed")
    

    var toDoDiv = this.parentNode;
    var listColumn = toDoDiv.parentNode;
    listColumn.removeChild(toDoDiv);


    /*
    //local storage stuff
    localStorage.clear();
    
    let listColumnContent = document.getElementById("listColumn");
    let listColumnStringify = JSON.stringify(listColumnContent.innerHTML);
    let listColumnStringifyNoSpecial = listColumnStringify.replace(/\\n/g, "")
                                                            .replace(/[\"\\\"]/g, "")
                                                            .replace(/[\"]/g, "")
                                                            .replace(/[\"\"]/g, "")
                                                            .replace(/\"/g, "")
    //console.log(listColumn.innerHTML)

    localStorage.setItem('listColumn', JSON.stringify(listColumnStringifyNoSpecial))

    let saved = localStorage.getItem('listColumn');
    listColumnContent = saved.substring(1, saved.length-1);


    */
}