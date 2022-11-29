# IMPLEMENTATION STEPS

1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

## DATA STRUCTURE

What data structure will we use to contain the deck?
~~Card | Value feels like it would be good for an object.~~

~~Something like:~~

```javascript
let deck = {
  2: 2,
  3: 3,
  // ...
  Jack: 10,
  Queen: 10,
  // ...
  Ace: 11,
};
```

☝🏾 WRONG! We need to account for value AND amount of cards. Let's try an object where the values are arrays. The first index of the array represents the value and the second represents how many remain.

```javascript
let deck = {
  2: [2, 4],
  // ...
  Jack: [10, 4],
  // ...
};
```

## CALCULATING ACES

Aces can be worth either 1 or 11, depending.
Rules for Aces:

- Value is determined each time a new card is drawn from the deck.
- The value of an Ace is determined by the sum of the hand:
- - By default, the value of the Ace is 11
- - If the hand will exceed 21 and there is one ace drawn, the Ace must be worth 1
- - If when another Ace is drawn the hand exceeds 21, that Ace must also be worth 1 and so on for another Ace drawn after that

## PLAYER TURN

- Ask player to hit or stay.
- If stay, stop asking.
- Otherwise, go to #1.

## DEALING CARDS

Each participant should randomly recieve two cards from the deck.

- The numbers 1 through 13 should represent the gamut of choices
- Choosing a number between 1 and 13 represents choosing the corresponding card
- Prior to choosing, verify that the value of `deck[rank][1]` is not 0 (i.e. that there are cards of that value to draw)
- If that card is available, move that card to the participant's hand:
  - Ex: random number is 8:
    - 8 corresponds to card "10" from the deck
    - Check: is `deck[10][1]` > 0 ?
    - If so: decremenent that element by 1 and push `deck[10][0][amountInHand]` to the participant's deck

### MUTATE THE DECK OF CARDS

- Get the value of the second index of the card object's key
- Set that value as itself decremented by 1

### ACCOUNTING FOR CARDS

- Both participants are initially dealt a hand of two cards.
- The player can see their 2 cards, but can only see one of the dealer's cards.

## PLAYER'S TURN: HIT OR STAY?

- Prompt the player to decide whether they will hit or stay.
