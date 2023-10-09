// iterables are those where we can use for of loops in order to access its elements

// strings , arrays are iterables

// const firstName = "Kaushik";
// for (let letter of firstName) {
//   console.log(letter);
// }

// array like objects are those which has length property and we can access the elements using index
// strings arrays etc are array like objects

// ====================SETS =====================

// sets are iterables
// sets store data
// sets also have its own methods
// can not use the index property
// order of elements is not guaranteed
// no duplicate items allowed

const numbers = new Set([1, 2, 3]);
console.log(numbers);
console.log(Array.isArray(numbers));
console.log(numbers[2]);

// the type of sets is object

const data = new Set("Kaushik");
console.log(typeof data);

const myArr = new Set();
myArr.push(1);
console.log(myArr);
