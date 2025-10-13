// Create an array of 5 of your favorite movies.

// Log the first and last movie.

// Use push() to add one, and pop() to remove one.

// Create an object profile with your name, age, and an array of 3 hobbies.

// Log your second hobby.

let favoriteMovies = [
  "Harry Potter",
  "How to Train Your Dragon",
  "Interstellar",
  "Spirited Away",
  "The Dark Knight",
];

console.log("First movie:", favoriteMovies[0]);
console.log("Last movie:", favoriteMovies[favoriteMovies.length - 1]);

favoriteMovies.push("Avatar");
console.log("After push:", favoriteMovies);

let removedMovie = favoriteMovies.pop();
console.log("Removed movie:", removedMovie);
console.log("After pop:", favoriteMovies);

let profile = {
  name: "Emirin",
  age: 13,
  hobbies: ["Talking", "shoping", "coding"],
};

console.log("Second hobby:", profile.hobbies[1]);
