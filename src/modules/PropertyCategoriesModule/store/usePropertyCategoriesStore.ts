import { BasicDrawerMode } from "@/shared/interfaces/Shared";
import { create } from "zustand";

interface PropertyCategoriesStore {
  showPropertyCategoriesFormDrawer: boolean;
  setShowPropertyCategoriesFormDrawer: (v: boolean) => void;
  mode: BasicDrawerMode;
  setMode: (v: BasicDrawerMode) => void;
  openDrawerWithMode: (v: BasicDrawerMode) => void;
}

export const usePropertyCategoriesStore = create<PropertyCategoriesStore>(
  (set) => ({
    showPropertyCategoriesFormDrawer: false,
    setShowPropertyCategoriesFormDrawer: (v) =>
      set({ showPropertyCategoriesFormDrawer: v }),
    mode: BasicDrawerMode.create,
    setMode: (v) => set({ mode: v }),
    openDrawerWithMode: (v) =>
      set({ showPropertyCategoriesFormDrawer: true, mode: v }),
  }),
);
