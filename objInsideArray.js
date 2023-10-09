const users = [
  {
    userID: 1,
    firstName: "Kaushik",
    gender: "Male",
  },
  {
    userID: 2,
    firstName: "Kavery",
    gender: "female",
  },
  {
    userID: 3,
    firstName: "Kohli",
    gender: "Male",
  },
  {
    userID: 4,
    firstName: "Rohit",
    gender: "Male",
  },
];

console.log(users);

// iterating using for in loop

// for (let obj in users) {
//   console.log(users[obj]);
// }

// iterating using while loop

// let i = 0;
// while (i < users.length) {
//   i++;
//   console.log(users[i]);
// }

// iterating using for of loop

for (let objects of users) {
  console.log(objects.userID);
  console.log(objects.firstName);
}
