import { create } from "zustand";
import { Property } from "@/shared/interfaces/Property";

interface PropertyDetailsStore {
  currentProperty: Property | null;
  setCurrentProperty: (v: Property | null) => void;
  showDeactivateDrawer: boolean;
  setShowDeactivateDrawer: (v: boolean) => void;
  showOwnersDrawer: boolean;
  setShowOwnersDrawer: (v: boolean) => void;
  editableProperty: Property | null;
  setEditableProperty: (v: Property | null) => void;
}

export const usePropertyDetailsStore = create<PropertyDetailsStore>((set) => ({
  currentProperty: null,
  setCurrentProperty: (v) => set({ currentProperty: v }),
  editableProperty: null,
  setEditableProperty: (v) => set({ editableProperty: v }),
  showDeactivateDrawer: false,
  setShowDeactivateDrawer: (v) => set({ showDeactivateDrawer: v }),
  showOwnersDrawer: false,
  setShowOwnersDrawer: (v) => set({ showOwnersDrawer: v }),
}));
