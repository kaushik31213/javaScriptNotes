// as from ref data types we know that arr1 = arr2 makes the same array

// to prevent that we have to know how to clone arrays

// let names1 = ["Kaushik", "Kavery"];
// let names2 = ["Kaushik", "Kavery"];
// names2.push("Rohit");
// console.log(names1);
// console.log(names2);
// console.log(names1 === names2);

// this will make two different locations for names1 and names2

// this method is not possible for larger arrays

// cloning methods

// first method by using slice
// let names1 = ["Kaushik", "Kavery"];
// let names2 = names1.slice(0);
// console.log(names1);
// console.log(names2);
// console.log(names1 === names2);

// second method by using concatenation
// let names1 = ["Kaushik", "Kavery"];
// let names2 = [].concat(names1);
// console.log(names1);
// console.log(names2);
// console.log(names1 === names2);

// third method by using spread operator

let names1 = ["Kaushik", "Kavery"];
// let names2 = [...names1];

// spread operator is the most used method to clone arrays but the slice method is the fastest

// to add new elements in the clone array we can use concat and,

let names2 = [...names1, "Gill", "Rohit"];
console.log(names1);
console.log(names2);
console.log(names1 === names2);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2];
console.log(newArr);
//  this will contain the arr1 and arr2 element  as a cloned version
