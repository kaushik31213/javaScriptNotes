const func1 = () => {
  const addTwo = (x, y) => console.log(x + y);
  const mulTwo = (x, y) => console.log(x * y);
  console.log("inside func1");
  addTwo(2, 3);
  mulTwo(2, 3);
};
func1();

// this is an xample of functions insdie functions , here inside func1 there are two functions addTwo and mulTwo which should be invoked inside the functionin order to run

// ==============LEXICAL SCOPE =======================

const myVar = "val1";
function myFunc() {
  function myFunc2() {
    function myFunc2Again() {
      console.log(myVar);
    }
  }

  console.log(myVar);
}

myFunc();

// in this example the constant myVar is declared on the global scope with the value of val1,  and a function myFunc is created.
// inside the myFUnc function there is another function called myFunc2 and again inside myFunc2 there is another function called myFunc2Again
// inside that myFunc2Again we are trying to access the myVar variable, so it first checks in its scope for that variable , it doesnt find it so it will search for the variable in its parents scope which is known as lexical scope
// it will still not find myVar in myFunc2 , so again it will search for it and move to the top of the chain until it finds it in the global scope and then gets access to the variable.
// so to be simple , a function inside a function searches for a variable in its scope and if it doesnt get there it will search it on its lexical environment and that environment simply means lexical scope
