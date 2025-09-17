import { Property } from "@/shared/interfaces/Property";
import { PropertyBasicDataFormData } from "../validations";

export const normalizePropertyBasicData = (
  editableProperty: Property,
): PropertyBasicDataFormData => {
  const {
    title,
    description,
    price,
    discount,
    listing_type,
    status,
    category,
  } = editableProperty;
  return {
    title,
    description,
    price,
    discount,
    listing_type,
    status,
    category_id: category.id,
  };
};
