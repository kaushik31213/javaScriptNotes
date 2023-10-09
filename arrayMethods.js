// array push pop
// Array shift unshift

let names = ["Kaushik", "Kavery", "Kohli", "Rohit"];
console.log(names);
// to add items in the end ,use push

names.push("Dhoni");
console.log(names);

// mutable method , changes the original array

// similary pop removes from the end

let poppedName = names.pop();
console.log(names);
console.log(`Popped name is ${poppedName}`);

// it returns the item that is popped

// Similary unshift adds item at the beginning

names.unshift("Gill");
console.log(names);

// And shift removes item from the starting
let shiftedName = names.shift();
console.log(names);
console.log(`Shifted name is ${shiftedName}`);

// push and pop are faster than shift and unshift as push pop operations work at the end of an array, so it doesnt affect the indexes of the array
// whereas shift and unshift affects the indexes of the array as it gets added in the beginning
