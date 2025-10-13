// Print numbers 1 to 10 using a for loop

// Print only even numbers between 1 and 20

// Use a while loop to count down from 5 to 1

// Use a do...while loop to print "Hello!" 3 times

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("================================");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("================================");

let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}
console.log("================================");

let j = 0;
do {
  console.log("Hello!");
  j++;
} while (j < 3);
console.log("================================");
