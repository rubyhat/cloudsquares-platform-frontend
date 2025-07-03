import { axiosBaseWrap } from "../../../configs/api";
import { Property } from "../../../shared/interfaces/Property";

export const apiPropertyDetailsModule = {
  getPropertyDetailsById(id: string): Promise<Property> {
    return axiosBaseWrap
      .get("/properties/" + id)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
