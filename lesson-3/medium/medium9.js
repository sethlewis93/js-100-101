// QUESTION #9

// Function and method calls can take expressions as arguments.
// Suppose we define a function named rps as follows,
// which follows the classic rules of rock-paper-scissors, but with a twist:
// in the event of a tie, it just returns the choice made by both players.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What does the following code output?

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// --> MY SOLUTION(S) <--

// ANSWER: "paper"

// Innermost calls
rps("rock", "scissorts"); // returns "rock";
rps("rock", "paper"); // returns "paper";

// Level 2 call
rps(rps("rock", "paper"), rps("rock", "scissors")); // returns "paper"

// Outtermost call

rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"); // --> essentially: rps("paper", "rock"). Returns "paper"

// --> PREFERRED SOLUTION(S) <--

// "paper"

// The outermost call determines the result of comparing rps(rps("rock", "paper"), rps("rock", "scissors")) against rock.
// That means that we must evaluate the two separate calls, rps("rock", "paper") and rps("rock", "scissors"), and combine them by calling rps on their results.
// Those innermost expressions return "paper" and "rock", respectively. Calling rps on those two values returns "paper", which, when evaluated against "rock", returns "paper".

// <---------------------- *** -------------->
// <---------------------- *** -------------->
