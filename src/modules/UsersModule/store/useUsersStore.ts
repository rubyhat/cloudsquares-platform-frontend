import { create } from "zustand";
import { BasicDrawerMode } from "../../../shared/interfaces/Shared";

interface UsersStore {
  showUserFormDrawer: boolean;
  setShowUserFormDrawer: (v: boolean) => void;
  mode: BasicDrawerMode;
  setMode: (v: BasicDrawerMode) => void;
  openDrawerWithMode: (v: BasicDrawerMode) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
  showUserFormDrawer: false,
  setShowUserFormDrawer: (v) => set({ showUserFormDrawer: v }),
  mode: BasicDrawerMode.create,
  setMode: (v) => set({ mode: v }),
  openDrawerWithMode: (v) => set({ showUserFormDrawer: true, mode: v }),
}));
