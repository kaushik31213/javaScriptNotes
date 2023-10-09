// function addTwo(x, y) {
//   console.log(x + y);
// }
// // addTwo(4, 5);
// suppose we dont want to pass second argument

// addTwo(4);

// this will print the output as NaN as number + undefined = NaN

// so we can use default params if we dont want to input the arguments by oursselves

function addTwo(x, y = 5) {
  console.log(x + y);
}
addTwo(4);

// here we gave a default value to y which is 5 and its value willl be used until we manually put the valuw while calling the fucntion
