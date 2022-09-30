const readline = require("readline-sync");

// Basic prompt
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
  prompt("Welcome to calculator!");
  prompt("Please enter the first number.");
  let num1 = readline.question();

  // Validate first number
  while (invalidNumber(num1)) {
    prompt("Hmmm.... that doesn't look like a valid number");
    num1 = readline.question();
  }

  // Ask and receive second number.
  prompt("Please enter the second number");
  let num2 = readline.question();

  // Validate the second number
  while (invalidNumber(num2)) {
    prompt("Hmm... that doesn't look like a valid number");
    num2 = readline.question();
  }

  // User selects the operations
  console.log(`=> What operation would you like to perform on these numbers? You can select:
  
      "1" for Addition, 
      "2" for Subtraction, 
      "3" for Multiplication, or
      "4" for Division.
  
  `);

  // Validate operation input
  let operation = readline.question();
  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("Please select a valid operation.");
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
  prompt("Would you like to perform another calculation (y/n)?");
  let answer = readline.question();
  if (answer.toLowerCase() !== "y") {
    prompt("Goodbye!");
    break;
  }
}
