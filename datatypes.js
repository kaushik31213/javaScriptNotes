// DATATYPES in JS

// Primitive Datatypes

// String
// Number
// booleans
// undefined
// null
// BigInt
// symbol

// typeof operator

let age = 22;
let firstName = "kaushik";
console.log(typeof age);
console.log(typeof firstName);

// Convert number to string
// first solution
age = age + "";

// second solution
age = String(age);
console.log(typeof age);
// this will change the number to string

// convert string to number
let myStr = +"22";
// this is the first method to convert...just use + before the string

myStr = Number(myStr);
