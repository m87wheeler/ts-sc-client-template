import create from "zustand";

interface IAppState {
  count: number;
  increaseCount: () => void;
  resetCount: () => void;
}

export const useAppState = create<IAppState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}));
