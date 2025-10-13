// Declares two numbers
let a = 8;
let b = 9;

// Prints the results of each arithmetic operator on them
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Logs comparisons using ==, ===, !=, >, <
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a > b);
console.log(a < b);

// Combines 2 boolean values using && and ||
console.log(a < b && a != b);
console.log(a == b || a > b);

// Demonstrates an expression with overridden precedence using parentheses
let result = (a + b) * 2;
console.log(result);
