const numbers = [2, 7, 1, 5, 21, 23];
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

// if we just use sort() without params it will print the output according to ASCII table

const letters = ["b", "d", "g", "e", "a", "c"];
letters.sort();
console.log(letters);

// it sorts letter in this way

// the reason is becuase sorting is done on the basis on letters or strings , in the string it works because these are all characters of a string but in case of numbers , the numbers are recognized as string values as per ASCII code , so it compares as per them ASCII .

// so we have to write a different code in order to sort numbers .
// sort method changes the original array
// it is a mutating method

// capital letters have the first priority as per ASCII code

const products = [
  { productID: 1, productName: "IPhone", productPrice: 50000 },
  { productID: 3, productName: "POCO", productPrice: 15000 },
  { productID: 2, productName: "Samsung", productPrice: 40000 },
  { productID: 4, productName: "MI", productPrice: 10000 },
];

const lowToHigh = [...products];

lowToHigh.sort((a, b) => {
  return a.productPrice - b.productPrice;
});
console.log(lowToHigh);
console.log(products);
