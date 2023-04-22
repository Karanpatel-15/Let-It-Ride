// @ts-nocheck

// Let It Ride Poker Game

// use poker-hands library to evaluate the hand
// https://www.npmjs.com/package/poker-hands
// import * as pokerHands from "poker-hands"; // import the poker-hands library

import pokerHands from "./Pokerhands";

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
  "T", // 10
  "J",
  "Q",
  "K",
  "A",
];

// create a card object
const card = (suit, value) => {
  // create a short value for the card (2-10, J, Q, K, A) with suit (H, D, S, C)
  let shortValue = value;
  if (suit == "Hearts") {
    shortValue += "H";
  } else if (suit == "Diamonds") {
    shortValue += "D";
  } else if (suit == "Spades") {
    shortValue += "S";
  } else if (suit == "Clubs") {
    shortValue += "C";
  }

  const card = {
    suit: suit,
    value: value,
    shortValue: shortValue, // 2H format
    isFacedDown: false,
  };
  return card;
};

// create a deck of cards
export const cards = () => {
  const cards = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      cards.push(card(suits[i], values[j]));
    }
  }
  return cards;
};

// shuffle the deck
export const shuffle = (deck) => {
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
const deal3Hand = (deck) => {
  const hand = [];
  for (let i = 0; i < 3; i++) {
    hand.push(getRandomCard(deck));
  }
  return hand;
};

export const dealHand = (deck) => {
  const hand = [];
  for (let i = 0; i < 5; i++) {
    hand.push(getRandomCard(deck));
  }
  hand[3]['isCommunityCard'] = true;
  hand[4]['isCommunityCard'] = true;
  return hand;
}

// deal 4th card
// const deal4thCard = () => {
//   tempCard = getRandomCard(deck);
//   hand.push(tempCard);
//   return tempCard;
// };

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

export const evaluateHand = (hand) => {
  // make poker hand lib systax for the hand "2H 3H 4H 5H 6H"
  let pokerHand = "";
  for (let i = 0; i < hand.length; i++) {
    pokerHand += hand[i].shortValue + " ";
  }
  pokerHand = pokerHand.trim();
  let strength = pokerHands.getHandStrength(pokerHand);

  /* 
  RoyalFlush, strength = 0, payoff = 1000
  StraightFlush, strength = 1, payoff = 200
  FourOfAKind, strength = 2, payoff = 50
  FullHouse, strength = 3, payoff = 11
  Flush, strength = 4, payoff = 8
  Straight, strength = 5, payoff = 5
  ThreeOfAKind, strength = 6, payoff = 3
  TwoPairs, strength = 7, payoff = 2
  Pair, strength = 8, payoff = 1 (note this is not high pair need to add that)
  highestCard, strength = 9, payoff = -1
  */

  if (strength == 0) {
    return {
      typeOfHand: "Royal Flush",
      payOff: 1000,
    };
  } else if (strength == 1) {
    return {
      typeOfHand: "Straight Flush",
      payOff: 200,
    };
  } else if (strength == 2) {
    return {
      typeOfHand: "Four of a Kind",
      payOff: 50,
    };
  } else if (strength == 3) {
    return {
      typeOfHand: "Full House",
      payOff: 11,
    };
  } else if (strength == 4) {
    return {
      typeOfHand: "Flush",
      payOff: 8,
    };
  } else if (strength == 5) {
    return {
      typeOfHand: "Straight",
      payOff: 5,
    };
  } else if (strength == 6) {
    return {
      typeOfHand: "Three of a Kind",
      payOff: 3,
    };
  } else if (strength == 7) {
    return {
      typeOfHand: "Two Pair",
      payOff: 2,
    };
  } else if (strength == 8) {
    // make sure its a high pair (T, J, Q, K, A) and not a low pair (2, 3, 4, 5, 6)
    // find which card is the pair
    let pairCard = "";
    const map = {};
    for (let i = 0; i < hand.length; i++) {
      // if the card is in the map then it is a pair
      if (map[hand[i].value] == 1) {
        pairCard = hand[i].value;
        break;
      } else {
        map[hand[i].value] = 1;
      }
    }
    // check if the pair is high
    if (
      pairCard == "T" ||
      pairCard == "J" ||
      pairCard == "Q" ||
      pairCard == "K" ||
      pairCard == "A"
    ) {
      return {
        typeOfHand: "High Pair",
        payOff: 1,
      };
    } else {
      return {
        typeOfHand: "Low Pair",
        payOff: -1,
      };
    }
    // console.log("Pair");
    // payOff = 1;
  }
  return {
    typeOfHand: "Highest Card",
    payOff: -1,
  };
};

// const endRound = () => {
//   totalBet *= evaluateHand();
//   console.log("Bet turnout: " + totalBet);
//   yourMoney += totalBet;
//   console.log("Your Money: " + yourMoney);
//   resetRound();
// };

// const resetRound = () => {
//   // reset round specific variables
//   deck = [];
//   hand = [];
//   betAmount = 5; // min bet is 5
//   totalBet = betAmount * 3; // total bet for the round is 3 * betAmount
//   betNumber = 1;
// };

// default variables
// let yourMoney = 1000;
// let handsPlayed = 0;
// let handsWon = 0;

// round specific variables
// let deck;
// let hand = [];
// let betAmount = 5; // min bet is 5
// let totalBet = betAmount * 3; // total bet for the round is 3 * betAmount
// let betNumber = 1;

// for (let i = 0; i < 10; i++) {
//   console.log("Round: " + i + "\n");
//   startRound();
// }

// letItRide();
// console.log("------ 4th Card ------");
// printHand([deal4thCard()]);
// letItRide();

// pullBet();
// console.log("------ 5th Card ------");
// printHand([deal5thCard()]);
