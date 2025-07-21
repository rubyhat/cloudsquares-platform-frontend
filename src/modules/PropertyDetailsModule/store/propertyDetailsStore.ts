import { create } from "zustand";
import { Property } from "../../../shared/interfaces/Property";

interface PropertyDetailsStore {
  currentProperty: Property | null;
  setCurrentProperty: (v: Property | null) => void;
}

export const propertyDetailsStore = create<PropertyDetailsStore>((set) => ({
  currentProperty: null,
  setCurrentProperty: (v) => set({ currentProperty: v }),
}));
