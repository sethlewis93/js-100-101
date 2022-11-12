// Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object
// where the names are the keys and the values are the positions in the array:

// set an flintStoneObj = {}
// for each element in the arr
// --> assign flintStoneObj.key = value;
// return flintStoneObj;

function arrayToObject(arr) {
  let flintStoneObj = {};
  arr.forEach((el, index) => {
    flintStoneObj[el] = index;
  });
  return flintStoneObj;
}

console.log(arrayToObject(flintstones));

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let arrayOfAges = Object.values(ages);
let totalAge = 0;

Object.values(ages).forEach((age) => (totalAge += age));

// With reduce
console.log(
  arrayOfAges.reduce((prevVal, currentVal) => prevVal + currentVal, 0)
);

// With forEach
console.log(totalAge);

// Pick out the minimum age from our current Munster family object:

let munsterAges = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let allAges = Object.values(munsterAges);
let min = Math.min(...allAges);
console.log(min);

// Create an object that expresses the frequency with which each letter occurs

let statement = "The Flintstones Rock";

let newObj = {};

for (let counter = 0; counter < statement.length; counter++) {
  let char = statement[counter];
  if (char === " ") continue;
  // Store the result of the following evaluation:
  // -- "Assign newObjects key to the letter from the array OR
  // -- IF there are no letters to assign, return a falsy value"
  newObj[char] = newObj[char] || 0;
  // Using addition assignment operator, store and compound the number of
  // instances of the letter as the value
  newObj[char] += 1;
}

console.log(newObj);

// countingLetters[letter] = occurences;
// return countingLetters;

// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
