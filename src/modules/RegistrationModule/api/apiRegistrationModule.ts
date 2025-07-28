import { apiSharedUsers } from "../../../shared/api";
import { PostNewUserResponseData } from "../../../shared/interfaces";
import { RegistrationFormData } from "../validations";

/**
 * API-модуль для регистрации нового пользователя (публичная часть)
 */
export const apiRegistrationModule = {
  /**
   * Регистрация нового пользователя
   * @param data - Данные формы регистрации
   * @returns Ответ с данными нового пользователя
   */
  postNewUser(data: RegistrationFormData): Promise<PostNewUserResponseData> {
    return apiSharedUsers.postNewUser(data);
  },
};
