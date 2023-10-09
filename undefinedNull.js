// undefined
// null

let num;
console.log(typeof num);
// this will print undefined as the value is not declared

// whereas in case of const declaration the output will show an error
num = 10;
console.log(typeof num);
// in case of let we can assign the value later
// this feature of javascript is known as hoisting

// undefined is that data type where the value is yet to be given but the variable is declared

// in case of null, null means empty
let myNum = null;
console.log(typeof myNum);

// the type of null is an object
// it is bug in JS

// BigInt
let num2 = 200;
console.log(num);
// jS has a limit to store an integer
// which is  MAX_SAFE_INTEGER
// to store integers bigger than maxsafeint we use bigint
let num3 = BigInt(12);
console.log(num3);

// we can not use any operations with bigint and normal integers
