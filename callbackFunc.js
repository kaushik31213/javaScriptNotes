// // function myFunc1(a) {
// //   console.log("Inside myFunc1");
// //   a();
// // }

// // function myFunc2() {
// //   console.log("Inside myFunc2");
// // }

// // myFunc1(myFunc2);

// // // passing a function as a parameter and then calling it issimply called callback funtion

// // function myFunc1(callback) {
// //   console.log("Completed task 1");
// //   callback();
// // }

// // function myFunc2() {
// //   console.log("Completed task 2 ");
// // }

// // myFunc1(myFunc2);

// function getNum(x, y, onSucess, onFailure) {
//   if (typeof x === "number" && typeof y === "number") {
//     onSucess(x, y);
//   } else {
//     onFailure();
//   }
// }

// function addNum(a, b) {
//   console.log(a + b);
// }
// function onFailure() {
//   console.log("Wrong datatype");
// }

// getNum(5, 6, addNum, onFailure);

// callback hell

function getNum(x, y, onSuccess, onFailure) {
  if (typeof x === "number" && typeof y === "number") {
    onSuccess(x, y);
  } else {
    onFailure();
  }
}

getNum(
  5,
  31,
  (a, b) => {
    console.log(a + b);
  },
  () => {
    console.log("sorry it failed");
  }
);

// this is a callback function of getting and adding two numbers

function inputNumAndSubtract(x, y, onSuccess, onFailure) {
  if (typeof x === "number" && typeof y === "number") {
    onSuccess(x, y);
  } else {
    onFailure();
  }
}

inputNumAndSubtract(
  10,
  2,
  (a, b) => {
    console.log(a - b);
  },
  () => {
    console.log("sorry buddy");
  }
);

// this is a callback function to find and subtract two numbers  


