import { axiosBaseWrap } from "../../configs/api";

/**
 * API-модуль для работы с общими методами пользователя
 */
export const apiSharedUsers = {
  /**
   * Обобщённая функция отправки данных для создания нового пользователя
   *
   * @param data - данные формы (generic)
   * @returns Ответ от сервера с информацией о новом пользователе
   */
  postNewUser<T extends object, TResponse = unknown>(
    data: T,
  ): Promise<TResponse> {
    return axiosBaseWrap
      .post("/users", { user: data })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
