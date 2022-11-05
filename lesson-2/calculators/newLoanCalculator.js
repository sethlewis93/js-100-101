// Re-doing calc exercise for review.

let principalAmount = 100000;
let loanDuration = 120; // Duration in months
let monthlyInterestRate = 0.005; // (6 / 100) / 12
/** CALC FORMULA */

let monthlyPayment =
  principalAmount *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -loanDuration)));

console.log(monthlyPayment.toFixed(2));
