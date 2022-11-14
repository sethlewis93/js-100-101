### Need a little help understanding an aspect about `.filter()`.

## QUESTION

In the code shown below, assume that someMethod is the name of one of the built-in array methods (e.g., indexOf). Based on the code and output shown and the final value of result, what method is represented by someMethod?

```jsx
let result = ["a", "b", "c"].someMethod(function (item) {
  console.log(item);
});

result; // []
```

(a) `forEach`
(b) `filter`
(c) `map`
(d) none of these

---

My response was "none of these". I _almost_ chose .filter(), though. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) makes it clear:

> If no elements pass the test, an empty array will be returned.

That is not news to me. _What I'm unsure about is how does_:

```jsx
console.log(item);
```

_evaluate each element as falsy and thereby causing `.filter()` to return an empty array_?

With so limited a number of ways for something to be evaluated as falsy, I was sure this was a trick question.

Any help/explanation here is much appreciated!
