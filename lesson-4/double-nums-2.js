let myNumbers = [1, 4, 3, 7, 2, 6];

// non-mutating
function doubleNumbers(numbers, multiplier) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * multiplier);

    counter += 1;
  }

  return doubledNums;
}

console.log(doubleNumbers(myNumbers, 3));
