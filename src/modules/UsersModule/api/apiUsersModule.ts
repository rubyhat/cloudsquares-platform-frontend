import { axiosBaseWrap } from "../../../configs/api";
import { User } from "../../../shared/interfaces";

export const apiUsersModule = {
  getAllUsers(): Promise<User[]> {
    return axiosBaseWrap
      .get("/users")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
  deleteUserById(id: string) {
    return axiosBaseWrap
      .delete("/users/" + id)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
