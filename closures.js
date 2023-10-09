// closures

// functions can return functions

// function myFunc() {
//   return function myFunc2() {
//     return "Whats up";
//   };
//   myFunc2();
// }

// const result = myFunc();
// console.log(result());

function printName(fname, lname) {
  // even if the parameters are set here

  return function myFunc2() {
    // but this function can also access the parameter value
    console.log(fname, lname);
  };
  myFunc2();
}

const result = printName("Kaushik", "bora");
result();

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

// EXAMPLE 1

function hello(x) {
  const a = "Var1";
  const b = "Var2";
  return function () {
    console.log(a, b, x);
  };
}
const ans = hello("arg");
ans();

// in this example 1 , we have a function hello , ans variable and ans() for global execution context
// inside func hello which has a paramater x , we have variable a and b and a function declared .
// during the first function execution context, when the function hello gets called or invoked , its returning function gets stored in ans
// during the phase of returning the function to a variable , it gets the access to its parents private variables along with the arguments that is passed
// so even if the function inside hello has no variable or arguments in it , it still prints the correct output .

// this all happens due to closure

// EXAMPLE 2

// function power(x) {
//   return function (num) {
//     return num ** x;
//   };
// }

// to make this code shorter using arrow functions
const power = (x) => (num) => num ** x;

const enterNum = power(3);
const powerOfNum = enterNum(3);

console.log(powerOfNum);

// EXAMPLE 3

function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi you called me");
      counter++;
    } else {
      console.log("i have already been called once");
    }
  };
}

let coutingFunc = func();
coutingFunc();
coutingFunc();
coutingFunc();

// this function lets us to print Hi you called me only once .
