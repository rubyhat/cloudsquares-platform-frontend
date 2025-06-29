import { axiosBaseWrap } from "../../../configs/api";
import { PostNewUserResponseData } from "../../../shared/interfaces";
import { RegistrationFormData } from "../validations";

export const apiRegistrationModule = {
  postNewUser(data: RegistrationFormData): Promise<PostNewUserResponseData> {
    return axiosBaseWrap
      .post("/users", { user: data })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
