// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "Kaushik";
// console.log(firstName)

// javascript first code gets compiled
// then code gets executed

// compiling phase has three parts :
// 1. tokenizng or lexing
// 2. parsing
// 3. code generation

// first javascript breaks code into small pieces known as tokens

// then the tokens gets the token and form abstract syntax tree

// and then the code generation happens
// ECMA script does not have any rules to compile first
// but it says that the code needs to have early error checking and also check where the variables belong to which scope
// for this parsing is necessary

// early error checking happens before executing the code

// After the compilation phase , global execution context gets created
// GEC gets added to the stack

// this GEC has two phases :
// creation phases
// code execution phase

// in creation phase all the variables using var are created with undefined value and the value of this is already determined as the window object
// in the example above the this gets created as the window object and firstName gets created and its value is undefined

// in code execution phase :  as js is a single threaded language, it execute code one by one . It will not move to the next line of the code until it finishes the first one.
// the code gets executed line by line in the example

// after the execution phase completes the GEC gets popped oout of the stack

// console.log(this) : prints the window Object
// console.log(window) : prints the window object
// console.log(firstName) : prints undefined
// var firstName = "Kaushik" : gives the value to the variable and it changes from undefined to Kaushik
// console.log(firstName) : prints Kaushik

// the window object gets provided by the browser

console.log(this);
console.log(window);
console.log(myFunc);
console.log(fullName);

function myFunc() {
  console.log("This is my function");
}
// only function declaration works in creation phase
// in case of function expression the value gets set as undefined

var firstName = "Kaushik";
var lastName = "Bora";
var fullName = firstName + " " + lastName;
console.log(fullName);

// creation phase

// this gets set to window Object
// myFunc() gets created with the value of undefined
// firstName gets created with the value of undefined
// lastName gets created with the value of undefined
// fullName gets created with the value of undefined

// // execution phase

// console.log(this) prints the value of this that is windows object
// console.log(window) prints the window object
// console.log(myFunc) prints function
// console.log(fullName) prints undefined
// var firstName = "Kaushik" value of undefined gets set as Kaushik
// var lastName = "Bora" value of undefined gets set as Bora
// var fullName = firstName + " " + lastName value of fullname gets set as the input
// console.log(fullName) prints the fullname as per input

// IN CASE OF LET AND CONST 
// the value of the variables doesnt get set as undefined instead of it it gets set as uninitialised 
// it still gets the memory allocation 
// as it is uninitialised it prints an error 
// let and const gets hoisted but they are uninitialised 

// TEMPORAL DEAD ZONES 

// the time period when the variable stays uninitialised until it gets initialised is called temporal deadzone 
 
  