// Try coding a function that lets you multiply every array item
// by a specified value.
//As with doubleNumbers, don't mutate the array, but return a new array instead.

let numbers = [1, 2, 3, 4, 5, 6];

function multiply(arr, multiplier) {
  let multipliedNums = [];

  for (let idx = 0; idx < arr.length; idx++) {
    multipliedNums.push(arr[idx] * multiplier);
  }

  return multipliedNums;
}

console.log(multiply(numbers, 4));
