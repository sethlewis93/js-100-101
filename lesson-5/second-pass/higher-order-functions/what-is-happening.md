# BREAKING DOWN COMPLEX CODE

## 1

Take a moment to digest this example:

```jsx
[
  [1, 2],
  [3, 4],
].forEach((arr) => console.log(arr[0]));
// 1
// 3
// => undefined
```

What's happening in this seemingly-simple piece of code? Take it apart and try to describe every interaction with precision.

---

Array.prototype.forEach is called on a nested array.

forEach is a higher-order function that utilizes the `arr` callback function.

Each inner array is assigned, in turn, to the `arr` cb function.

The `[]` **element reference operator** is called on `arr` to access the first index of the array being called.

On the first invokation of the callback, arr[0] returns "1" while on the second it returns "3".

console.log is a function that returns `undefined` and prints the return values of the aforementioned element reference operator - string representations of the numbers 1 and 3, respectively.

As a single-statement callback, the callback's return value is console.log(arr[0]) which returns `undefined`.

forEach, however, always returns `undefined`, so the return value of the callback is irrelevant.

---

## 3 (MY SOLUTION)

```jsx
[
  [1, 2],
  [3, 4],
].map((arr) => {
  console.log(arr[0]);
  return arr[0];
});
```

Result:

```jsx
// => [[1], [3]]
```

### ACTIONS PERFORMED ON:

- map method called on nested array
- array callback called on each subarray
- **element reference operator** called on the element at index 0 of each array passed to the cb function
- console.log called on the **element reference operator**

### SIDE EFFECTS:

- the output to the console is a side effect of the map method

### RETURNS | RETURN VALUE USED:

- the callback's return value => string representations of the numbers 1 and 3, respectively
  - the return value to be used by map
- console.log => undefined
  - will not be used
- **element reference operator** => 1, 3
  - will be used by the callback
- map => `[[1], [3]]`
  - will be used to return a new, transformed array

---

## 3 (PREFERRED CODE)

**The main difference to understand here is the return value of the callback: we're explicitly returning the first element of each subarray with return.**

**The callback's return value is then used by map to perform the transformation, replacing the inner array with a number. Finally, map returns a new array with two numbers in it.**

This example outputs and returns the following:

1
3
=> [1, 3]

When breaking down the example, pay close attention to:

    The return value of the callback
    The return value of the method
    Any side-effects

Use the following table to gauge the depth you should be thinking of when breaking down this code:

| Action | Performed on | Side Effect | Return Value | Is Return Value Used? |
| ------ | ------------ | ----------- | ------------ | --------------------- |

method call (map) the outer array None New array: [1, 3] No
callback execution Each sub-array None Number at index 0 of sub-array Yes, used by map for transformation
element reference ([0]) Each sub-array None Element at index 0 of sub-array Yes, used by console.log
method call (console.log) Element at index 0 of sub-array Outputs string representation of a Number undefined No
element reference ([0]) Each sub-array None Element at index 0 of sub-array Yes, explicitly returned by callback

---

## 4 (MY SOLUTION)

```jsx
let myArr = [
  [18, 7],
  [3, 12],
].forEach((arr) => {
  return arr.map((num) => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
```

Result:

```jsx
// 18
// 7
// 12
// undefined
// [[true, true], [false, true]]
```

### ACTIONS PERFORMED ON:

- forEach method performed on a nested array referenced by `myArr`
- map method performed on forEach's callback `arr`
- conditional comparision between `num`, map's cb function and the value 5
- console performs the `log` method on the value assigned to map's callback, `num`

### SIDE EFFECTS

- the value assigned to `num` cb is printed to console so long as it passes the conditional check

### RETURN VALUE | RETURN VALUE USED?

- returning console.log => `undefined`: No
- `num` => `true, true, false, true`: Yes - cb's return value is used by map to perform transformation on array
- map => `[[true, true], [false, true]]`: Yes - map always returns a new array of transformed values
- `arr` => map's return value: No, nothing but `undefined` returns from forEach
- forEach => `undefined`: No
- myArr => original array: no

---

## 4 (PREFERRED CODE)

This example outputs and returns the following:

```jsx
18
7
12
=> undefined
```

Because forEach ignores the callback's return value, this was a relatively straight forward example.

---

## 5 (MY SOLUTION)

```jsx
[
  [1, 2],
  [3, 4],
].map((arr) => {
  return arr.map((num) => num * 2);
});
```

Result:

```jsx
// => [[2,4], [6,8]]
```

### ACTIONS PERFORMED ON:

(**bold words** indicate supplements to my original answer. The result was correct but explanation still lacking)

- map method call performed on the nested array
- **outter calback execution performed on each subarray**
- inner map method performed on `arr`, the cb function of the outter map method
- **inner callback execution performed on each element of the subarray**
- multipcation operation performed on each element assigned to the value of `num`

### SIDE EFFECTS

- no side effects

### RETURN VALUE | RETURN VALUE USED?

- **`num * 2` => 2, 4, 6, 8: Used by the `num` callback**
- `num` cb => 2, 4, 6, 8: Used by the inner map method to perform transformation on 1, 2, 3, 4
- inner map => `[2,4] [6,8]`: Used by the outter map method's `arr` cb function
- `arr` => `[2,4] [6,8]`: Used by the outter map method to perform transormation on `[1, 2][3, 4]`
- outter map => `[[2,4], [6,8]]`: No

### NOTE:

By now, you should be starting to realize that the return value of every expression is important. You can ignore an expression's return value when it isn't used in the code. More often than not, though, some implied return value is used in subtle ways that affect your code. Pay attention to the details.
