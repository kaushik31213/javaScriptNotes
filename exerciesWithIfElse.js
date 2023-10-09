// to check if a number is odd or even

function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is a odd number`);
  }
}
evenOrOdd(21);

// to check if the input variable is a number or not

function isNum(input) {
  if (isNaN(input)) {
    console.log(`${input} is not a number`);
  } else {
    console.log(`${input} is a number`);
  }
}
isNum(20);

// to find the largest of two numbers

function largestNum(num1, num2) {
  if (num1 > num2) {
    console.log(`the larger of two is ${num1}`);
  } else if (num2 > num1) {
    console.log(`the larger of two is ${num2}`);
  } else {
    console.log("Both the numbers are equal");
  }
}
largestNum(12, 12);

// to find the largest of three numbers

function largestOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest number`);
  } else if (num2 > num3) {
    console.log(`${num2} is the largest number`);
  } else {
    console.log(`${num3} is the largest number`);
  }
}
largestOfThree(10, 5, 20);

// to Check if a triangle is equilateral, scalene, or isosceles

function findTriangleType(side1, side2, side3) {
  if (side1 == side2 && side1 == side3) {
    console.log(`Equilateral triangle.`);
  } else if (side1 == side2 || side2 == side3 || side1 == side3) {
    console.log(`Isosceles triangle.`);
  } else {
    console.log(`Scalene triangle.`);
  }
}

findTriangleType(12, 12, 12); //"Equilateral triangle."
findTriangleType(20, 20, 31); //"Isosceles triangle."
findTriangleType(5, 4, 3); //"Scalene triangle."

// to Find the a number is present in given range

function findRange(num, start, end) {
  if (num > start && num < end) {
    console.log(`${num} is inside ${start} and ${end}`);
  } else {
    console.log("not within range");
  }
}
findRange(2, 10, 30);
