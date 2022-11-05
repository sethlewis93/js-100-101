const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(int) {
  let result = "";

  do {
    // Retrieve the rightmost digit
    let remainder = int % 10;
    // Chop the rightmost digit
    int = Math.floor(int / 10);
    // Set `result` to the righmost digit and stringify it
    result = DIGITS[remainder] + result;
  } while (int > 0);

  return result;
}

console.log(integerToString(4321));
console.log(integerToString(-123));
