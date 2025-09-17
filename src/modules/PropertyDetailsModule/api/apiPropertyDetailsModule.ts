import { axiosBaseWrap } from "../../../configs/api";

export const apiPropertyDetailsModule = {
  deactivatePropertyById(property_id: string) {
    return axiosBaseWrap
      .delete("/properties/" + property_id)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
