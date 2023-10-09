const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//   heading1.textContent = "1 sec is over";
//   heading1.style.color = "blue";
//   setTimeout(() => {
//     heading2.textContent = "2 secs are over";
//     heading2.style.color = "red";
//     setTimeout(() => {
//       heading3.textContent = "3 secs are over";
//       heading3.style.color = "yellow";
//       setTimeout(() => {
//         heading4.textContent = "4 secs are over";
//         heading4.style.color = "orange";
//         setTimeout(() => {
//           heading5.textContent = "5 secs are over";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "6 secs are over";
//             heading6.style.color = "pink";
//             setTimeout(() => {
//               heading7.textContent = "7 secs are over";
//               heading7.style.color = "blue";
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// this is done by chaining settimeout functions
// we can also do it by callback functions

function changeTextAndColor(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("not found");
      }
    });
  });
}

changeTextAndColor(heading1, "Done", blue, 1000)
  .then(() => changeTextAndColor(heading2, "Done", red, 1000))
  .then(() => changeTextAndColor(heading3, "Done", green, 1000))
  .then(() => changeTextAndColor(heading4, "Done", yellow, 1000))
  .then(() => changeTextAndColor(heading5, "Done", orange, 1000))
  .then(() => changeTextAndColor(heading6, "Done", pink, 1000))
  .then(() => changeTextAndColor(heading7, "Done", violet, 1000))
  .then(() => changeTextAndColor(heading8, "Done", purple, 1000));
  .catch((error)=>{
    console.log(error)})