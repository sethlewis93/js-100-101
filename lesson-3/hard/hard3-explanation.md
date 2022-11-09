In all three examples, we have three global variables one, two and three and three local variables (local to the function messWithVars) one, two and three. Since parameters of a function have the same name as the global variables, they "shadow" them, so global variables are not accessible inside of the function. That is why local variable one and global variable one here are not the same variables, even though they have the same name.

Example A :

```jsx
function messWithVars(one, two, three) {
  // here on line 2 both local variable one and global variable one reference to the same array object. Same goes for variables two and three
  one = two; // this is reassignment, from now on local variable one is pointing to the object that local variable two was pointing t two (at the moment one and two point to the same object). Note that global variable one still points to the same object `["one"]` as we didn't change anywhere what it references
  two = three; // as this is also reassignment, local variable two is now pointing to the same object as variable three and now local variables two and three point to the same object. Note that global variable two still points to the same object `["two"]` as we didn't change anywhere what it references
  three = two; // again, reassignment, local variable three points to the same object as local variable one, which is `["two"]` (we reassigned it up above) . And, global variable three wasn't changed so it still points to the same object.
}
```

Example B:

```jsx
function messWithVars(one, two, three) {
  // here on line 2 both local variable one and global variable one reference to the same array object. Same goes for variables two and three
  one = ["two"]; // we are reassigning local variable one to point to a completely new array object with the value ["two"]. This is not the same object that variable two is pointing to. Again, we are reassigning local variable one, so global variable one remains unchanged.
  // ... same thing happens in other 2 lines of code
}
```

Example 3

```jsx
function messWithVars(one, two, three) {
  // as before, here both local variables one and global variable one point to the same object. Same goes for other variables.
  one.splice(0, 1, "two"); // we are calling mutating method `splice` on the object that local variable one is pointing to. We are mutating this object and since global variable one is pointing to the same object it is mutated as well.
  two.splice(0, 1, "three"); // same thing here, we are calling mutating method `splice` on the object that local variable two is pointing to. We are mutating this object and since global variable two is pointing to the same object it is mutated as well.
  three.splice(0, 1, "one"); // same as above
}
```

For this reason, the last code example logs:

```
one is: two
two is: three
three is: one
```

As the objects that global variables are pointing to were mutated inside of the messWithVars function.

Extra example 1. Try to think first what this example would log.

```jsx
function messWithVars(one, two) {
  one = two;
  one.splice(0, 1, "five");
}

let one = ["one"];
let two = ["two"];

messWithVars(one, two);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
```

Solution:

```
one is: one
two is: five
```

Explanation:

```jsx
function messWithVars(one, two) {
  // here local variable one points to the same object as global variable one, and local variable two points to the same object as global variable two
  one = two; // due to reassignment, now both local variables, one and two, point to the same object as global variable two.
  one.splice(0, 1, "five"); // therefore when we mutate the object that local variable one is point to, only the object that global variable two is pointing to is changed.
}
```

Extra example 2. Try to think first what this example would log.

```jsx
function messWithVars(one, two) {
  one = ["two"];
  one.splice(0, 1, "five");
}

let one = ["one"];
let two = ["two"];

messWithVars(one, two);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
```

Solution:

```
one is: one
two is: two
```

Explanation:

```jsx
function messWithVars(one, two) {
  // here local variable one points to the same object as global variable one, and local variable two points to the same object as global variable two
  one = ["two"]; // here we are creating new array object with one element, "two". It is not the same object as the one local variable two is point to. We are assigning it to local variable one.
  one.splice(0, 1, "five"); // since local variable one points to a new object, to which neither global variable one, or two, are pointing to, when we mutate it, the values of objects that global variables point to, remain unchanged.
}
```
