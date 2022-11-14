// select all of the vowels in a given string.
// We're going to use the helpful String.prototype.includes method here
// to help determine whether a character is a vowel:

function selectVowels(string) {
  let vowelsFromInput = "";

  for (let idx = 0; idx < string.length; idx++) {
    let currentChar = string[idx];
    if ("aeiouAEIOU".includes(currentChar)) {
      vowelsFromInput += currentChar;
    }
  }

  return vowelsFromInput;
}

console.log(selectVowels("supercalifragalisticespialadocious?"));
console.log(selectVowels("the quick brown fox"));
