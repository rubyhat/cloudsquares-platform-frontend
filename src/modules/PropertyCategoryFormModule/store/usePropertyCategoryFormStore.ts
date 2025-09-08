import { create } from "zustand";
import { PropertyCategoriesDataFormData } from "../validations";

interface PropertyCategoryFormStore {
  initialState?: PropertyCategoriesDataFormData;
  setInitialState: (v: PropertyCategoriesDataFormData) => void;
}

export const usePropertyCategoryFormStore = create<PropertyCategoryFormStore>(
  (set) => ({
    initialState: {
      title: "",
      parent_id: "",
      // position: 0,
    },
    setInitialState: (v) => set({ initialState: v }),
  }),
);
