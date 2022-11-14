// Suppose we want to display the squares of all the even numbers in an array. Our solution might look like this:

let numbers = [1, 4, 3, 7, 6, 5, 2, 1];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 1) {
//     let square = numbers[index] * numbers[index];
//     console.log(square);
//   }
// }

// One way to deal with this issue is to use a guard clause to exclude the odd numbers from further consideration:

for (let counter = 0; counter < numbers.length; counter += 1) {
  if (numbers[counter] % 2 === 1) continue;
  console.log(numbers[counter] * numbers[counter]);
}
