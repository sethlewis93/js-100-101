/** PRIORITY: CLEAN UP dealCards() and mutate deck obj
 */

let readline = require("readline-sync");

const prompt = (message) => console.log(`${message}`);

/** INITIALIZE DECK */

let deck = {
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

let playersCards = [];
let dealersCards = [];

function dealCards(participantsHand) {
  let indexOfCards = Object.entries(deck);
  while (participantsHand.length < 2) {
    let randomNum = getRandomNumber(0, 12);
    let randomCard = indexOfCards[randomNum][0];
    let numCardsLeft = deck[randomCard][1];

    let numCardsInHand = numCardsLeft - numCardsLeft + 1;
    participantsHand.push([randomCard, numCardsInHand]);

    numCardsLeft -= 1;
  }

  participantsHand.forEach((card) => {
    let [cardName, numCards] = card;
    console.log(`
    Participant has ${numCards} ${cardName}(s) in hand
    `);
  });
}
dealCards(playersCards);
dealCards(dealersCards);
console.log(deck);
console.log(`
  ${playersCards},
  ${dealersCards}
`);
