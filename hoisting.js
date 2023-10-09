sayHi();

function sayHi() {
  console.log("Hi");
}

// here the fucntion is called before it is declared but it still provides the required output
// this behaviour only works with function declaration

// similary

console.log(num);
var num = 10;

// here also the output doesntt show an error even if num is accessed before its declaration
// this works with var keyword only
// in case of let and const it will show an error 
