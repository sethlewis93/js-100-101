// Re-doing calc exercise for review.
let readline = require("readline-sync");
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("What is the principal of the loan?");
let principalAmount = readline.question();

prompt("What is the duration of the loan in months?");
let loanDuration = readline.question();

prompt("What is the interest rate (APY)?");
let annualInterestRate = readline.question();
/** CALC FORMULA */

let monthlyInterestRate = annualInterestRate / 100 / 12;

let monthlyPayment =
  principalAmount *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -loanDuration)));

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
