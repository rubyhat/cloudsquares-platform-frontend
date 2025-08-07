import { create } from "zustand";
import { BasicDrawerMode } from "../../../shared/interfaces/Shared";
import { User } from "../../../shared/interfaces";

interface UsersStore {
  showUserFormDrawer: boolean;
  setShowUserFormDrawer: (v: boolean) => void;
  mode: BasicDrawerMode;
  setMode: (v: BasicDrawerMode) => void;
  openDrawerWithMode: (v: BasicDrawerMode) => void;
  editableUser: User | null;
  setEditableUser: (v: User | null) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
  showUserFormDrawer: false,
  setShowUserFormDrawer: (v) => set({ showUserFormDrawer: v }),
  mode: BasicDrawerMode.create,
  setMode: (v) => set({ mode: v }),
  openDrawerWithMode: (v) => set({ showUserFormDrawer: true, mode: v }),
  editableUser: null,
  setEditableUser: (v) => set({ editableUser: v }),
}));
