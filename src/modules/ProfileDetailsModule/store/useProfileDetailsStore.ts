import { create } from "zustand";

interface ProfileDetailsStore {
  showEditProfileDrawer: boolean;
  setShowEditProfileDrawer: (v: boolean) => void;

  showLogoutDrawer: boolean;
  setShowLogoutDrawer: (v: boolean) => void;
}

export const useProfileDetailsStore = create<ProfileDetailsStore>((set) => ({
  showEditProfileDrawer: false,
  setShowEditProfileDrawer: (v) => set({ showEditProfileDrawer: v }),
  showLogoutDrawer: false,
  setShowLogoutDrawer: (v) => set({ showLogoutDrawer: v }),
}));
