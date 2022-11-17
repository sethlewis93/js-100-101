// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

// P:
// Given an object where values are numerical,
// tally the numbers and print them to the console.

// E: 948

// D: Object -> Array of values -> Number to be printed

// A:
// Declare totalAges var and initialize with value of 0.
// Store the `ages` obj values in a `agesArr` var.
// Perform reduce on agesArr:
// -- Add the sum of prev value + current val
// -- Return that sum and store it in totalAges
// print totalAges

let totalAges = Object.values(ages).reduce((prev, curr) => prev + curr);

console.log(totalAges);
