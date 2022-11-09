// QUESTION #3

// Given the following similar sets of code, what will each code snippet print?

// A)

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ["two"]
console.log(`two is: ${two}`); // ["three"]
console.log(`three is: ${three}`); // ["one"]

// MY EXPLANATION:

// messWithVars is declared with three parameters. Inside the function body:
// --> `one` is reassigned the value of `two`
// --> `two` is reassinged the value of `three`
// --> ` three` is reassigned the value of `one`

// Global var `one` is declared and initalized with the value ["one"]
// Global var `two` is declared and initalized with the value ["two"]
// Global var `three` is declared and initalized with the value ["three"]

// messWithVars is called and passed the global vars `one`, `two`, and `three`, respectively
// At the time of the call, the values of the globals passed in are as follows:
// --> messWithVars(["one"], ["two"], ["three"])

// After the function runs, the values of the global vars are as follows:
// --> one = ["two"] because the value of the second parameter is assigned to the first.
// --> two = ["three"] because the value of the third parameter isassigned to the second.
// --> three = ["one"] becuase the value of the first parameter is assigned to the third.

// B)

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ["two"]
console.log(`two is: ${two}`); // ["three"]
console.log(`three is: ${three}`); // ["one"]

// MY EXPLANATION: essentially the same as "A". Only difference being the fact that
// within the function body, the reassignment values are arrays instead of whatever value
// is passed into the function.

// C)

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ["two"]
console.log(`two is: ${two}`); // ["three"]
console.log(`three is: ${three}`); // ["one"]

// MY EXPLANATION:

// messWithVars is declared with three parameters. Inside the function body:
// --> the .splice() method is called on `one`. At the first index, it will replace a single array element with the value "two"
// --> the .splice() method is called on `two`. At the first index, it will replace a single array element with the value "three".
// --> the .splice() method is called on `three`. At the first index, it will replace a single array element with the value "one".

// messWithVars is called and passed the global vars `one`, `two`, and `three`, respectively
// At the time of the call, the values of the globals passed in are as follows:
// --> messWithVars(["one"], ["two"], ["three"])

// After the function runs, the values of the global vars are as follows:
// --> one = ["two"] because the .slice() method replaces ["one"] with ["two"]
// --> two = ["three"] because the .slice() method replaces ["two"] with ["three"]
// --> three = ["one"] because the .slice() method replaces ["three"] with ["one"]

// --> PREFERRED SOLUTION(S) <--

// CORRECT ANSWERS:

// A)

// "one is: one"
// "two is: two"
// "three is: three"

// B)

// "one is: one"
// "two is: two"
// "three is: three"

// C)

// "one is: two"
// "two is: three"
// "three is: one"

// <---------------------- *** -------------->
// <---------------------- *** -------------->
