// .some()

let animals = {
  a: "ant",
  b: "bear",
  c: "cat",
};

console.log(Object.values(animals).some((animal) => animal.length > 4));
console.log(Object.values(animals).some((animal) => animal.length > 3));

// .find()

console.log([1, 2, 3, 4].find((num) => num > 2)); // 3
console.log([1, 2, 3, 4].find((num) => num > 5)); // undefined

// .findIndex()

console.log([1, 2, 3, 4].findIndex((num) => num > 2)); // 2
console.log([1, 2, 3, 4].findIndex((num) => num === 5)); // -1

// .includes()

// .includes() doesn't stricly use the "===" operator:
console.log([1, 2, NaN, 4].includes(NaN)); // logs true

// ☝🏾 Strictly speaking, NaN should ever print or return true.
// NaN is not a number, but a value representing a non-number.

// In all other cases, .includes() behaves as though it uses ===.

let arrWithObj = [1, 2, { a: "apple" }];
console.log(arrWithObj.includes({ a: "apple" })); // false

// ☝🏾 prints false becuase the object at index position 2 of `arrWithObj`
// ...points to a different object in memory than the object
// ...in the console.log statement.
// Therefore, they are not strictly equal.

let obj = { a: "apple" };
let newArrWithObj = [1, 2, obj];
console.log(newArrWithObj.includes(obj)); // true
