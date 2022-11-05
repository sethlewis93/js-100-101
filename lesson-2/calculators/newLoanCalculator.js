// Re-doing calc exercise for review.

let readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidInput(input) {
  return input.trimStart() === "" || input < 0 || Number.isNaN(Number(input));
}

while (true) {
  // Principal & validation
  prompt("What is the principal of the loan?");
  let principalAmount = readline.question();

  while (isInvalidInput(principalAmount)) {
    prompt("Please enter a number with no symbols or other characters");
    principalAmount = readline.question();
  }

  // Duration & validation
  prompt("What is the duration of the loan in months?");
  let loanDuration = readline.question();

  while (isInvalidInput(loanDuration)) {
    prompt("Please enter a number with no symbols or other characters");
    loanDuration = readline.question();
  }

  // Interest Rate (APY) & validation
  prompt("What is the interest rate (APY)?");
  let annualInterestRate = readline.question();

  while (isInvalidInput(annualInterestRate)) {
    prompt("Please enter a number with no symbols or other characters");
    annualInterestRate = readline.question();
  }

  /** CALC FORMULA */

  let monthlyInterestRate = annualInterestRate / 100 / 12;

  let monthlyPayment =
    principalAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDuration)));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  // Restart or exit?
  prompt(
    "Would you like to do another calculation? Enter 'yes' or 'y' to continue"
  );
  let answer = readline.question().toLowerCase();

  // Validate user response
  if (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'yes' or 'y' to continue or 'no' or 'n' to exit");
    answer = readline.question.toLowerCase();
  }

  // Terminate program
  if (answer[0] === "n") break;
}
