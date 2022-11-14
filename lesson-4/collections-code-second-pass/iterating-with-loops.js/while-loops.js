let numbers = [1, 2, 3, 4];
// numbers[0] += 1;
// numbers[1] += 1;
// numbers[2] += 1;
// numbers[3] += 1;
// numbers;               // => [ 2, 3, 4, 5 ]

let counter = 0;
while (counter < numbers.length) {
  numbers[counter] += 1;
  counter++;
}

console.log(numbers);

// Let's say we have a variable named number that represents a random number.
// We can exit the loop when number equals 5 by writing the if condition as
// number === 5:

while (true) {
  let number = Math.floor(10 * Math.random());
  if (number === 5) break;
  console.log(number);
}
