// We'll now move on to examples of some functions that perform transformations.
// The function below multiplies each element in an array by 2.

let array = [1, 2, 3, 4, 5, 6];

function doubleArrayElements(arr) {
  // declare new array
  let doubledNums = [];

  // for each element in the arr,
  // -- push the element * 2 onto the new array

  for (let idx = 0; idx < arr.length; idx++) {
    let doubled = arr[idx] * 2;
    doubledNums.push(doubled);
  }

  return doubledNums;

  // return the new arr
}

console.log(doubleArrayElements(array));
