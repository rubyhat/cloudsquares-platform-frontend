import { axiosBaseWrap } from "@/configs/api";
import { PropertyCategoriesDataFormData } from "../validations";

export const apiPropertyCategoryFormModule = {
  createPropertyCategory(data: PropertyCategoriesDataFormData) {
    return axiosBaseWrap
      .post("/property_categories", { property_category: data })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};
