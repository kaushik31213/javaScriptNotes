// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const result = numbers.some((num) => num % 2 === 0);
// console.log(result);

// // some method returns true or false
// // if any one of the elemtn or more than that are true according to the condition, then it will return ture
// // in case of every all that elemnts had to be meet the conditions to return true but in  some only one element is enough

// const products = [
//   { productID: 1, productName: "IPhone", productPrice: 50000 },
//   { productID: 3, productName: "POCO", productPrice: 15000 },
//   { productID: 2, productName: "Samsung", productPrice: 40000 },
//   { productID: 4, productName: "MI", productPrice: 10000 },
// ];

// const productsContainID = products.some((num) => num.productPrice === 45000);

// // here only one element meets the true condition , still some method returns true as one element is true

// const productContainID = products.every((num) => num.productID === 3);
// console.log(productContainID);

// // here it every method all the productID has to be 3 in order to return true , so that is the main difference between these two methods
