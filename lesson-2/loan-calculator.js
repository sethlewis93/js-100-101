let readline = require("readline-sync");

// Shorthand for readline.question()
let ask = readline.question;

// Get principal
let principal = Number(ask("What is the principal amount of the loan?: "));
if (isNaN(principal)) {
  console.log("Invalid input: please enter the loan amount in numerals only");
  principal = Number(ask("What is the principal amount of the loan?: "));
}
console.log(`PRINCIPAL: $${principal}`);

// Get APR, convert to monthly interest rate
let monthlyInterest =
  Number(ask("What is the current APR?: ") / 100 / 12) * 100;

if (isNaN(monthlyInterest)) {
  console.log("Invalid input: pelase enter the APR in numerals only");
  monthlyInterest = Number(ask("What is the current APR?: ") / 100 / 12) * 100;
}
console.log(`Monthly APR: ${monthlyInterest}%`);

// Get duration of loan and convert to months
let durationInMonths = Number(
  ask("What is the length of the loan in months?: ")
);
if (!Number.isInteger(durationInMonths) || isNaN(durationInMonths)) {
  console.log(
    "Invalid input: please enter the duration of the loan in months only without decimal places."
  );
  durationInMonths = Number(ask("What is the length of the loan in months?: "));
}
console.log(`DURATION: ${durationInMonths} months`);

// Calculate the monthly payment
let monthlyPayment =
  principal *
  (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -durationInMonths))); // <- PROBLEM HERE: principal * monthlyInterest is the only calculation running. Need to find out why.

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
