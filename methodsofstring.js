// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "  Kaushik   ";

console.log(firstName.trim());
// trim will remove the white spaces within the string or variable

// STRINGS ARE IMMUTABLE

// So we have to create a different variable in order to store the new output of the string

// for example if we use trim method

// firstName.trim()

// this wont change the value of the firstName as strings are immutable, so we have to create another variable in order to store the trimmed output of the string

console.log(firstName.toUpperCase());

// this will print the string characters in uppercase
// it also requires the ouput to store in a different variable

// toLowerCase() works in a similar way to uppercase()

// startindex   endindex

// slice requires the first and last index of the string

let newString = firstName.slice(0, 4);

// so in this example it starts from 0 which is K and ends at 4th index which is h

// it will print from 0 to 3 where the 4th index or the end index is not included
