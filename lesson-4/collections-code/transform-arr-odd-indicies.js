// Here's an exercise for you:
// suppose we wanted to transform the numbers
// based on their position in the array rather than their value?
// Try coding a solution that doubles the numbers that have odd indices:

let myNumbers = [1, 4, 3, 7, 2, 6];

function doubledOddIndex(arr) {
  for (let counter = 0; counter < arr.length; counter += 1) {
    if (counter % 2 === 1) continue;
    let currentNum = arr[counter];
    arr[counter] = currentNum * 2; // mutation operation! This code includes a side effect...
  }

  return arr; // ...and a return value which is not recommended!
}

console.log(doubledOddIndex(myNumbers)); // => [2, 4, 6, 7, 4, 6]
console.log(myNumbers); // => [2, 4, 6, 7, 4, 6]
