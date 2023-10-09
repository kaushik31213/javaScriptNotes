// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// sum of first n natural numbers

// let num = 20;
// let total = 0;
// let i = 0;
// while (i <= num) {
//   total += i;
//   i++;
// }
// console.log(total);

// let num = prompt("Enter the number");
// let i = 0;
// let total = 0;
// while (i <= num) {
//   total += i;
//   i++;
// }
// console.log(total);

// OR

let n = 10;
let total = (n * (n + 1)) / 2;
console.log(total);

// this solutio is faster as it has the big O notation of o(1)

// --------------DO WHILE loop-------------

// let i = 20;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// in while loop if the first condition is false it wont print anything
let i = 10;
do {
  console.log(i);
  i++;
} while (i < 9);

// but using do while loop even if the first condition is false it prints the value at least once
