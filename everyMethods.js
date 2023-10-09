const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = numbers.every((num) => {
  return num % 2 === 0;
});
console.log(result);

// this method checks each and every element in an array and returns true or false according to the condition

const products = [
  { productID: 1, productName: "IPhone", productPrice: 50000 },
  { productID: 3, productName: "POCO", productPrice: 15000 },
  { productID: 2, productName: "Samsung", productPrice: 40000 },
  { productID: 4, productName: "MI", productPrice: 10000 },
];

const priceLessThan = products.every((price) => {
  return price.productPrice < 60000;
});
console.log(priceLessThan);
