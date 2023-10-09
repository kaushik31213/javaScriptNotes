let navItem = document.getElementsByTagName("a");
console.log(navItem);

// the getElementsByClassName returns the values in a html collection which is also an array like object . The elemnts in the collection can be accessed by indexes

// console.log(navItem[2].textContent);

// but in case of querySelector ,

// const navItem = document.querySelectorAll("a");
// console.log(navItem[1].textContent);

// // for (let item of navItem) {
//   item.style.color = "black";
//   item.style.backgroundColor = "#fff";
//   item.style.fontWeight = "bold";
// }

// similary we can also use forEach method in nodelist .
navItem = Array.from(navItem);
// by using this code we changed the html collection into an array
// and then we can use foreach method

navItem.forEach((item) => {
  item.style.color = "black";
  item.style.backgroundColor = "#fff";
  item.style.fontWeight = "bold";
});

// we get a nodelist instead of html collection
// here also we can access the elements using indexes

// we can use forEach in nodelist but no in case of html collection , so in order to use it we have to change it to array first
