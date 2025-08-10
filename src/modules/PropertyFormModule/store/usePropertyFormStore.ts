import { create } from "zustand";
import { PropertyFormMode } from "../../../shared/interfaces/PropertyForm";

interface PropertyFormStore {
  mode: PropertyFormMode;
  setMode: (v: PropertyFormMode) => void;
}

export const usePropertyFormStore = create<PropertyFormStore>((set) => ({
  mode: PropertyFormMode.create,
  setMode: (v) => set({ mode: v }),
}));
