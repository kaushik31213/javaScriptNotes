// BREAK keyword

console.log("BREAK");
for (let i = 1; i < 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

// when we use break keyword, it stops the running operation and breaks in the outputs the previous operated values.
// here in this exaple the break keyword is used when the value of i reaches to 4,, so when i reaches 4 it breaks the for loop and gives the output of 1,2,3. it wont further run the code even if the for loop conditions are not met

// CONTINUE keyword
console.log("CONTINUE");
for (let i = 1; i < 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}

// continue keyword is used the skip the value, when it meets the condition to continue it skips that part
// here in this example we used the continue when the value o i is equal to 4, so when it reaches 4 it will immdiately continue or skip that part and keep running the next part of the code
