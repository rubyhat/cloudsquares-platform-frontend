import { axiosBaseWrap } from "@/configs/api";
import { Property } from "../interfaces/Property";

export const apiSharedPropertyDetails = {
  getPropertyDetailsById(idOrSlug: string): Promise<Property> {
    return axiosBaseWrap
      .get("/properties/" + idOrSlug)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
