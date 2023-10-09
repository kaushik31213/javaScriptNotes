const animals = ["Dogs", "Cats", "Cows", "Goats", "Lions"];
const findAnimals = animals.find((animal) => {
  return animal.length === 5;
});
console.log(findAnimals);

// it prints only the first element which is true

const users = [
  { userID: 1, userName: "Kaushik" },
  { userID: 2, userName: "Kavery" },
  { userID: 3, userName: "Rohit" },
  { userID: 4, userName: "Kohli" },
  { userID: 5, userName: "Rahul" },
];

const userId = users.find((user) => {
  return user.userID === 3;
});
console.log(userId.userID);

// find method is used in order to find a single element in an array , for example here we had to find the user with userID 3 , so we used find method in order to get the userID with 3.
