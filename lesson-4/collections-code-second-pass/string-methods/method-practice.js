// Sometimes, you want to convert only the first character of a string
// to its uppercase equivalent.
// You can do that by combining toUpperCase with slice and
// any of the string concatenation methods:

let string = "ardvark";

function correctCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(correctCase(string));
