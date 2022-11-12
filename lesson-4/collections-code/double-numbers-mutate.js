// If we wanted to, we could've decided that
// mutating the function argument is the right approach.

// Can you implement a doubleNumbers function that mutates its argument?

let myNumbers = [1, 4, 3, 7, 2, 6];

// non-mutating
function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}

// let myNumbers = [1, 4, 3, 7, 2, 6];
// doubleOddNumbers(myNumbers);  // => [2, 4, 6, 14, 2, 6]

// not mutated
// myNumbers;                    // => [1, 4, 3, 7, 2, 6]

function mutateDoubleNumbers(numbers) {
  return numbers.map((num) => num * 2);
}

console.log(mutateDoubleNumbers(myNumbers));
