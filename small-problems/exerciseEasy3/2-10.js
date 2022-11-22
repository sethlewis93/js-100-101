// Write a function that will take a short line of text,
// and write it to the console log within a box.

// Examples:

// logInBox('To boldly go where no one has gone before.');

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// logInBox('');
// +--+
// |  |
// |  |
// |  |

function logInBox(str) {
  let horizontalRule = "+" + "-".repeat(str.length + 2) + "+";
  let emptyLine = "|" + " ".repeat(str.length + 2) + "|";

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${str} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox("X");
