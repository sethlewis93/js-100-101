// Arrays are objects.

// THE CHEIF DIFFERENCE IS THAT ARRAYS USE NON-NEGATIVE INTEGERS
// AS PRIMARY KEYS.

// [ALSO] adding elements to the array increases the value of length property
// and changing the value of the length property
// causes the number of elements to change.

let arr = ["foo", "bar", "qux"];

arr[-1] = 347;
arr["boo"] = "hoo";

console.log(arr); // => ["foo", "bar", "qux", "-1": 347, "boo": "hoo"]

arr.length; // 3, not 5

arr.forEach((el) => console.log(el));
console.log(Object.keys(arr)); // [ '0', '1', '2', '-1', 'boo' ]
