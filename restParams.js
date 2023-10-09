function myFunc(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
myFunc(1, 2, 3, 4, 5, 6);

// in this case there are only 3 params created so it cant use the other arguments passed while invoking the fucntion , so in order to use the arguments we can use rest params which is ...c , this will create an array and store the left arguments other than a and b
// we can loop over the c array to access the values in it

function addAll(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  console.log(total);
}
addAll(1, 2, 3, 4, 5, 6);

// here in this example we created a rest params in func addAll , so it created an array of arguments passwed while invoking the fucntion
// we then acceseed the values of the array and then created a function to print the sum of all the values passed as argument
 