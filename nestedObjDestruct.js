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

// like this we can destructure an array of objects

// const [user1, user2, user3, user4] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);

// using this method we got the firstName from the first object and gender from the second and userID from the third object
// this is nested destructing
// first we destructured an array then we destructured objects in that array
const [{ firstName }, { gender }, { userID }] = users;
console.log(firstName);
console.log(gender);
console.log(userID);
