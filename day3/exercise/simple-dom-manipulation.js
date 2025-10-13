// Assignment: Simple DOM Manipulation
// Create an HTML file with:

// A heading (h1)

// A paragraph (p)

// A button (button)

// Write JavaScript to:

// Change the heading text on button click

// Change the paragraph color on hover

// Hide the paragraph when clicked

const heading = document.getElementById("myHeading");
const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("myButton");


button.addEventListener("click", () => {
  heading.textContent = "Heading has been changed!";
});


paragraph.addEventListener("mouseenter", () => {
  paragraph.style.color = "red";
});
paragraph.addEventListener("mouseleave", () => {
  paragraph.style.color = "pink";
});


paragraph.addEventListener("click", () => {
  paragraph.style.display = "none";
});
