//Promises are a feature provided by the browser

//  let friedRice = ["Mango", "Salt", "Rice", "Sugar", "Veggies"];
// let friedRicePromise = new Promise((resolve, reject) => {
//   if (
//     friedRice.includes("Salt") &&
//     friedRice.includes("Rice") &&
//     friedRice.includes("Veggies")
//   ) {
//     resolve("Fried rice");
//   } else {
//     reject("Could not find all items");
//   }
// });

// friedRicePromise
//   .then((friedRice) => {
//     console.log(friedRice);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

let kitchen = ["Water", "Maggi", "Oil", "Sugar", "Milk"];
let cookMaggi = new Promise((resolve, reject) => {
  if (
    kitchen.includes("Water") &&
    kitchen.includes("Oil") &&
    kitchen.includes("Maggi")
  ) {
    resolve("Your maggi is being prepared");
  } else {
    reject("Sorry you dont have all the items");
  }
});

cookMaggi
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.error(reject);
  });

//   in a promise we have to create a new promise using a constructor function promise,
// when we create a promise we get two callbacks with it , where the first callback is used for the resolved part and the second one is used for the rejected part
// with this a promise is being created
// after this we have to consume a promise
// we can do that with the help of .then and .catch
// .then also accepts callback which captures the resolved part and .catch contains the error

// Function returning promises

const store = ["milk", "water", "sugar", "pan"];

function makeTea() {
  return new Promise((resolve, reject) => {
    if (
      store.includes("milk") &&
      store.includes("sugar") &&
      store.includes("water")
    ) {
      resolve({ Dish: "Tea" });
    } else {
      reject("You need to buy more items");
    }
  });
}

makeTea()
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((rejected) => {
    console.log(rejected);
  });
