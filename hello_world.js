// hello_world.js
// CSE 310 - Applied Programming
// A first JavaScript program: writes "Hello World" on a web page,
// followed by a short personalized greeting.
//
// Run it by opening index.html in a web browser.

// Find the elements in index.html where the text will go.
const message = document.getElementById("message");
const greeting = document.getElementById("greeting");

// The classic first message, written into the page.
message.textContent = "Hello World";

// A small personal touch: greet the author and show today's date.
const author = "Arturo";
const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Template literals (backticks) let us insert variables into a string.
greeting.textContent = `Greetings from ${author}! Today is ${today}.`;
