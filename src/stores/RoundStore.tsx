// @ts-nocheck

import { create } from "zustand";
import { shuffle, cards, dealHand, evaluateHand } from "./LetItRide";
import swal from 'sweetalert';

{/* <script src="alert/dist/sweetalert-dev.js"></script>
<link rel="stylesheet" href="alert/dist/sweetalert.css"> */}
// import above code from

type THistory = "pull" | "letItRide";
export interface ICard {
  suit: string;
  value: string;
  shortValue: string;
  isCommunityCard: boolean;
  isFacedDown?: boolean;
}

interface IRoundStore {
  deck: ICard[];
  playerHand: ICard[];
  bet: number;
  round: number;
  totalBet: number;
  isRoundInProgress: boolean;
  startRound: () => void;
  setBet: (bet: number) => void;
  pull: () => void;
  letItRide: () => void;
  evaluateHand: () => void;
  playerTotalMoney: number;
  history: THistory[];
}

export const useRoundStore = create<IRoundStore>((set, get) => ({
  deck: [],
  playerHand: [],
  bet: 0,
  totalBet: 0,
  round: 0,
  history: [],
  isRoundInProgress: false,
  playerTotalMoney: 1000,
  startRound: () => {
    console.log("Round started");
    if (get().totalBet > get().playerTotalMoney) {
      // alert("You don't have enough money to make this bet!");
      swal({
        title: 'Insufficient funds',
        text: `You don't have enough money to make this bet!`,
        icon: 'error',
        button: 'OK',
      })
      return;
    } if (get().totalBet === 0) {
      // alert("You must place a bet!");
      swal({
        title: 'No bet placed',
        text: `You must place a bet!`,
        icon: 'error',
        button: 'OK',
      })
      return;
    }
    set({ deck: shuffle(cards()) });
    set((state) => ({
      playerHand: dealHand(state.deck) as ICard[],
    }));
    set({
      isRoundInProgress: true,
      playerTotalMoney: get().playerTotalMoney - get().totalBet,
    });
  },
  setBet: (bet: number) => {
    set({ bet: bet, totalBet: bet * 3 });
  },
  pull: () => {
    set((state) => ({
      totalBet: state.totalBet - state.bet,
      playerTotalMoney: state.playerTotalMoney + state.bet,
      round: state.round + 1,
      history: [...state.history, "pull"],
    }));
    if (get().round === 2) {
      get().evaluateHand();
    }
  },
  letItRide: () => {
    set((state) => ({
      round: state.round + 1,
      history: [...state.history, "letItRide"],
    }));
    if (get().round === 2) {
      get().evaluateHand();
    }
  },
  evaluateHand: () => {
    setTimeout(() => {
      const evaluation = evaluateHand(get().playerHand);
      const totalChange =
        evaluation.payOff == -1 ? 0 : evaluation.payOff * get().totalBet;
      set({
        isRoundInProgress: false,
        round: 0,
        playerTotalMoney: get().playerTotalMoney + totalChange,
        history: [],
      });
      // alert(
      //   `Round Ended, your hand was ${evaluation.typeOfHand}! Payoff was ${evaluation.payOff}x your bet!`
      // );
      swal({
        title: 'Round Ended!',
        text: `Your hand was ${evaluation.typeOfHand}! Payoff was ${evaluation.payOff}x your bet!`,
        button: 'OK',
      })
    }, 1000);
  },
}));
