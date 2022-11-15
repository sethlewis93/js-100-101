// Sparse arrays are arrays where the number of elements isn't necessarily the
// length of the array.

let arr = [2, 4, 6];
arr.length = 5;
console.log(arr); // [ 2, 4, 6, <2 empty items> ]
console.log(arr.length); // 5
console.log(Object.keys(arr)); // ["0","1","2"]
console.log(arr[3]); // undefined

let newArr = [2, 4, 6];
newArr.length = 5;
newArr[4] = undefined;
console.log(newArr); // [ 2, 4, 6, <1 empty item>, undefined ]
console.log(Object.keys(newArr)); // ["0", "1", "2", "4"] <= ommits index position 3 because it is non-element value

// This behavior again leads to ambiguity about what arrays are empty:

let thirdArr = [];
thirdArr.length = 3;

// Is thirdArr empty?
console.log(thirdArr.length); // 3      No
console.log(Object.keys(thirdArr)); // []     Yes
