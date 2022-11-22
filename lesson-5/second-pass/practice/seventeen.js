// P:
// Write a function with no parameters that, when called, produces a UUID
// A UUID consists of 32 hexadecimal characters
// (the digits 0-9 and the letters a-f) represented as a string.
// The value is typically broken into 5 sections
// in an 8-4-4-4-12 pattern,

// E: e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// D:

// A:
// Store the letters a - f and the numbers 0 - 9 in an array as
// separate elements.
// Iterate over the array and select characters at random
// -- Set randomSelection var to the value of a random number between 0 and 31
// --
// Push the random characters into a new array
// Split the array in chunks by 8-4-4-4 and 12 characters, respectively
// Return a string with "-" as a separator

let hexadecimalArr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function randomSelection() {
  return Math.floor(Math.random() * (32 - 1) + 1);
}

function randomIndex() {
  let randomValue = randomSelection();
  if (randomValue > 15) {
    return Math.floor(randomValue / 2);
  }
  return randomValue;
}

function printUUID() {
  let uuidArr = [];
  let idx = 0;

  while (idx < 32) {
    uuidArr.push(hexadecimalArr[randomIndex()]);
    idx += 1;
  }

  let uuidString = uuidArr.join("");

  function uuidSeparator(string) {
    let octalStr = string.slice(0, 8);
    let quadStrOne = string.slice(8, 12);
    let quadStrTwo = string.slice(12, 16);
    let quadStrThree = string.slice(16, 20);
    let dodecaStr = string.slice(20, 32);

    let completedUUIDString = `${octalStr}-${quadStrOne}-${quadStrTwo}-${quadStrThree}-${dodecaStr}`;
    return completedUUIDString;
  }

  return uuidSeparator(uuidString);
}

console.log(printUUID());
let sections = [8, 4, 4, 4, 12];
sections.forEach((section, sectionIndex) =>
  console.log(`
  Section: ${section} - Index: ${sectionIndex}
`)
);
