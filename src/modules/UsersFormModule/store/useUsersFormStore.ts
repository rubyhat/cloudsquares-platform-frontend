import { create } from "zustand";
import { UsersFormData } from "../validations/usersFormValidationsSchema";
import { UserRole } from "../../../shared/permissions/roles";

interface UsersFormStore {
  initialState: UsersFormData;
  setInitialState: (v: UsersFormData) => void;
}

export const useUsersFormStore = create<UsersFormStore>((set) => ({
  initialState: {
    phone: "",
    email: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    password: "",
    password_confirmation: "",
    country_code: "KZ",
    role: UserRole.agent,
  },
  setInitialState: (v) => set({ initialState: v }),
}));
