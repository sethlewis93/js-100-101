// Select all of the vowels in a given string.
// We're going to use the helpful String.prototype.includes method here
// to help determine whether a character is a vowel:

// P - receive a string, return a string with the vowels contained in original.

// E:
// Casing matters: if uppercase in original, return uppercase in the new.
// A vowel is "aeiou"

// D - input = string, output = a new string

// A
// Declare newString to be returned by the function
// Loop over the string:
// For each element in the string:
// -- Retrieve the currentChar
// -- Confirm whether the string inlcudes the characters aeiou
// -- If it does:
// ---- Append those characters to the newString
// Return the newString

function selectVowel(str) {
  let newString = "";
  for (let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx];
    if ("aeiouAEIOU".includes(currentChar)) {
      newString += currentChar;
    }
  }
  return newString;
}

console.log(selectVowel("homestead"));
console.log(selectVowel("HomeSteaAd"));
