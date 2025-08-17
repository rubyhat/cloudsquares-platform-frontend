import { create } from "zustand";

interface PropertyCreateStore {
  temp: string;
}

export const usePropertyCreateStore = create<PropertyCreateStore>(() => ({
  temp: "",
}));
