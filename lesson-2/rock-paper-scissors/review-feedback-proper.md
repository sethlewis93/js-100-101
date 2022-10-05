## NOTES ON THE REFACTORING THE CODE

1. Greet the user with some welcome message
2. Get the user choice
3. Get the computer choice
4. Compare both choices and display round winner
5. Play again until one of the players reaches a score of 3.
6. Once one of them reaches 3, display winner and ask the user if they want to play again.
   - If yes, we repeat the above steps.
   - If not, we exit the game.

This summary, while being pure English, can be a map for you when coding your game. Let's see how:

- Inside your while loop, you can extract your logic into small helper functions to make your code more readable and maintainable:

  ~~Lines 98-102: Can be extracted into a function called `getUserInput`. Notice how with this function , you won't need the comment on line 97 since the function name is very self-explanatory.~~

  ~~Lines 104-111: Can be extracted into a function called `ValidateInput`. And again, this will help you get rid of the comment on line 104 because the function name explains clearly what it does.~~

  ~~Lines 113-115: Can be extracted into a function called `getComputerChoice`.~~

Notice how the above refactoring will lead to your while loop becoming something like:

```javascript
while (true) {
  greetUser(); // display some welcome message
  getUserInput();
  getComputerChoice();
  // ...
}
```
