// Arrays are good but not sufficient for real world data
// so we use objects
// it stores key value pairs
// objects are reference type just like arrays

// let person = {
//   name: "Kaushik",
//   age: 25,
//   address: "Jagiroad",
//   marks: [49, 40, 42, 45],
// };

// // here the name , age,  address are keys or properties and on the right side of colon are values , together they are called key value pairs
// console.log(person);
// console.log(typeof person);

// // arrays have indexes but objects dont
// // so to access the values in an object ,  we can use these methods

// console.log(person.name);

// // OR

// console.log(person["name"]);
// // has to be in strings ""
// // because the properties or keys are strings by default

// //  these are 2 ways to access values from an object

// // to add new key value pairs in an object
// person.gender = "Male";

// // or

// person["class"] = 12;

// gender : male key value pair got added to the person object

// --------------------------------------------------------------

// Difference between DOT and BRACKET notation

// there are two najor differences

// first--------------

let person = {
  name: "Kaushik",
  age: 25,
  address: "Jagiroad",
  marks: [49, 40, 42, 45],
  "person color": "white",
};

//  in this object we cannot access peron color by using person.person color
// it will throw an error because javascript cannot compute variables with spaces

// we can access it by using square brackets

// console.log(person.person color);
// this will show error

console.log(person["person color"]);
// this works

// second ---------------

let key = "email";

// to add the key variable in object if we use dot notation it will store the 'key' as key that is it will show key : xyz@gmail.com

// so to add the key variable with email as the key in an object we use square brackets

person[key] = "xyz@gmail.com";
// here we didnt use the strings because the key variable stores email value and will be computed by using []

console.log(person);
