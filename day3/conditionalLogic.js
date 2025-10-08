let x = 500;

console.log(x === 7);

// == Checks value only
// === Checks both value and data type

// >, < Larger than, smaller than
// >=, <= Larger than or equals to, smaller than or equals to

// OPERATORS

// COMPARISON OPERATORS

if (x > 5) {
  console.log("X is larger than 5");
} else {
  console.log("X is not larger than 5");
}

if (x > 700) {
  console.log("X is larger than 700");
} else if (x > 400) {
  console.log("X is smaller than 500");
} else {
  console.log("X is smaller than 400");
}

// LOGIC GATES

// && And gate
// || OR gate
// ! Not 

age = 10;
weight = 70;

if (age < 15 && weight >50){
    console.log("Overweight for this age")
}else{
    console.log("Not overweight for this age")
}

let money =false
let vip = false

if (money || vip){
    console.log("Allowed Entry")
}else{
    console.log("Denied Entry")
}

let y = 8

if (y != 5){
    console.log("Y is NOT equals to 5");
}else{
    console.log("Y is equals to 5");
}
