// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];

let numbersCopy = numbers.slice().reverse();
// console.log(numbersCopy);

let secondNumbersCopy = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(secondNumbersCopy);

// Bonus Question: Can you do it using the Array.prototype.forEach() method?

// ALGORITHM:
// --> For each element in the original array,
// ----> get the last element and push it to the beginning of the new array

let thirdNumbersCopy = [];
numbers.forEach((el) => {
  thirdNumbersCopy.unshift(el);
});
// console.log(thirdNumbersCopy);
// console.log(numbers);

// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

// #1

let beginningWords = "Four score and ";

// console.log(beginningWords.concat("", famousWords));

// #2

famousWords = beginningWords + famousWords;
// console.log(famousWords);

// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

let mutateNums = [1, 2, 3, 4, 5];

mutateNums.splice(2, 1);

// console.log(mutateNums);

let flinstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// console.log(flinstones.flat());

// Consider the following object:

let flintstonesObj = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

// [ 'Barney', 2 ]

// MY SOLUTION
let barney = Object.entries(flintstonesObj)[2];

// PREFERRED SOLUTION

let barneyArr = Object.entries(flintstonesObj)
  .filter((pair) => pair[0] === "Barney")
  .shift();

// How would you check whether the objects assigned to variables numbers and table below are arrays?

let newNumbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(newNumbers));
// console.log(Array.isArray(table));

// Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

// ALGORITHM
//

let title = "Flintstone Family Members"; // 25 chars

let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));
