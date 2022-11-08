// QUESTION #8

// One day, Spot was playing with the Munster family's home computer,
// and he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach((familyMember) => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:

messWithDemographics(munsters);

// Before Grandpa could stop him, Spot hit the Enter key with his tail.
// Did the family's data get ransacked? Why or why not?

// --> MY SOLUTION(S) <--

// ANSWER: the family's data was indeed ransacked.

// Lines 1 - 6: `munsters` is assigned an object of data.

// On line 8, a `messWithDemographics` is instantiated.

// Lines 9 - 11: the object parameter is passed to Object.keys() which returns
// an array of an object's own enumerable property names.

// --> Continuing, the .forEach() array method loops through the object props.
// --> Each prop has it's own value reassigned by the callback function:
// --> (age to 42, gender to other).

// Line 17: `messWithDemographics` is invoked with the `munsters` object passed.
// Since objects are mutable, the object is mutated by the function invokation.

// --> PREFERRED SOLUTION(S) <--

// Spot will find himself in the "dog house" for this one. The family's data is in shambles now.

// Why? In JavaScript, objects are passed by reference. Thus, Spot's demoObject starts off pointing to the munsters object. His program could replace that with some other object, and the family's data would be safe. However, in this case, the program doesn't reassign demoObject; it just uses it, as-is. Thus, the object that gets changed by the function is the munsters object.

// <---------------------- *** -------------->
// <---------------------- *** -------------->
