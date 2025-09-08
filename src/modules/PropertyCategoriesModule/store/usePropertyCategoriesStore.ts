import { create } from "zustand";
import { BasicDrawerMode } from "@/shared/interfaces/Shared";
import { PropertyCategory } from "@/shared/interfaces/PropertyCategory";

interface PropertyCategoriesStore {
  showPropertyCategoriesFormDrawer: boolean;
  setShowPropertyCategoriesFormDrawer: (v: boolean) => void;
  mode: BasicDrawerMode;
  setMode: (v: BasicDrawerMode) => void;
  openDrawerWithMode: (v: BasicDrawerMode) => void;
  editablePropertyCategory: PropertyCategory | null;
  setEditablePropertyCategory: (v: PropertyCategory | null) => void;
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
    editablePropertyCategory: null,
    setEditablePropertyCategory: (v) => set({ editablePropertyCategory: v }),
  }),
);
