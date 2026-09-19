# Hello World

## Overview

This project is my first program for CSE 310 - Applied Programming. It is a simple JavaScript program that writes "Hello World" on a web page. Below that, it shows a short personal greeting with today's date.

The purpose of this project is to learn the basics of JavaScript and to practice the Git and GitHub workflow I will use for the rest of the course: creating a local repository, making commits, and pushing the code to a public GitHub repository.

The project has two files:

- `index.html` is the web page. It has empty spaces for the message and the greeting.
- `hello_world.js` finds those spaces and writes the text into them.

**See it live:** [https://aocampo93.github.io/HelloWorld/](https://aocampo93.github.io/HelloWorld/)

To run the program on your computer, open `index.html` in any web browser. You can double-click the file, or run this command from the project folder on macOS:

```bash
open index.html
```

The page shows:

```
Hello World
Greetings from Arturo! Today is Saturday, September 19, 2026.
```

(The date will match the day you open the page.)

Software Demo Video: https://youtu.be/c8EGB75Dty0

## Development Environment

- **Language:** JavaScript, with HTML and CSS for the page
- **Runs in:** any web browser
- **Editor:** Visual Studio Code
- **Version control:** Git
- **Hosting:** GitHub, with the GitHub CLI (`gh`) used to create the repository

## Useful Websites

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN - Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs - Getting Started](https://docs.github.com/en/get-started)
- [GitHub CLI Manual](https://cli.github.com/manual/)

## Future Work

- Add a text box so visitors can type their name and get a personal greeting.
- Add a button to switch the greeting between English and Spanish.
- Show the current time on the page and update it every second.
