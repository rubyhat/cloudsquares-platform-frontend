import { create } from "zustand";
import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";
import { ListingType, PropertyStatus } from "@/shared/interfaces/Property";
import { PropertyOwnerRole } from "@/shared/interfaces/PropertyOwner";
import {
  PropertyBasicDataFormData,
  PropertyOwnersDataFormData,
} from "../validations";

export enum PropertyFormSteps {
  /** Базовые минимальные данные объекта недвижимости */
  basic_data = "basic_data",
  /** Данные собственников недвижимости */
  property_owners = "property_owners",
  /** Фотографии объекта недвижимости */
  photos = "photos",
  /** Адрес объекта недвижимости */
  location = "location",
  /** Кастомные характеристики объекта недвижимости */
  custom_characteristics = "custom_characteristics",
}

interface PropertyFormStore {
  /** Режим формы (create/edit/view) */
  mode: PropertyFormMode;
  setMode: (v: PropertyFormMode) => void;

  /** Начальное состояние базовых данных */
  initialBasicDataState: PropertyBasicDataFormData;

  /** Начальное состояние данных владельцев */
  initialOwnersDataState: PropertyOwnersDataFormData;

  /** Текущий шаг формы */
  step: PropertyFormSteps;
  setStep: (v: PropertyFormSteps) => void;

  /**
   * Единый порядок шагов формы — источник правды для всего приложения.
   * По умолчанию берём порядок из enum (Object.values хранит порядок объявления string-enum).
   * Можно переопределять динамически (например, отключить шаг «photos» для некоторых сценариев).
   */
  stepsOrder: PropertyFormSteps[];
  setStepsOrder: (list: PropertyFormSteps[]) => void;

  /** Индекс текущего шага в stepsOrder */
  getCurrentStepIndex: () => number;

  /** Управление открытием/закрытием drawer для создания категории */
  showPropertyCategoryDrawer: boolean;
  setShowPropertyCategoryDrawer: (v: boolean) => void;
}

const initialBasicDataState: PropertyBasicDataFormData = {
  title: "",
  description: "",
  price: 0,
  discount: 0,
  listing_type: ListingType.sale,
  status: PropertyStatus.pending,
  category_id: "",
};

const initialOwnersDataState: PropertyOwnersDataFormData = {
  first_name: "",
  last_name: "",
  middle_name: "",
  phone: "",
  email: "",
  notes: "",
  role: PropertyOwnerRole.primary,
  user_id: "",
};

export const usePropertyFormStore = create<PropertyFormStore>((set, get) => ({
  mode: PropertyFormMode.create,
  setMode: (v) => set({ mode: v }),
  initialBasicDataState,
  initialOwnersDataState,

  step: PropertyFormSteps.property_owners,
  setStep: (v) => set({ step: v }),
  stepsOrder: Object.values(PropertyFormSteps) as PropertyFormSteps[],
  setStepsOrder: (list) => set({ stepsOrder: list }),
  getCurrentStepIndex: () => {
    const { stepsOrder, step } = get();
    const idx = stepsOrder.indexOf(step);
    return idx < 0 ? 0 : idx;
  },
  showPropertyCategoryDrawer: false,
  setShowPropertyCategoryDrawer: (v) => set({ showPropertyCategoryDrawer: v }),
}));
