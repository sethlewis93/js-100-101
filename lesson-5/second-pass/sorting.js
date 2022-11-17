// How would you sort the following array by the lengths of each word?

let words = ["go", "ahead", "and", "jump"];

words.sort((a, b) => a.length - b.length);

console.log(words);

/************************************************* */

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

// [
//   [1, 4, 2],
//   [3, 6, 4],
//   [6, 8, 9],
// ];

// P: given an array of subarrays,
// - print the array where the subarrays are sorted
// ---in ascending order of their total

// E: see above

// D: array -> transformed array

// A:
// Store the total of each subarray
// Compare the subarray totals one to another
// Sort based on those totals

scores.sort((a, b) => {
  let firstTotal = a.reduce((prev, curr) => prev + curr);
  let secondTotal = b.reduce((prev, curr) => prev + curr);

  return firstTotal - secondTotal;
});

console.log(scores);

console.log(
  [
    { a: "ant", b: "elephant" },
    { c: "cat", d: "dog" },
  ].filter((object) => {
    return Object.keys(object).every((key) => object[key][0] === key);
  })
);
// => [ { c: 'cat', d: 'dog' } ]

console.log(
  [
    { a: "ant", b: "elephant" },
    { c: "cat", d: "dog" },
  ].filter((object) => {
    return Object.keys(object).some((key) => object[key][0] === key);
  })
);
// => [ { a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' } ]
