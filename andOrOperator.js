let firstName = "kaushik";
let age = 25;
// if (firstName[0] === "k" && age === 25) {
//   console.log("name starts with k and age is 25");
// } else {
//   console.log("bye");
// }

// in AND operator both the conditions have to be true ...even if one condition is false the whole output gets false

if (firstName[0] === "k" || age === 25) {
  console.log("name starts with k and age is 25");
} else {
  console.log("bye");
}

// but in case of OR operators, both the conditions need not be true in order to get the output as true , only one true is enough to make the output true.
