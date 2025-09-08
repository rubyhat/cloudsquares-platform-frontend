import { axiosBaseWrap } from "@/configs/api";
import { PropertyCategoriesDataFormData } from "../validations";

export interface UpdatePropertyCategoryParams {
  id: string;
  data: Partial<PropertyCategoriesDataFormData>;
}

export const apiPropertyCategoryFormModule = {
  createPropertyCategory(data: PropertyCategoriesDataFormData) {
    return axiosBaseWrap
      .post("/property_categories", { property_category: data })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },

  updatePropertyCategory({ id, data }: UpdatePropertyCategoryParams) {
    return axiosBaseWrap
      .patch(`/property_categories/${id}`, { property_category: data })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },

  deletePropertyCategory(id: string) {
    return axiosBaseWrap
      .delete(`/property_categories/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};
