import React from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";

import { useLoginStore } from "../../LoginModule/store";
import {
  devLogger,
  isTokenExpired,
  refreshAccessToken,
} from "../../../shared/utils";

/**
 * Хук для проверки и обновления токена аутентификации.
 *
 * При первом рендере проверяет, истёк ли `accessToken`:
 * - Если токен протух, пытается обновить его.
 * - Если обновление не удалось, перенаправляет пользователя на страницу входа.
 * - Если токен отсутствует, но есть `refresh_token`, пытается обновить его.
 *
 * @returns Объект с текущим статусом загрузки `{ isLoading: boolean }`
 */

/* TODO: Решить нужно ли это.
 * Этот код нужен, чтобы сразу проверять наличие токенов и отправлять запрос на обновление при необходимости
 * Однако этот код конфликтует с обновлением токенов в axiosBaseWrap.interceptors.response  в axiosConfig
 */
export const useCheckToken = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = useLoginStore((state) => state.accessToken);
  const setAccessToken = useLoginStore((state) => state.setAccessToken);
  const setLastVisitedUrl = useLoginStore((state) => state.setLastVisitedUrl);
  const [isLoading, setIsLoading] = React.useState(false); // TODO: set default true if will use this code

  React.useEffect(() => {
    /**
     * Запрашивает новый токен у сервера.
     * Если обновление успешно, сохраняет токен и редиректит пользователя.
     * Если обновление не удалось, перенаправляет на страницу входа.
     */
    const getNewToken = async () => {
      try {
        const token = await refreshAccessToken();
        if (token) {
          setAccessToken(token.access_token, token.refresh_token);
          const redirectPaths = ["/login", "/no-auth", "/access-denied"];
          if (redirectPaths.includes(location.pathname)) {
            navigate("/");
          }
        } else {
          throw new Error("Не удалось обновить токен");
        }
      } catch (error) {
        devLogger.error("Ошибка обновления токена:", error);
        setLastVisitedUrl(location.pathname);
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    /**
     * Проверяет, истёк ли токен, и предпринимает соответствующие действия.
     */
    const checkToken = async () => {
      return; // TODO: check TODO desc in top side of file
      if (accessToken) {
        const isExpired = isTokenExpired(accessToken);
        if (isExpired) {
          await getNewToken();
        } else {
          setIsLoading(false);
        }
      } else {
        const refreshToken = Cookies.get("refresh_token");
        if (refreshToken) {
          await getNewToken();
        } else {
          setIsLoading(false);
        }
      }
    };

    checkToken();
  }, [
    accessToken,
    location.pathname,
    navigate,
    setAccessToken,
    setLastVisitedUrl,
  ]);

  return { isLoading };
};
