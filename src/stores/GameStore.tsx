import { create } from "zustand";

interface IGameStore {
  history: string[];
  total: number;
}

export const useGameStore = create<IGameStore>((set) => ({}));
