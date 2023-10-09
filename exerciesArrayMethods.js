// In this example, the Array.forEach() method is used to copy every element from one array to another.

const arr1 = [2, 3, 4, 5, 6];
const arr2 = [];
arr1.forEach((num) => {
  arr2.push(num * 2);
});
console.log(arr2);

// In this example, the method forEach() calculates the square of every element of the array.

const arr3 = [2, 3, 4, 5, 6];
const arr4 = [];
arr3.forEach((num) => {
  arr4.push(num * num);
});
console.log(arr4);
