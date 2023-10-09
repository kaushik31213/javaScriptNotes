// javascript is single threaded synchronous programming language

// its async behaviour is provided by the browser

// sync code runs in the GEC one by one , the next code doesnt run until the previous code finishes its execution

// but in case of async code , they all start running at the same time , and provides the output once the specified time is finished

// for example

//                 setTimeout
// runs after a specific time that is provided by the user

console.log("Hi");
setTimeout(() => {
  console.log("Inside async func");
}, 1000);
console.log("Bye");

// when a async func is executed it does not get exectued in the GEC . But it moves to the callback queue provided by the browser . Once the GEC is empty or when all the sync code gets executed , then it pops from the callback queue to the GEC . This process is monitored by the event loop

// async code are not blocking code  but sync code blocks the code until its finisnes executing

// setTimeout returns an id that can be stored in a variable

// that id can be used to stop the setTimeoutfunction by uing clearTimeout(id)

// Set interval
// continues running for the specific time provided

// setInterval(() => {
//   console.log(Math.floor(Math.random() * 100)) ;
// },500);
