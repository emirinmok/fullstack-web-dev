// Assignment: Student Directory
// Create a file students.js:

// Define an array students containing 3 objects, each with:

// name (string)

// age (number)

// isEnrolled (boolean)

// Log all student names

// Log only those who are enrolled

// Add a new student using .push()

// Remove one student using .pop()

let students = [
  { name: "Emirin", age: 14, isEnrolled: true },
  { name: "Damia", age: 22, isEnrolled: false },
  { name: "Asmirin", age: 19, isEnrolled: true },
];

console.log("All student names:");
students.forEach((student) => console.log(student.name));

console.log("\nEnrolled students:");
students
  .filter((student) => student.isEnrolled)
  .forEach((student) => console.log(student.name));

students.push({ name: "Jamilah", age: 21, isEnrolled: true });
console.log("\nAfter adding a new student:");
students.forEach((student) => console.log(student.name));

let removedStudent = students.pop();
console.log("\nRemoved student:", removedStudent.name);
console.log("Remaining students:");
students.forEach((student) => console.log(student.name));
