import { axiosBaseWrap } from "../../../configs/api";
import { apiSharedUsers } from "../../../shared/api";
import { User } from "../../../shared/interfaces";
import { UsersFormData } from "../validations/usersFormValidationsSchema";

/**
 * API-модуль для создания и редактирования сотрудника агентства недвижимости
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
  /**
   * Редактирование пользователя-сотрудника
   * @param data - Данные формы редактирования сотрудника
   * @returns Ответ с данными обновленного пользователя
   */
  patchUserById(data: UsersFormData, id: string): Promise<User> {
    return axiosBaseWrap
      .patch("/users/" + id, data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
