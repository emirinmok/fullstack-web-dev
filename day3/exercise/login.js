// Declare a variable username and set it to "admin"

// Declare a variable isLoggedIn set to true or false

// Write logic:

// If isLoggedIn and username is "admin", print: "Welcome back, Admin!"

// Else if isLoggedIn but not "admin", print: "Welcome, user."

// Else print: "Please log in."

// Bonus: Try rewriting it using the ternary operator.

let username = "admin";
let isLoggedIn = true;

if (isLoggedIn && username === "admin") {
  console.log("Welcome back, Admin!");
} else if (isLoggedIn && username !== "admin") {
  console.log("Welcome, user " + username);
} else {
  console.log("Please log in.");
}

let message = isLoggedIn
  ? (username === "admin" ? "Welcome back, Admin!" : "Welcome, user "+username)
  : "Please log in.";

console.log(message);