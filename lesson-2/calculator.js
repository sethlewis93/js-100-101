const readline = require("readline-sync");
let message = require("./calculator-messages");

function prompt(message) {
  console.log(`=> ${message}`);
}

// Validate Number input function
function invalidNumber(number) {
  // Returns true if the input is either empty string or not a number
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

while (true) {
  // Ask and receive the first number
  message.welcome();
  message.num1();
  let num1 = readline.question();

  // Validate first number
  while (invalidNumber(num1)) {
    message.invalidNum();
    num1 = readline.question();
  }

  // Ask and receive second number.
  message.num2();
  let num2 = readline.question();

  // Validate the second number
  while (invalidNumber(num2)) {
    message.invalidNum();
    num2 = readline.question();
  }

  // User selects the operations
  message.operations();

  // Validate operation input
  let operation = readline.question();
  while (!["1", "2", "3", "4"].includes(operation)) {
    message.invalidOperation();
    operation = readline.question();
  }

  // Perform the operations
  let output;
  switch (operation) {
    case "1":
      output = `The ouput is ${Number(num1) + Number(num2)}`;
      break;
    case "2":
      output = `The output is ${Number(num1) - Number(num2)}`;
      break;
    case "3":
      output = `The output is ${Number(num1) * Number(num2)}`;
      break;
    case "4":
      output = `The output is ${Number(num1) / Number(num2)}`;
      break;
  }

  // Print the output
  console.log(output);

  // Ask the user if they'd like to do another calculation
  message.startOver();
  let answer = readline.question();
  if (answer.toLowerCase() !== "y") {
    prompt("Goodbye!");
    break;
  }
}
