// document.createElement();
// append;
// prepend;
// remove;

const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("teach students ");
const toDoList = document.querySelector(".todo-list");
newTodoItem.append(newTodoItemText);
console.log(newTodoItem);
toDoList.append(newTodoItem);
