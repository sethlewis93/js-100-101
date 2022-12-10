# BREAKING DOWN TIC-TAC-TOE

## HIGH-LEVEL GAME FLOW

1. Display the initial empty 3x3 board.
2. Ask the user to mark a square.
3. Computer marks a square.
4. Display the updated board state.
5. If it's a winning board, display the winner.
6. If the board is full, display tie.
7. If neither player won and the board is not full, go to #2
8. Play again?
9. If yes, go to #1
10. Goodbye!

## Determining Winner

The rules of the game say that a player wins when:

    All three squares within any row are marked with the player's marker.
    All three squares within any column are marked with the player's marker.
    All three diagonal squares in either direction are marked with the player's marker.

Rewriting these rules in terms of our implementation, we can say that a player wins when any of the following sequences of squares all contain the player's marker:

    1, 2, 3
    4, 5, 6
    7, 8, 9
    1, 4, 7
    2, 5, 8
    3, 6, 9
    1, 5, 9
    3, 5, 7

We'll use a nested array to represent these 8 "winning lines." Each winning line is represented by an array that contains the keys of the three squares we'll need to examine. All of those arrays are themselves nested within an array that represents all of the winning lines. This structure lets us iterate over all of the possible winning lines, and, within each iteration, check whether the squares in that line all belong to one player.

## Computer Defensive "AI"

We want the computer to respond when the user is threatening to win the game.

When two consecutive squares are occupied by the user and the third square is empty: the computer should **defend the square** by filling it.

In any other case, simply choose a random square to fill.

### Algorithm:

Using the existing `computerChooses()` function

- Pass the `winningLines` nested array to the function
- Declare a variable `threat` but don't initialize it with any values

---

- Iterate over the lines arrrays
- - Extract each winning line from the selected array using array destructuring (`sq1`, `sq2`, `sq3`)
- - Assign `threat` based on the following cases:
- - - case 1: squares 1 & 2 have the "user's mark" -> `threat` is square 3
- - - case 2: squares 1 & 3 have the "user's mark" -> `threat` is square 2
- - - case 3: squares 2 & 3 have the "user's mark" -> `threat` is square 1
- - - default case: assign a value of "null" to `threat`

---

- If `threat` has any value, assign `threat` to `computerSelection`
- Else: set `computerSelection` to a random number

---

TO-DO: Create a function that places an "O" on the `winningLines` square that the user is threatening
