// QUESTION #

// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// --> MY SOLUTION(S) <--

// ANSWER: "{ first: [1, 2] }"

// Line 1: object is declared and initialized with a key/value pair.
// "first" is a property whose VALUE is [1].
// That value points to a specific location in memory where the array is stored.
// The pointer to this array is what has been copied and stored in numArray.

// Line 2: numArray is declared and initialized with a pointer to
// the value of "first".

// Line 3: the array that numArray and object["first"] point to is mutated.
// That array is now [1, 2].

// Line 4: "first"'s value points to the very same array assigned to numArray.
// Being mutable, object now reads "{ first: [1, 2] }"

// --> PREFERRED SOLUTION(S) <--

// { first: [ 1, 2 ] }

// Since numArray is a reference to the original array, [1], numArray.push(2) modifies this array. Thus, the original object referenced by object is changed. If, instead of modifying the original object, we want to modify numArray but not object, we have two options:

//     We can declare and initialize numArray with a reference to a copy of the original array:

let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);

// We can use Array.prototype.concat(), which returns a new array instead of modifying the original array:

let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);

// <---------------------- *** -------------->
// <---------------------- *** -------------->
