//  let and const are block scope

//  var is function scope

{
  let firstName = "Kaushik";
}
// console.log(firstName);

// {} this is a block
// let and const are accessible only inside its block , outside it cannot be accessed. It will show an error

{
  var secondName = "Bora";
}
console.log(secondName);
//  but var is accessible even outside its block
// it can be accessed all over the js code
// so we priortize let and const so it doesnt cause hindrance in variable creation
