// QUESTION #

// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return {
    prop1: "hi there",
  };
}

console.log(first());
console.log(second());

// --> MY SOLUTION(S) <--

// ANSWER: Yes, they both return an object with a single key/val pair.

// --> PREFERRED SOLUTION(S) <--

// CORRECT ANSWER: No - they do not return the same thing.

// These functions do not return the same thing. The function first() returns the expected value of { prop1: "hi there" }, but second() returns undefined without throwing any errors.

// The reason for this odd behavior is that semicolons, in JavaScript, are technically optional. However, when you omit them, the JavaScript engine inserts them where it thinks you need them. In second, JavaScript inserts a semicolon after the word return, so the function returns undefined. No errors are thrown since the rest of the code is valid, even though it never gets executed.

// Some developers rely on this behavior and write JavaScript code without semicolons. However, most developers consider it poor practice since you're relying on the engine to make decisions for you, and those decisions may not be what you intended.

// LESSON LEARNED: semicolons matter!

// I suspected there was something wrong with second() but I couldn't decide
// if JavaScript was fixing the code or if my Prettier extension was fixing it.
// Either way, I should've been tipped off by that and followed my gut.

// <---------------------- *** -------------->
// <---------------------- *** -------------->
