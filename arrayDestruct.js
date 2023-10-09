let names = ["Kaushik", "Kavery", "Kohli", "Rohit"];
let firstVal = names[0];
let secondVal = names[1];
//  in arrays we can destructure and access the values in it by this way

// but javascript has a shortcut

let [val1, val2, ...leftNames] = names;
//  this line is equivalent to the two lines written above
console.log(val1);
console.log(val2);
console.log(leftNames);

// these 2 values acts like normal variables

// to skip the second index or any index we can use , , doubles commas

// let [val1, , val3] = names;
// console.log(val1);
// console.log(val3);

// this is array destructuring

let arr = ["mohit", "chahal", "gill", "ishan"];
// let [firstPerson, secondPerson] = arr;
// console.log(firstPerson);
// console.log(secondPerson);

// if we have to print the rest of the values in the array we can do it by spread operators

let [firstPerson, secondPerson, ...arr2] = arr;
console.log(firstPerson);
console.log(secondPerson);
console.log(arr2);

// it is simple
