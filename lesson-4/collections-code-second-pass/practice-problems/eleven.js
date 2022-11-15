// Create an object that expresses the frequency with which
// each letter occurs in this string:

let statement = "The Flintstones Rock";

// Declare an empty statementObj var
// Declare a tally var
// Iterate over the string
// For each item in the string:
// --> Get the currentCharacter
// --> Add the currentCharacter as a key to the statementObj
// --> Add 1 to the tally for that specific key
// -- Set the tally to the statementObj value

let statementArr = statement.split("").filter((char) => char !== " ");

let statementObj = {};

statementArr.forEach((char) => {
  statementObj[char] = statementObj[char] || 0;
  statementObj[char] += 1;
});

console.log(statementObj);

// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
