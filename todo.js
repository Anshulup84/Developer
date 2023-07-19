let todolist = [];

function addTodo() {
    let todoInput = document.getElementById("todoInput");
    let todoListElement = document.getElementById("todoList");

    let todoText = todoInput.value.trim();
    if (todoText !== "") {
        todolist.push(todoText);

        let listItem = document.createElement("li");
        listItem.textContent = todoText;
        todoListElement.appendChild(listItem);

        todoInput.value ="";
    }

}