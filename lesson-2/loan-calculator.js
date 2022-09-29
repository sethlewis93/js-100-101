let readline = require("readline-sync");

// Shorthand for readline.question()
let ask = readline.question;

function isInvalidInput(input) {
  return (
    input.trimStart() === "" ||
    Number(input) <= 0 ||
    Number.isNaN(Number(input))
  );
}

// Get principal
let principal = ask("What is the principal amount of the loan?: ");

if (isInvalidInput(principal)) {
  console.log("Invalid input: please enter the loan amount in numerals only"); // refactor all the log calls
  principal = ask("What is the principal amount of the loan?: ");
}
console.log(`==> PRINCIPAL: $${principal}`);

// Get interest rate
let interestRate = ask("What is the current APR?: ");

if (isInvalidInput(interestRate)) {
  console.log("Invalid input: pelase enter the APR in numerals only");
  interestRate = ask("What is the current APR?: ");
}
console.log(`==> APR: ${interestRate}%`);

// Get duration of loan and convert to months
let lengthInMonths = ask("What is the length of the loan in months?: ");

if (isInvalidInput(lengthInMonths)) {
  console.log(
    "Invalid input: please enter the duration of the loan in months only without decimal places."
  );
  lengthInMonths = ask("What is the length of the loan in months?: ");
}
console.log(`==> DURATION: ${lengthInMonths} months`);

// Calculate monthly interest
let annualRate = Number(interestRate) / 100;
let monthlyRate = (annualRate / 12) * 100;

// Calculate monthly payment
let monthlyPayment =
  Number(principal) *
  (monthlyRate / (1 - Math.pow(1 + monthlyRate, -Number(lengthInMonths))));

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
