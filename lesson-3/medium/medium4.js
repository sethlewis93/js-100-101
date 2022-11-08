// QUESTION #4

// Instructions

// Alyssa was asked to write an implementation of a rolling buffer.
// You can add and remove elements from a rolling buffer.
// However, once the buffer becomes full,
// any new elements will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer.
// In presenting the code to her team leader, she said "Take your pick.
// Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations,
// other than the method she used to add an element to the buffer?
// You may assume that newElement will always be a primitive value.

// --> MY SOLUTION(S) <--

// There is no difference between the implemetations outside of the method used
// to add an element to the buffer.

// Both solutions return the same result when the function is invoked
// assuming `newElement` is a primitive value.

// This is becuase both methods add elements to the end
// of the original `buffer` array.
// .push() does this by nature because it is non-mutating.
// .concat() does this because the code reassigns the returned array
// to the the original reference to `buffer`.

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log(addToRollingBuffer1([1, 2, 3, 4], 4, "my string")); // returns [ 2, 3, 4, 'my string' ]

// EXPLANATION:

// ...Buffer1() takes an array, an integer, and a primitive element.
// On line 1, it pushes the new primitive element onto the end of the array.
// On line 2, it checks whether the array has exceeded the max alloted size of
// --> the array.
// If true, on line 3 the first element of the array is removed and returned.
// On line 5, the `buffer` array is returned.

// <---------------------- *** -------------->

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log(addToRollingBuffer2([1, 2, 3, 4], 4, "my string")); // [ 2, 3, 4, 'my string' ]

// EXPLANATION:

// ...Buffer1() takes an array, an integer, and a primitive element.

// On line 1, the `buffer` array is reassigned to a new array returned from
// --> concatonating `newElement` onto the original `buffer` array.
// The result of this is buffer = [1,2,3,4,"mystring"].

// On line 2, the code checks whether `buffer` has exceeded the allotted size.

// If true, on line 3, the first element of the array is removed and returned.

// On line 5, `buffer` is returned.

// --> PREFERRED SOLUTION(S) <--

// CORRECT ANSWER: There IS a difference:

// While both functions have the same return value,
// the first implementation mutates the argument represented by buffer..
// ..the caller will see that the array is different when the function returns.
// The rollingBuffer2 implementation doesn't mutate the argument
// specified by the value of buffer.

// lESSON LEARNED:

// I alluded to the fact of mutation in my first explanation. I thought that the
// RESULT of the test cases was what the question was asking.
// Turns out, the question is about ANY differences outside of thos stated.
// Next time if there's a difference: say so!

// <---------------------- *** -------------->
// <---------------------- *** -------------->
