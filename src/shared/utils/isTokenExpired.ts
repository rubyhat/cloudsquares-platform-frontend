import { decodeToken } from "./decodeToken";

/**
 * Проверяет, истёк ли `access_token`.
 *
 * - Декодирует `token` с помощью `decodeToken()`.
 * - Сравнивает `exp` (время истечения токена) с текущим временем.
 * - Возвращает `true`, если токен отсутствует или уже истёк.
 *
 * @param {string | null} token Токен доступа (`access_token`).
 * @returns {boolean} `true`, если токен истёк или отсутствует, иначе `false`.
 */
export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;
  const decoded = decodeToken(token);
  return decoded?.exp ? decoded.exp * 1000 < Date.now() : true;
};
