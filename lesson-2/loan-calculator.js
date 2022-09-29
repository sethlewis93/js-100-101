let readline = require("readline-sync");

// Shorthand for readline.question()
let ask = readline.question;

function isInvalidInput(input) {
  console.log(typeof input);
  return input.trimStart() === "" || input <= 0 || isNaN(input);
}

// Get principal
let principal = ask("What is the principal amount of the loan?: ");
if (isInvalidInput(principal)) {
  console.log("Invalid input: please enter the loan amount in numerals only");
  principal = ask("What is the principal amount of the loan?: ");
}
console.log(`==> PRINCIPAL: $${principal}`);

// Get APR, convert to monthly interest rate
let monthlyInterest = (ask("What is the current APR?: ") / 100 / 12) * 100; // <- This is being COERCED to a typeof "number" and throwing an error on the input.trimStart(). Needed to revise the interest calculations anyhow which will solve this.

if (isInvalidInput(monthlyInterest)) {
  console.log("Invalid input: pelase enter the APR in numerals only");
  monthlyInterest = (ask("What is the current APR?: ") / 100 / 12) * 100;
}
console.log(`==> Monthly APR: ${monthlyInterest}%`);

// Get duration of loan and convert to months
let durationInMonths = Number(
  ask("What is the length of the loan in months?: ")
);
if (isInvalidInput(durationInMonths)) {
  console.log(
    "Invalid input: please enter the duration of the loan in months only without decimal places."
  );
  durationInMonths = ask("What is the length of the loan in months?: ");
}
console.log(`==> DURATION: ${durationInMonths} months`);

// Calculate the monthly payment
let monthlyPayment =
  principal *
  (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -durationInMonths)));

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
