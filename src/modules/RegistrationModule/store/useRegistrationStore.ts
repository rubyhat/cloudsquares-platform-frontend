import { create } from "zustand";

interface RegistrationStore {
  showRegistrationDrawer: boolean;
  setShowRegistrationDrawer: (v: boolean) => void;
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  showRegistrationDrawer: false,
  setShowRegistrationDrawer: (v) => set({ showRegistrationDrawer: v }),
}));
