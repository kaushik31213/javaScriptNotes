// ordered collection of items

let names = ["Kaushik", "Kavery", "Kohli", "Rohit"];
// in this array the elements are ordered
// that means it can be accessed using the index
console.log(names[3]);

// array can store any type of data

// let arr = [1, 23, "Rohit", null, undefined];
// console.log(arr);

names[2] = "Dhoni";
console.log(names);

// arrays are mutable, which means when datas are changed in an array it afffects the original array
// in this example we took second index item from names array and changed it to dhoni, which affected the original array and changed it

// In javascript, reference type data are objects so array is naturally an object

console.log(typeof names);
// this will prove that array is an object

// to find out if the type is array or object we use the function Array.isArray

console.log(Array.isArray(names));

// this will print true

// -----------CONST in arrays-----------------

// we should mostly use const in arrays

const fruits = ["Mango", "Apple", "Guava"];
//  using const will stop you from re assiging the same array but you can modify even by using const by the array methods
