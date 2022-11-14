// Suppose we want to select all of the vowels in a string
// and get a new string that contains all of those vowels,
// and nothing else. We can use split, filter, and join like so:

let str = "What's up, Doc?";

// transform to array
// filter those items that are vowels
// return the array that includes those vowels
// transform to a string

let vowels = str
  .split("")
  .filter((char) => "aeiou".includes(char.toLowerCase()))
  .join("");

console.log(vowels);
