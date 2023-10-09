// let winningNum = 20;
// let userGuess = prompt("Enter your number");
// if (winningNum === userGuess) {
//   console.log("You win");
// } else {
//   if (winningNum < userGuess) {
//     console.log("Go lower");
//   } else {
//     console.log("Go higher");
//   }
// }

// nested if else only when the if else is continued after the else of the first loop

// Now we will learn about if else if else if else

let bodyTemp = prompt("Enter your body temperature");
if (bodyTemp > 38) {
  console.log("You have high fever");
} else if (bodyTemp > 36) {
  console.log("You are normal");
} else if (bodyTemp > 34) {
  console.log("You are suffering from low pressure");
} else if (bodyTemp > 30) {
  console.log("Go see the doctor");
} else {
  console.log("You are dead");
}
