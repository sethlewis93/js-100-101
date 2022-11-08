// QUESTION #7

// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// --> MY SOLUTION(S) <--

// ANSWER: 34 will be logged to the console.

// On line 1, `answer` is assigned the number 42.

// Lines 2 - 4: the function `messWithIt` is declared. The function
// takes a value and uses the addition assignment to add the number 8
// to that value. It then returns the result.

// Line 6: `newAnswer` is assigned the result of `messWithIt(answer)`.
// `newAnswer` holds the value '50' and `answer` remains 42 because it has been
// , as a primitive, been passed by value to the function.

// Line 8: the result of global `answer` minus the number 8 is printed.
// The result will be 34 becuase `answer`, as a primitive value, cannot be
// mutated by being passed into any function.

// --> PREFERRED SOLUTION(S) <--

// 34.

// <---------------------- *** -------------->
// <---------------------- *** -------------->
