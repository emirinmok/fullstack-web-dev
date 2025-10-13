// Assignment: Build a Function Toolkit
// Create a file functions.js and define the following functions:

// greet(name) – prints a greeting

// toCelsius(fahrenheit) – converts Fahrenheit to Celsius

// isAdult(age) – returns true if age ≥ 18

// randomBetween(min, max) – returns a random number between min and max

// functions.js


const greet = (name) => console.log(`Hello, ${name}!`);


const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;


const isAdult = (age) => age >= 18;


const randomBetween = (min, max) => Math.random() * (max - min) + min;


greet("Emirin");               
console.log(toCelsius(98.6)); 
console.log(isAdult(20));     
console.log(randomBetween(5, 10)); 
