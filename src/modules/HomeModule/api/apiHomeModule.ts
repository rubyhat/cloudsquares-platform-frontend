import { axiosBaseWrap } from "../../../configs/api";
import { Agency } from "../../../shared/interfaces/Agency";

export const apiHomeModule = {
  patchAgencyInfo(id: string, data: Partial<Agency>) {
    return axiosBaseWrap
      .patch("/agencies/" + id, data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
