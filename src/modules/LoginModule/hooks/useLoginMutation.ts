import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { apiLoginModule } from "../api";
import { LoginFormDataTypes } from "../validations";
import { useLoginStore } from "../store";
import { showApiError } from "../../../shared/utils";

/**
 * Хук для выполнения авторизации пользователя.
 *
 * - Отправляет `POST`-запрос с данными формы входа.
 * - Сохраняет `access_token` и `refresh_token` в Zustand-хранилище.
 * - Перенаправляет пользователя на последнюю посещённую страницу или главную.
 * - Показывает уведомления при успехе и ошибке.
 *
 * @returns Объект мутации с методом `mutate` и состояниями загрузки, успеха и ошибки.
 */
export const useLoginMutation = () => {
  const navigate = useNavigate();
  const setAccessToken = useLoginStore((state) => state.setAccessToken);
  const lastVisitedUrl = useLoginStore((state) => state.lastVisitedUrl);
  const setLastVisitedUrl = useLoginStore((state) => state.setLastVisitedUrl);

  return useAxiosMutation({
    /**
     * Функция запроса авторизации.
     *
     * @param {LoginFormDataTypes} data Данные формы (логин и пароль).
     * @returns {Promise<any>} Ответ от сервера.
     */
    mutationFn: (data: LoginFormDataTypes) => apiLoginModule.postLogin(data),

    /**
     * Обработка успешного входа.
     *
     * - Сохраняет токены в Zustand.
     * - Показывает toast-уведомление.
     * - Перенаправляет на сохранённый URL или на главную.
     *
     * @param response Ответ с токенами доступа.
     */
    onSuccess: (response) => {
      setAccessToken(response.access_token, response.refresh_token);
      toast.success("Успешный вход в систему!");
      navigate(lastVisitedUrl || "/");
      setLastVisitedUrl(null);
    },

    /**
     * Обработка ошибки при входе.
     * Показывает toast с ошибкой и логирует в консоль.
     *
     * @param error Объект ошибки.
     */
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error("Ошибка авторизации:", error);
      showApiError(error);
      return error;
    },
  });
};
