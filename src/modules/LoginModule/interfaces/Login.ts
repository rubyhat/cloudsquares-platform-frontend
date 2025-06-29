import { LoginFormDataTypes } from "../validations";

/**
 * Данные запроса на вход в систему.
 *
 * Использует те же поля, что и `LoginFormDataTypes` (логин и пароль).
 */
export type LoginRequestData = LoginFormDataTypes;

/**
 * Данные запроса на обновление токена.
 */
export interface LoginRefreshRequestData {
  /** Refresh-токен для обновления сессии */
  refresh_token: string;
}

/**
 * Ответ API при успешной аутентификации или обновлении токенов.
 */
export interface LoginResponseData {
  /** Токен доступа (используется для авторизации API-запросов) */
  access_token: string;

  /** Refresh-токен (используется для обновления `access_token`) */
  refresh_token: string;
}
