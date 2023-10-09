const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);
// used to print the classlist attached to the element

// sectionTodo.classList.add("bg-dark");
// used to add a new classlit to the element

// sectionTodo.classList.remove("container");
// used to remove the classlit from an element

console.log(sectionTodo.classList);
console.log(sectionTodo.classList.contains("container"));
// used to check if a classlist is present in the element

sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");
//   adds or remove a classlist according to its state , whether it is on or off

const header = document.querySelector(".header");
console.log(header);
header.classList.toggle("bg-dark");
header.classList.toggle("bg-dark");
header.classList.toggle("bg-dark");
header.classList.toggle("bg-dark");
