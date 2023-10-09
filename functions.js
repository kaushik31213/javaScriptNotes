// ================FUNCTION DECLARATION==============

function sayHi() {
  console.log("Hey there!!");
}
sayHi();

// function addNum(x, y, z) {
//   return x + y + z;
// }

// let result = addNum(10, 20, 15);
// console.log(result);

function checkEvenOrOdd(num) {
  let result = num % 2 === 0 ? "even number" : "odd number";
  return result;
}
let oddOrEven = checkEvenOrOdd(11);
console.log(oddOrEven);

// when a function returns something , it should be stored in a variable in order to perform a better task

function modString(str) {
  for (let char in str) {
    // console.log(char);
    if (char % 2 === 0) {
      console.log(str[char].toUpperCase());
    }
  }
}

modString("hello");

function firstChar(str) {
  console.log(str[0]);
}
firstChar("what");

function findTarget(arr, num) {
  for (let char of arr) {
    if (char === num) {
      return arr.indexOf(char);
    }
  }
  return -1;
}
let result1 = findTarget([2, 3, 4, 5, 6], 8);
console.log(result1);

// All of these examples are function declaration
// that means declaring a function without storing it anywhere

// ================function expression=================

// storing a function in a variable is function expression

let addNum = function (x, y, z) {
  return x + y + z;
};

let result = addNum(10, 20, 15);
console.log(result);

// a function with no name is called anonymous function
// function (x, y, z) {
//   return x + y + z;
// };
// these functions cannot be re used

// ================ARROW FUNCTIONS===================

let subtractNum = (x, y) => x - y;
console.log(subtractNum(10, 5));

// if your function has only one parameter you can remove the brackets
// if your function returns in only a single line you can remove the return keyword and the curly braces
