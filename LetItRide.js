// constants for creating the deck
const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

// create a card object
const card = (suit, value) => {
  const card = {
    suit: suit,
    value: value,
  };
  return card;
};

// create a deck of cards
const cards = () => {
  const cards = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      cards.push(card(suits[i], values[j]));
    }
  }
  return cards;
};

// create a deck
let deck = cards();

// print out the deck
const printDeck = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    console.log(deck[i].value + " of " + deck[i].suit);
  }
};

// get a random card from the deck and remove it from the deck
const getRandomCard = (deck) => {
  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  deck.splice(deck.indexOf(randomCard), 1);
  return randomCard;
};

// reset the deck
const resetDeck = () => {
  deck = cards();
};
