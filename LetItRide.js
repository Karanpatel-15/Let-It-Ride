// Let It Ride Poker Game

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

// shuffle the deck
const shuffle = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
  return deck;
};

// get a random card from the deck and remove it from the deck
const getRandomCard = (deck) => {
  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  deck.splice(deck.indexOf(randomCard), 1);
  return randomCard;
};

// deal a hand of 3 cards
const deal3Hand = () => {
  for (let i = 0; i < 3; i++) {
    hand.push(getRandomCard(deck));
  }
  return hand;
};

// deal 4th card
const deal4thCard = () => {
  tempCard = getRandomCard(deck);
  hand.push(tempCard);
  return tempCard;
};

// deal 5th card
const deal5thCard = () => {
  tempCard = getRandomCard(deck);
  hand.push(tempCard);
  return tempCard;
};

// print out the deck
const printDeck = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    console.log(deck[i].value + " of " + deck[i].suit);
  }
};

// print out the hand
const printHand = (hand) => {
  for (let i = 0; i < hand.length; i++) {
    console.log(hand[i].value + " of " + hand[i].suit);
  }
};

// create a deck
let deck = shuffle(cards());
const hand = [];

console.log("Let It Ride Poker Game");
console.log("------ 3 Card Hand ------");
printHand(deal3Hand());
console.log("------ 4th Card ------");
printHand([deal4thCard()]);
console.log("------ 5th Card ------");
printHand([deal5thCard()]);
