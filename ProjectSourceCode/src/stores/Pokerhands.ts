// @ts-nocheck
// use poker-hands library to evaluate the hand
// https://www.npmjs.com/package/poker-hands
// import * as pokerHands from "poker-hands"; // import the poker-hands library
import * as _ from "lodash"

function countCards(indexToCount, hand) {
  return _.countBy(hand.split(' '), indexToCount);
}
var countValues = _.curry(countCards)(0);
var countSuits = _.curry(countCards)(1);

function hasAKind(count, hand) {
  return _.findKey(countValues(hand), _.curry(_.eq)(count));
}

var hasPair = _.curry(hasAKind)(2);
var hasThreeOfAKind = _.curry(hasAKind)(3);
var hasFourOfAKind = _.curry(hasAKind)(4);

var cardOrder = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

function getValueIndex(value) {
  return cardOrder.indexOf(value);
}

function sortCards(hand) {
  return _.sortBy(Object.keys(countValues(hand)), getValueIndex);
}

function hasTwoPairs(hand) {
  var values = countValues(hand);
  var leftPair = _.findKey(values, _.curry(_.eq)(2));
  var rightPair = _.findLastKey(values, _.curry(_.eq)(2));
  if (leftPair && rightPair && leftPair !== rightPair) {
    return sortCards(leftPair + ' ' + rightPair);
  }
}

function highestCard(hand) {
  return sortCards(hand).filter(function (value) {
    return value !== hasPair(hand);
  });
}

function hasFlush(hand) {
  return _.findKey(countSuits(hand), _.eq.bind(null, 5));
}


function hasFullHouse(hand) {
  var values = countValues(hand);
  if (_.findKey(values, _.eq.bind(null, 2))) {
    return _.findKey(values, _.eq.bind(null, 3));
  }
}

function hasStraight(hand) {
  var sortedCards = highestCard(hand);
  var isStraight = sortedCards.every(function (card, index, cards) {
    if (index === 4) {return true; }
    return cards[index + 1] === cardOrder[cardOrder.indexOf(card) + 1];
  });
  return isStraight ? sortedCards[0] : false;
}

function hasStraightFlush(hand) {
  if (hasFlush(hand)) {
    return hasStraight(hand);
  }
}

function hasRoyalFlush(hand) {
  return hasStraightFlush(hand) === 'A';
}

var bestHands = [
  hasRoyalFlush,    // 0
  hasStraightFlush, // 1
  hasFourOfAKind,   // 2
  hasFullHouse,     // 3
  hasFlush,         // 4
  hasStraight,      // 5
  hasThreeOfAKind,  // 6
  hasTwoPairs,      // 7
  hasPair,          // 8
  highestCard       // 9
];

function getHandStrength(hand) {
  return _.find(_.range(bestHands.length), function (bestHandsIndex) {
    return bestHands[bestHandsIndex](hand);
  });
}

function judgeWinner(players) {
  var handStrengths = players.map(getHandStrength);
  if (handStrengths[0] !== handStrengths[1]) {
    return handStrengths.indexOf(_.min(handStrengths));
  }
  var tiebreakers = players.map(bestHands[handStrengths[0]]);
  return tiebreakers.indexOf(_.min(tiebreakers, getValueIndex));
}

export default {
  highestCard: highestCard,
  hasPair: hasPair,
  hasTwoPairs: hasTwoPairs,
  hasThreeOfAKind: hasThreeOfAKind,
  hasStraight: hasStraight,
  hasFlush: hasFlush,
  hasFullHouse: hasFullHouse,
  hasFourOfAKind: hasFourOfAKind,
  hasStraightFlush: hasStraightFlush,
  hasRoyalFlush: hasRoyalFlush,
  getHandStrength: getHandStrength,
  judgeWinner: judgeWinner
};

