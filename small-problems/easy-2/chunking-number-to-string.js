const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function integerToString(int) {
  const STRING_NUMERALS = Object.keys(DIGITS);
  let stringNumerals = [];
  do {
    let currentDigit = int % 10;
    int = Math.floor(int / 10);
    stringNumerals.push(STRING_NUMERALS[currentDigit]);
  } while (int > 0);
  return stringNumerals.reverse().join("");
}

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
