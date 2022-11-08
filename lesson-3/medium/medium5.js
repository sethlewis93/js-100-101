// QUESTION #5

// What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// code here

// --> MY SOLUTION(S) <--

// 1.) 0.9
// 2.) 0.3

// EXPLANATION:

// Number 1 is a simply arithematic operation
// returning the sum of two floating point numbers.

// Number 2 outputs "false".
// The strict equality operator will be evaluated first.
// It takes precedent over the arithematic "+" operator.
// The next comparision will be "false + 0.3".
// When a boolean is compared with another value,
// --> it is coerced to a number
// --> and then LOOSELY compared again with the other value.
// So, the comparision will be "0 + 0.3" which results in 0.3.

// --> PREFERRED SOLUTION(S) <--

// If you thought that the outputs would be 0.9 and true, respectively, you were wrong. JavaScript uses floating point numbers for all numeric operations. Most floating point representations used on computers lack a certain amount of precision, and that can yield unexpected results like these.

// In this case, the output was:

// 0.8999999999999999
// false

// The details of why this happens aren't crucial right now -- it's just something you need to be aware of. However, if you want to learn more, the following two optional videos are helpful.

//     Video 1
//     Video 2

// The first video demonstrates why there are errors like these, while the second goes into detail about how computers handle floating point numbers.

// LESSON LEARNED:

// JavaScript DOES NOT EVALUATE === before +. The second code evaluates left-to-right.

// <---------------------- *** -------------->
// <---------------------- *** -------------->
