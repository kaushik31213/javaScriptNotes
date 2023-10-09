function myFunc1() {
  function sayHi() {
    console.log("Hi");
  }
  return sayHi;
}

const ans = myFunc1();

ans();

// this function myfunc1 is returning a function sayhi in it, so when we save that function in a variable , the variable itself becomes a function . It has the properties of the function which is returned , so we can call or invoke that variable as a function is stored inside it

// this is simple example of function returning functions

// when a function accepts functions as a parameter or returns a function itself or does both of these
// That type of functions are called higher order functions

function Hello() {
  console.log("Hello");
  return function Bye() {
    return "Bye";
  };
}
const output = Hello();
console.log(output());
