let obj1 = {
  key1: "val1",
  key2: "val2",
};

let obj2 = {
  key3: "val3",
  key4: "val4",
};

// console.log(obj1);

// in an object one key can be present only once

let newObj = { ...obj1, ...obj2 };

console.log(newObj);

let newObj2 = { ..."abc" };
console.log(newObj2);
// with this we can print { 0 : a , 1: b, 2 : c }

// Destructuring of objects

let user = {
  id: 1,
  email: "xyz@gmail.com",
  group: 2,
  project: "none",
};

// let userID = user.id;
// console.log(userID);

// let userEmail = user.email;
// console.log(userEmail);

let { id, email, ...leftKeys } = user;
console.log(id);
console.log(email);
console.log(leftKeys);

// this is the easiest way to destructure an object
