// In the example below, we want to select all the 1s from an array of numbers.

let numbers = [1, 3, 9, 11, 1, 4, 1];
let ones = [];

for (let counter = 0; counter < numbers.length; counter += 1) {
  if (numbers[counter] === 1) ones.push(numbers[counter]);
}

console.log(ones);
