let readline = require("readline-sync");

// let m = p * (j / (1 - Math.pow((1 + j), (-n))));

// Shorthand for readline.question()
let ask = readline.question;

// Get principal
let principal = Number(ask("What is the principal amount of the loan?: ")); // <- potential guard case: user putting "$" in front of the integer
console.log(`PRINCIPAL: $${principal}`);

// Get APR, convert to monthly interest rate

let monthlyInterest = Number(ask("What is the current APR?: ") / 100 / 12) * 100; // <- https://www.thebalancemoney.com/calculate-monthly-interest-315421
console.log(`Monthly APR: ${monthlyInterest}%`);

// Get duration of loan and conver to months
let durationInMonths = Number(ask("What is the length of the loan in months?: "));
console.log(`DURATION: ${durationInMonths} months`)

// Calculate the monthly payment
let monthlyPayment =
principal * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-durationInMonths)))); // <- PROBLEM HERE: principal * monthlyInterest is the only calculation running. Need to find out why.

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
