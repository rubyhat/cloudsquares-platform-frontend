import { axiosBaseWrap } from "@/configs/api";
import { PropertyCategory } from "../interfaces/PropertyCategory";

export const apiSharedPropertyCategories = {
  getAllPropertyCategories: (agency_id: string): Promise<PropertyCategory[]> =>
    axiosBaseWrap
      .get("/property_categories?agency_id=" + agency_id)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      }),
};
