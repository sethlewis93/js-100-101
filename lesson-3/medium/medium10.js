// QUESTION #10

// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo());

// --> MY SOLUTION(S) <--

// ANSWER: "yes"

// The call to foo() always returns "yes".
// foo() is passed to bar(). Since bar()'s param !== "no", it returns "yes".

// --> PREFERRED SOLUTION(S) <--

// CORRECT ANSWER: "no"

// foo() always returns "yes".
// if bar()'s param is NOT "no", it always returns "no".
// the value foo() returns is NOT "no". Therefore, bar() returns "no".

// LESSON LEARNED: consider the RETURN value, not the call itself.

// <---------------------- *** -------------->
// <---------------------- *** -------------->
