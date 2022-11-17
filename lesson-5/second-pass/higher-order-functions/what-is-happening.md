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
// 18
// 7
// 12
// => undefined
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

By now, you should be starting to realize that the return value of every expression is important.

You can ignore an expression's return value when it isn't used in the code. More often than not, though, some implied return value is used in subtle ways that affect your code. Pay attention to the details.

---

## 5 (MY SOLUTION)

Let's mix things up even more. In the following example, we have an array of objects, and we want to select all of the elements where every key matches the first letter of the value.

```jsx
[
  { a: "ant", b: "elephant" },
  { c: "cat", d: "dog" },
].filter((object) => {
  return Object.keys(object).every((key) => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
```

### ACTIONS PERFORMED ON:

- filter method performed on an array of simple objects
- `object` cb execution to which each object of the array is assigned
- Object.keys method performed on the `object` cb function returning string representations of `object` key name
- every method performed on the array of the `object` cb function's keys string representations
- every's `key` cb execution performed on each string representation of the `object` cb function
- **element reference operator** performed on the value of each `object` cb function's keys accessing the first element of said keys
- strictly equal comparison operator _performed on_ `objects` key string representations at index 0 _comparing it to_ the values assigned to the every's `key` cb function

### SIDE EFFECTS

- No side effects

### RETURN VALUE | RETURN VALUE USED?

- `object[key][0] === key` => `true, false, true, true`: used by `key` to assign return value.
- `key` => `true, false, true, true`: used by every method to present truthy or falsy results
- every => `true, false`: used by the `object` callback to present truthy or falsy results to filter
- Object.keys => `["a", "b"]["c", "d"]`: no
- `object` => `{ c: 'cat', d: 'dog' }`: used by filter
- filter => `[{ c: 'cat', d: 'dog' }]`: No

---

## 8

This example contains a three-level nested array. Take your time and try to break down each component. Hint: the top-level array is a 2-element array.

```jsx
[
  [[1], [2], [3], [4]],
  [["a"], ["b"], ["c"]],
].map((element1) => {
  return element1.forEach((element2) => {
    return element2.filter((element3) => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]
```

### ACTIONS PERFORMED ON:

- map method performed on a three-level nested array
- `element1` cb execution performed on the first subarray
- forEach method performed on the first subarray
- `element2`cb execution performed on the second subarray
- filter method perfomed on second subarray
- `element3`, filter's cb function executes a conditional check on each array element
- conditional check compares each array element's length property with the number 0.

### SIDE EFFECTS

- No side effects

### RETURN VALUE | RETURN VALUE USED?

- `element3` => `true` for every individual array element: yes - passess truthy or falsy values to filter
- filter => `[true], [true]`: yes - used in forEach
- `element2` => `[true], [true]`: no - return value discarded with forEach
- forEach => `[undefined], [undefined]`: used by `element1`
- element1 => `[[undefined], [undefined]]`: cb used by map to return transformed array
- map => `[[undefined], [undefined]]`: No

---

## 6 (MY SOLUTION)

This example is more complicated than the rest, but, at this point, you should be able to break it down effectively. Use the tools you've learned about in this lesson and take as much time as needed. Work on breaking down each component and understanding the return value of each expression.

```jsx
[
  [
    [1, 2],
    [3, 4],
  ],
  [5, 6],
].map((arr) => {
  return arr.map((elem) => {
    if (typeof elem === "number") {
      // it's a number
      return elem + 1;
    } else {
      // it's an array
      return elem.map((number) => number + 1);
    }
  });
});
```

Result:

```jsx
// => [[[2,3][4,5], [5,6]]]
```

### ACTIONS PERFORMED ON:

Array: item at index 0 is an array with subarrays. item at index 1 is a simple array

- outter map method performed on the original array
- `arr` cb execution is assigned to each array element (`[[1, 2], [3, 4]], [5 ,6]`)
- inner map method performed on the inner array elements (first level)
- `elem` cb execution is performed on either the 2nd subarray (original array's index [0][0,1], `[1,2] [3,4]`) or the individual elements of the simple array (`5, 6`)
- `typeof` operator is perfomed on values assigned to `elem` cb
- strict equality operator compares the `elem` values with the type of number
- `elem` + 1 performed if the condition is met
- a second inner map method performed on `elem` if previous condition is not met
- `number` cb execution is assigned to the values of the original sub-subarray (`1, 2` `3, 4`)
- `number` + 1 is performed on said values

### SIDE EFFECTS

- No

### RETURN VALUE | RETURN VALUE USED?

- `else` clause:
  - `elem` cb:
    - map method:
      - `number` returns `2, 3, 4, 5`: used by second inner map method
    - map returns `[[2, 3], [4, 5]]`: used by the `elem` cb
      **`elem` =>** `[[2, 3], [4, 5]]`
- `if` statement condition => `true, true`
  - **`elem` =>** `6, 7`: used by the first inner map method
- `typeof` returns `"number", "number"`
- first inner map method => `[[2,3][4,5], [6,7]]`
- `arr` cb function => `[[2,3][4,5], [6,7]]`
- outter map method => `[[[2,3][4,5], [6,7]]]`
