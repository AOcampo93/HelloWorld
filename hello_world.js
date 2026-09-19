// hello_world.js
// CSE 310 - Applied Programming
// A first JavaScript program: prints "Hello World" to the console,
// followed by a short personalized greeting.
//
// Run it with:  node hello_world.js

// The classic first message.
console.log("Hello World");

// A small personal touch: greet the author and show today's date.
const author = "Arturo";
const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Template literals (backticks) let us insert variables into a string.
console.log(`Greetings from ${author}! Today is ${today}.`);
