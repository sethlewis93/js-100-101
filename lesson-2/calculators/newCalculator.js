// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require("readline-sync");

let firstNum = readline.question(`Please enter the first number `);

let secondNum = readline.question(`Please enter the second number `);

let operation =
  readline.question(`Please select the operation you'd like to perform. Select:
    "1" for Addition;
    "2" for Subtraction; 
    "3" for Multiplication;
    "4" for Division;
`);

function performOperation(userChoice) {
  switch (parseInt(userChoice)) {
    case 1:
      console.log(parseInt(firstNum) + parseInt(secondNum));
      break;
    case 2:
      console.log(firstNum - secondNum);
      break;
    case 3:
      console.log(firstNum * secondNum);
      break;
    case 4:
      console.log(firstNum / secondNum);
      break;
  }
}

performOperation(operation);
