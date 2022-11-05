// Re-doing calc exercise for review.
let readline = require("readline-sync");
function prompt(message) {
  console.log(`=> ${message}`);
}

// EDGE CASES:
// 1.) Symobls (like $) at the beginning of string
// 2.) Symbols after numerical values (like % or "months")
function isInvalidInput(input) {
  return input.trimStart() === "" || Number.isNaN(Number(input));
}

while (true) {
  prompt("What is the principal of the loan?");
  let principalAmount = readline.question();

  // Validation code here
  while (isInvalidInput(principalAmount)) {
    prompt("Please enter a number with no symbols at the beginning");
    principalAmount = readline.question();
  }

  prompt("What is the duration of the loan in months?");
  let loanDuration = readline.question();

  prompt("What is the interest rate (APY)?");
  let annualInterestRate = readline.question();
}

/** CALC FORMULA */

let monthlyInterestRate = annualInterestRate / 100 / 12;

let monthlyPayment =
  principalAmount *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -loanDuration)));

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
