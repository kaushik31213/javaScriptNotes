// DOM
// Document object model

// it is a tree like structure
//  Using DOM, the JavaScript gets access to HTML as well as CSS of the web page and can also add behavior to the HTML elements. so basically Document Object Model is an API that represents and interacts with HTML or XML documents.

// console.dir(document);

// select elements of document object by getelemtbyid

// const heading = document.getElementById("main-heading");

// this returns an object

// instead of getelementby use query selector

// const heading = document.querySelector("#main-heading");
// console.log(heading);

// const header = document.querySelector(".header");
// console.log(header);

// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);

// queryselectorall returns a nodelist which is an array like item

// to change text

// console.log(heading.textContent);
// heading.textContent = "This is changed using textContent";
// // with the help of textContent we can change the text of the selected item
// // it prints all the text content from the HTML document

// console.log(heading.innerText);
// innerText only shows what showing on the screen

// header.textContent = "This is my new header now";

// TO change the styles of elements

const heading = document.querySelector("#main-heading");
heading.style.color = "red";
heading.style.backgroudColor = "blue";

// so here we learned how to select the elements from HTML using JS and modifying or changing them according to our needs
// we also learned that we change change the styles too using JS
