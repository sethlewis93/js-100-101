let readline = require("readline-sync");

function prompt(message) {
  console.log(`==> ${message}`);
}

function isInvalidInput(input) {
  return (
    input.trimStart() === "" ||
    Number(input) <= 0 ||
    Number.isNaN(Number(input))
  );
}

// Get principal
prompt("What is the principal amount of the loan?: ");
let principal = readline.question();

while (isInvalidInput(principal)) {
  prompt("Invalid input: please enter the loan amount in numerals only"); // refactor all the log calls
  principal = readline.question();
}
prompt(`==> PRINCIPAL: $${principal}`);

// Get interest rate
prompt("What is the current APR?: ");
let interestRate = readline.question();

while (isInvalidInput(interestRate)) {
  prompt("Invalid input: pelase enter the APR in numerals only");
  interestRate = readline.question();
}
prompt(`==> APR: ${interestRate}%`);

// Get duration of loan and convert to months
prompt("What is the length of the loan in months?: ");
let lengthInMonths = readline.question();

while (isInvalidInput(lengthInMonths)) {
  prompt(
    "Invalid input: please enter the duration of the loan in months only without decimal places."
  );
  lengthInMonths = readline.question();
}
prompt(`==> DURATION: ${lengthInMonths} months`);

// Calculate monthly interest
let annualRate = Number(interestRate) / 100;
let monthlyRate = (annualRate / 12) * 100;

// Calculate monthly payment
let monthlyPayment =
  Number(principal) *
  (monthlyRate / (1 - Math.pow(1 + monthlyRate, -Number(lengthInMonths))));

prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
