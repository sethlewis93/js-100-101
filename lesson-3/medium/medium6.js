// QUESTION # 6

// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// Bonus:

// How can you reliably test if a value is NaN?

// --> MY SOLUTION(S) <--

// MY ANSWER: true. NaN is a gloabal variable (a property of the global object).
// Comparing the first element of the array to the global results in true.

// --> PREFERRED SOLUTION(S) <--

// CORRECT ANSWER: false
// NaN is a FALSY value. You cannot use === to compare anything to NaN.
// The bonus question hinted at the answer here.
// The way to test if a value is NaN is:

Number.isNaN(number);

// <---------------------- *** -------------->
// <---------------------- *** -------------->
