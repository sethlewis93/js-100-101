// How would you sort the following array by the lengths of each word?

let words = ["go", "ahead", "and", "jump"];

words.sort((wordA, wordB) => wordA.length - wordB.length);

// console.log(words);

// Using a cb to sort collections lets us sort ... values in a variety of ways.
// Take the following nested array, for example:

let scores = [
  [3, 6, 4],
  [6, 8, 9],
  [1, 4, 2],
];

// scores is an array of subarrays that each contain three elements.
// Suppose this is an array that represents the scores for three players
// in a game of three rounds.
// We want to sort the players in ascending order of their total score.
// In effect, we want to get the following return value:

// [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];

// Let's give it a shot:
scores.sort((a, b) => {
  let firstScore = a.reduce((prev, curr) => (prev += curr));
  let nextScore = b.reduce((prev, curr) => (prev += curr));

  return firstScore - nextScore;
});

// console.log(scores);

// My mnemonic device for analyzing higher-order functions:
// ALL (Action)
// PLAZA (Performed On)
// STORES (Side-effects)
// REQUIRE (Return value)
// RENNOVATION (Is Return value used?)

// What type of action is being performed?
// - Method call? Callback? Conditional? Something else?
// On what value is that action performed?
// What is the side-effect of that action (e.g., output or destructive action)?
// What is the return value of that action?
// Is the return value used by whatever instigated the action?

[
  [1, 2],
  [3, 4],
].map((arr) => {
  console.log(arr[0]);
  return arr[0];
});

// .map() method call performed on the outter array
// console.log() performed on the inner arrays
// array selection performed on the first element of each inner array
// callback function using the arr paremeter, returns [1, 3]
// .map() will return [[1], [3]] because it always returns an array
// of the same length as the one called.

// Here's another example.

// forEach method performed on nested array myArr
// forEach's side effects include returning the value of
// -- another function with side-effects (.map()),
// while the implementation of forEach attempts to return a value,
// -- forEach never returns anything but undefined
// forEach therefore cannot use any return value

// forEach's callback, `arr` is performed on each element of myArr
// the `arr` cb does not have any side-effects associated with it

// .map() method is performed on the arr cb (i.e. each element in myArr)
// .map() returns [undefined, undefined] because the only explicit return value
// -- nested inside the method's function body is a call to the console
// .map()'s return value can't be used anywhere because forEach as a caller
// -- cannot return anything but undefined.

// the num cb function is performed on each element of the arr cb function
// -- which is the nested arrays of the forEach method
// a conditional operator is performed on the num cb function
// for the elements that return true from the condition check,
// -- they are logged to the console and the console.log call is returned
// ---- from the map method
// num's return value => 18, 7, 12
// num's return value is used in the console.log call

let myArr = [
  [18, 7],
  [3, 12],
].forEach((arr) => {
  return arr.map((num) => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

// Next, let's tackle a slightly more complex example.

[
  [1, 2],
  [3, 4],
].map((arr) => {
  return arr.map((num) => num * 2);
});

// => [[2, 4], [6, 8]]

// the inner cb function iterates over the nested array elements.
// it performs a mathematical operation on each nested array element (* 2).
// there are no side-effects to speak of and the return value is the element
// multiplied by 2.
// the return value is used by the inner .map() method

// the inner .map() transforms the elements of the nested array
// via the return value of the cb function `num`.
// there are no side-effects to speak of and the return value is [2, 4, 6, 8]
// the return value is used by the outter .map() call

// `arr` cb function iterates over each array in the top level array
// arr has no side-effects to speak of and returns the result of it's inner map
// call to the outter map.

// the outter map() call transforms the array elements
// using the inner map()'s return value.
// there are no side-effects to speak of and the return value is [[2,4], [6,8]]
// the return value is used to return a new nested array of deeply transformed
// elements

// Let's mix things up even more.
// In the following example, we have an array of objects,
// and we want to select all of the elements where every key matches
// the first letter of the value.

[
  { a: "ant", b: "elephant" },
  { c: "cat", d: "dog" },
].filter((object) => {
  return Object.keys(object).every((key) => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

// the .filer() method is called on an array of objects.
// .filter() performs a check on each array element via it's cb function
// every element that passes the cb function's test is deposited into a
// shallow-copied array that is returned by .filter()
// .filter() returns the array elements of Object.keys() that are not falsy

// .filter()'s cb `object` is passed into the .keys() method of
// the global Object constructor. keys() returns an array of object keys
// passed to it. keys()' return value is uesed by the .every() method.

// .every()'s `key` parameter compares the first index of the `object` array
// with each array element evaluating as either true or false.
// the value returned from key is used by .every()

// .every()'s check is performed on the array of keys returned by Object.keys().
// .every()'s return value is a single boolean:
// COMPARE the first element of the current key's VALUE -
// if that single element is strictly equal the key passed in
// return true
// .every's return value === false : the value from original array[0][b] !== "b"
// .every's return value is used by .filter()'s return value.

// side-effects?

[
  [8, 13, 27],
  ["apple", "banana", "cantaloupe"],
].map((arr) => {
  return arr.filter((item) => {
    if (typeof item === "number") {
      // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]

function checkNumAndString(nestedArr) {
  debugger;
  return nestedArr.map((arr) => {
    debugger;
    return arr.filter((item) => {
      debugger;
      if (typeof item === "number") {
        return item > 13;
      } else {
        return item.length < 6;
      }
    });
  });
}

console.log(
  checkNumAndString([[8, 13, 27], ["apple", "banana", "cantaloupe"], [true]])
);
