import { create } from "zustand";

interface appState {
  isCarModal: boolean;
  toggleCarModal: () => void;
}
export const appStore = create<appState>()((set) => ({
  isCarModal: false,
  toggleCarModal: () => set((state) => ({ isCarModal: !state.isCarModal })),
}));
