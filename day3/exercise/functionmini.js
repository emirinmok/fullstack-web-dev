// Write a function sayHello() that prints a greeting

// Write a function square(num) that returns the square of a number

// // Write an arrow function isEven(n) that returns true if n is even

function sayHello() {
  console.log("Hello! ");
}

function square(num) {
  return num * num;
}

console.log(square(3));

const isEven = (n) => n % 2 === 0;

sayHello();
console.log(square(4));
console.log(isEven(7));
console.log(isEven(8));
