var x = 5; //ES5
let y = 10; //Essential JavaScript 5+ (ES5+)

console.log(x + y);

console.log("1" + "1");

const myName = "Emirin";

// myName = "Justin";

console.log("My name is " + myName);

console.log(x * x);

console.log(x + " times " + x + " = " + x * x);

// BASICS

// DATA TYPES

// Integer (2 billion positive, 2 billion negative)
// Decimals (Double, float)
// Boolean (0, 1)
// String (Basically words enclosed in "" quotation marks)

let distance = 5.5;
let goThere = true;

console.log(distance);
console.log(goThere);

console.log(typeof "goThere");

// NON-PRIMITIVE DATA TYPES
// Objects (Represented by {})
// Array (Represented by [])

// Array
let students = ["Zayn", "Harry", "Niall"];
console.log(students[2]);

// Object
let myDetails = {
  name: "Emirin",
  age: "12",
  city: "Texas",
  students: students,
};
console.log(myDetails.students[0]);

let details = [
  {
    name: "Adam",
    age: "8",
    city: "Disney",
  },

  {
    name: "Taylor",
    age: "50",
    city: "Kingdom",
  },
  {
    name: "Katy",
    age: "9",
    city: "London",
  },
];

console.log(details);
