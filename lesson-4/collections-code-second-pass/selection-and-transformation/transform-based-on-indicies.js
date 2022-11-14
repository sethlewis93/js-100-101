// Here's an exercise for you:
// suppose we wanted to transform numbers based on their position in the array
// rather than their value?
//Try coding a solution that doubles the numbers that have odd indices:

let numbers = [1, 2, 3, 4, 5, 6];

function doubleOddIndicies(arr) {
  // declare new array
  let newArr = [];

  // for each element in the array:
  //-- IF index % 2 === 1:
  //---- number[idx] = number[idx] * 2

  for (let idx = 0; idx < arr.length; idx++) {
    let number = arr[idx];
    if (idx % 2 === 1) newArr.push(number * 2);
  }

  // return new array
  return newArr;
}

console.log(doubleOddIndicies(numbers));
