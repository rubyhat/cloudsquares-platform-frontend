import { apiSharedUsers } from "../../../shared/api";
import { User } from "../../../shared/interfaces";
import { UsersFormData } from "../validations/usersFormValidationsSchema";

/**
 * API-модуль для создания сотрудника агентства недвижимости
 */
export const apiUsersFormModule = {
  /**
   * Создание пользователя-сотрудника
   * @param data - Данные формы создания сотрудника
   * @returns Ответ с данными нового пользователя
   */
  postNewUser(data: UsersFormData): Promise<User> {
    return apiSharedUsers.postNewUser(data);
  },
};
