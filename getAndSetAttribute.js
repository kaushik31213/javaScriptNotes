const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://google.com");

const formTodo = document.querySelector(".form-todo input");
console.log(formTodo.getAttribute("type"));

// getattribute is used to print the attribute of the selected elemnts , here in the example we used getattribute to find the attribute connected with href 
// then we used setattribute to change the attribute of the anchor tag with href attribute to google.com 

// getattribute gets the attribute and setattreibute sets the attribute 
