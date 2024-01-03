import { State } from "@/models/state";
import { create } from "zustand";

export const useMuyiEthStore = create<State>()((set) => ({
  provider: null,
  isInitialized: false,
  isLoading: true,
  web3: undefined,
  contract: null,
  setState: (key, value) => set((state) => ({ [key]: value })),
  setAllState: (newState) => set((state) => ({ ...newState })),
}));
