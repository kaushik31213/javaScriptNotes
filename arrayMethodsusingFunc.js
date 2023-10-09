// important array methods

// forEach
// map
// filter
// reduce

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num, i) => {
//   console.log(`Index is ${i} and ${num} * 2 is ${num * 2} `);
// });

// // so to be simple foreach is an array method to iterate over arrays. It takes two parameters, the first one is the number and the second one is the index of that number , we can then print or do operations with that numbers

// const arr = ["Kaushik", "Kavery", "Rohit"];
// arr.forEach((value, index) => {
//   console.log(value.toUpperCase());
//   console.log(index);
// });

// it is simply the combination of for of and for in loop, for of gave thg value or the elements of an array where for in gave the indexes of the elements .
// and foreach gives them both , so it is basically a combination of forof adn forin

const users = [
  { firstName: "Kaushik", age: 25 },
  { firstName: "Kavery", age: 23 },
  { firstName: "Rohit", age: 21 },
  { firstName: "Kohli", age: 19 },
];

// for (let user of users) {
//   console.log(user.firstName.toUpperCase());
//   console.log(user.age);
// }

// for of loops can also be used to iterate over this array of objects

// now using foreach loop

// ============FOR EACH METHOD=========

// users.forEach((user) => {
// //   console.log(user.firstName);
// //   console.log(user.age);
// // });

// // this both works the same

// // for of loop is a newer additon to the javascript , but foreach method is much older than forof , so most of the cases we will be seeing forEach instead of for of but both of their operations are almost same

// // for (let i = 0; i < users.length; i++) {
// //   console.log(users[i].firstName);
// // }

// // we can also use the traditional for loop for these functions

// users.forEach((user, index) => {
//   console.log(user.firstName);
//   console.log(user.age);
// });

// ====================MAP METHOD====================

// let result = numbers.map((num) => {
//   return num * num;
// });

// console.log(result);

// in map method it iterates over the elements and then store the output in an array
// we have to store the returned output in a variable in order to get the newly formed array by map method
// we should always use the return keyword when using this method as it gives an array as output . If we use consolelog then it will provide an array of undefined as it wont be returning anything
// this method can also pass num adn index as parameter and it can be acessed

// const userArray = users.map((user) => {
//   return user.firstName;
// });
// console.log(userArray);

//  OR

// const userArray1 = [];
// const userArray2 = [];
// users.map((user) => {
//   userArray1.push(user.firstName);
//   userArray2.push(user.age);
// });
// console.log(userArray1);
// console.log(userArray2);

// ============FILTER METHOD===========

// let evenArray = [];
// let oddArray = [];
// numbers.filter((num) => {
//   return num % 2 === 0 ? evenArray.push(num) : oddArray.push(num);
// });
// console.log(evenArray);
// console.log(oddArray);

// this method returns either true or false .
// that means it iterate over array and only passed the value in a new array if the condtion inside the callback function is true
// if it is false then it is not returned to the array
// it used used to filter out the necessary elements from an array

// const passedUsers = [];
// users.filter((user) => {
//   return user.firstName[0] === "K"
//     ? passedUsers.push(user.firstName)
//     : "no user";
// });
// console.log(passedUsers);

// =================REDUCE METHOD==================

// fill method
// to create a new array of the same value we can use fill
const myArray = new Array(10).fill(4);
console.log(myArray);

const array = new Array(5).fill(2);
console.log(array);

// similarly we can use this method edit an existing array

const newArray = myArray.fill(3, 2, 5);
console.log(newArray);

// SPLICE METHOD

const anotherArray = ["Item1", "Item2", "Item3"];
// anotherArray.splice(1, 1);
// console.log(anotherArray);
// it is a mutating method
anotherArray.splice(1, 0, "new item");
console.log(anotherArray);

// this method also returns the deleted item
