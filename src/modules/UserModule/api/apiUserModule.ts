import { axiosBaseWrap } from "../../../configs/api";
import { User } from "../../../shared/interfaces";

export const apiUserModule = {
  getCurrentUser(): Promise<User> {
    return axiosBaseWrap
      .get("/me")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
