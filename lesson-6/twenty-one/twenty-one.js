/** PRIORITY: CLEAN UP dealCards() and mutate deck obj
 */

let readline = require("readline-sync");

const prompt = (message) => console.log(`${message}`);

/** INITIALIZE DECK */

let deckOfCards = {
  2: [2, 4],
  3: [3, 4],
  4: [4, 4],
  5: [5, 4],
  6: [6, 4],
  7: [7, 4],
  8: [8, 4],
  9: [9, 4],
  10: [10, 4],
  Jack: [10, 4],
  Queen: [10, 4],
  King: [10, 4],
  Ace: [11, 4],
};

/** DEAL CARDS TO PLAYER AND DEALER */

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // eslint-disable-next-line no-mixed-operators
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function dealCards(deck, participantsHand) {
  let iterableDeckOfCards = Object.entries(deck);

  while (participantsHand.length < 2) {
    let randomNum = getRandomNumber(0, 12);
    let randomCard = iterableDeckOfCards[randomNum][0];
    let numCardsLeft = deck[randomCard][1];

    let numCardsInHand = numCardsLeft - numCardsLeft + 1; // The number of cards to be dealt to the participant
    participantsHand.push([randomCard, numCardsInHand]);

    deck[randomCard][1] -= 1; // decrement the number of cards in the deck
  }
}

function revealHand(playersHand, dealersHand) {
  playersHand.forEach((card) => {
    let [name, amount] = card;
    console.log(`The player has ${amount} ${name}(s) in hand`);
  });

  for (let counter = 0; counter < 1; counter += 1) {
    let randomNum = getRandomNumber(0, 1);
    let [name, amount] = dealersHand[randomNum];
    console.log(`The dealer has ${amount} ${name} in hand`);
  }
}

let playersCards = [];
let dealersCards = [];

// <------------------------------------------------------------------>

prompt("Let's play 21!");
prompt("Cards are being dealt...");

dealCards(deckOfCards, playersCards);
dealCards(deckOfCards, dealersCards);

revealHand(playersCards, dealersCards);

prompt("Ok player: HIT or STAY?");
let playerChoice = readline.question();
// Conditional logic for consequences of player choice here:
console.log(playerChoice);
