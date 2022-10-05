## NOTES FROM ELIE ASMAR (TA) CODE REVIEW

- I see that you are asking the user if they want to play again after each round. It would better to ask them only once the match is over.

- ~~Good job updating the score after each round. I suggest you also show the user what move the computer picked.~~

- ~~Another thing you can do to improve the visual experience is to clear the screen with console.clear() after each round. That would help the terminal window remain clean and uncluttered.~~

- ~~When asked if I wanted to play again, I entered "you" and that was considered valid. I assume you are only checking the first character of the input. It would be better if you could provide a stricter input validation and only accept y, yes, n and no, and consider everything else as invalid!~~

- ~~(my note): When a winner is decided and the game ends, user selects "yes" to restart the game: the scores were not reset.~~
