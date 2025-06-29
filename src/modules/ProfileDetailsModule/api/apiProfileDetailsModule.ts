import { axiosBaseWrap } from "../../../configs/api";
import { User } from "../../../shared/interfaces";

export const apiProfileDetailsModule = {
  patchUserProfile(id: string, data: Partial<User>) {
    return axiosBaseWrap
      .patch("/users/" + id, data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
