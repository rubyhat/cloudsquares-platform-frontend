import { create } from "zustand";

export interface HomeStore {
  showAgencyInfoDrawer: boolean;
  setShowAgencyInfoDrawer: (v: boolean) => void;
}

export const useHomeStore = create<HomeStore>((set) => ({
  showAgencyInfoDrawer: false,
  setShowAgencyInfoDrawer: (v) => set({ showAgencyInfoDrawer: v }),
}));
