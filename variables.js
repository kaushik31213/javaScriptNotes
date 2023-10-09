// variables are used to store information
// we can use or modify that info later

// ------------------VAR keyword-----------------

// variable declaration
var input = 10;

// using a variable
console.log(input);

// modify a variable
input = 25;
console.log(input);

// ----------------------------------------------------

// we can create variables without using var,let or const
firstName = "Kaushik";
console.log(firstName);
//  but this can casue problems

// so we use 'use strict' mode

// after using this we can avoid from making mistakes

// Naming conventions for variables

// 1. Dont start with a number
// 2. Can use underscore or dollar
// 3. Cant use spaces
// 4. Start with a small letter and use camelcase

// ----------------LET keyword-----------

let lastName = "Bora";
console.log(lastName);

// Mostly let and const are used nowadays

// Difference between var,let and const

var inp = 1;
var inp = 2;

// var can be redclared and reassigned

let inp1 = 5;
let inp1 = 10;

inp1 = 20;

// let cannot be redeclared but its value can be modified

// --------------------CONST keyword------------------

const val = 5;
console.log(val);
// val = 10;
// this will print an error

// We cannot redeclare or reassign a const value
// But we can modify the value of const

console.log(val + 10);
