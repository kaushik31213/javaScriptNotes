// primitive and reference data types

let num1 = 5;
let num2 = num1;
console.log(num1, num2);
num1++;
console.log("after incrementing arr1 by 1");
console.log(num1, num2);

// in this example we get an idea about primitive type, after icrementing num1 the value of num2 doesnt get changed and it remains the same

let arr1 = ["item1", "item2"];
let arr2 = arr1;
console.log(arr1, arr2);
arr1.push("item3");
console.log("after pushing item3 to the array");
console.log(arr1, arr2);
console.log(arr1 === arr2)

// but in case of reference types, arr1 got modified and it affected the arr2 . this is reference types

// This happens because in case of,
// primitive data types each and every variable declared gets its own memory location in the stack. Each and every element has their unique memory location, in case of the example both num1 and num2 gets different memory locations, so when we changed the value of num1 , it didnt affect the value of num2
// it happens because it doesnt take up much memory



// in case of reference data types the data gets stored in the heap instead of stack, in the there exists a pointer which stores the address of the ref data types, in the example arr1 and arr2 gets the same pointer and the same address in the stack.
// when changes are made in the arr1 , arr2 gets changed because in the stack it was pointing to the same array
// this happens because ref data types take up larger space, so to manage space this happens

