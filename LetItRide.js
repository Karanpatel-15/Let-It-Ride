// Let It Ride Poker Game

// constants for creating the deck
const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const values = [
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
  "A",
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

const startRound = () => {
  console.log("Let It Ride Poker Game");
  deck = shuffle(cards());
  hand = [];
  deal3Hand();
  console.log("------ 3 Card Hand ------");
  printHand(hand);
  askNextMove();
};

const askNextMove = () => {
  // ask the user what they want to do
  if (betNumber == 1) {
    letItRide();
    // pullBet();
  } else if (betNumber == 2) {
    // pullBet();
    letItRide();
  }
};

const pullBet = () => {
  console.log("Pulling Bet");
  totalBet -= betAmount;
  nextRound();
};

const letItRide = () => {
  console.log("Letting It Ride");
  nextRound();
};

const nextRound = () => {
  if (betNumber == 1) {
    betNumber = 2;
    console.log("------ 4th Card ------");
    printHand([deal4thCard()]);
    askNextMove();
  } else if (betNumber == 2) {
    betNumber = 3;
    console.log("------ 5th Card ------");
    printHand([deal5thCard()]);
    endRound();
  }
};

const evaluateHand = () => {
  // evaluate the hand and return the winnings multiplier
  return 3;
};

const endRound = () => {
  totalBet *= evaluateHand();
  console.log("Total Bet: " + totalBet);
};

// default variables
let yourMoney = 1000;
let handsPlayed = 0;
let handsWon = 0;

// round specific variables
let deck;
let hand = [];
let betAmount = 5; // min bet is 5
let totalBet = betAmount * 3; // total bet for the round is 3 * betAmount
let betNumber = 1;

startRound();

// letItRide();
// console.log("------ 4th Card ------");
// printHand([deal4thCard()]);
// letItRide();

// pullBet();
// console.log("------ 5th Card ------");
// printHand([deal5thCard()]);
