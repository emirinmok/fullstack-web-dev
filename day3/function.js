// A function is a reusable block of code that you can represent with a name.

x = 1;

function addOne() {
  x += 1;
}

addOne();
addOne();
addOne();
addOne();
addOne();

console.log(x);

function addTwo() {
  x += 2;
}

addTwo();
addTwo();

console.log(x);

function convertXToPound() {
  x = x * 2.2;
}

console.log(x);

// Arguments

let myHeight = 164
let myFriendHeight = 175

function cmToFeet(height){
    return height * 0.0328

}

// console.log(cmToFeet(myHeight));
// console.log(cmToFeet(myFriendHeight));

myHeightInFeet = cmToFeet(myHeight);

console.log(myHeightInFeet);