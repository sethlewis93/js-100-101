// Create an object that expresses the frequency with which each letter
// occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// P:
// Given a string, print an object where
// -- the keys are each letter of the string and
// -- the values are the number of instances of that letter
// Input = string | Object printed to the console

// E:
// "letters" exclude " "/spaces
// An instance of a letter depends on casing: "T" is not the same as "t".

// D: String -> Array -> Object

// A:
// Set empty flintstonesObj
// Store the `statement` string to an arry with the spaces removed
// For each char in the array:
// -- If the keys of the flintStones objects includes the current character:
// ----> Add the key and increment the value in addition to the previous value
// ----> Else, simply add the character as the key and the number 1 as the value
// Print flintStonesObj

let flintStonesObj = {};

let statementArr = statement.split("").filter((char) => char !== " ");

statementArr.forEach((char) => {
  if (Object.keys(flintStonesObj).includes(char)) {
    flintStonesObj[char] += 1;
  } else {
    flintStonesObj[char] = 1;
  }
});

console.log(flintStonesObj);
