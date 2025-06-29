import { create } from "zustand";
import Cookies from "js-cookie";
import { decodeToken } from "../../../shared/utils";
import { useUserStore } from "../../UserModule/store";

/**
 * Интерфейс хранилища состояния аутентификации.
 * Используется для управления токеном доступа и последним посещённым URL.
 */
interface LoginStore {
  /** Токен доступа пользователя */
  accessToken: string | null;

  /** Последний посещённый URL перед авторизацией */
  lastVisitedUrl: string | null;

  /**
   * Устанавливает токен доступа и, при наличии, обновляет refresh-токен в cookies.
   * @param token Новый токен доступа или `null`
   * @param refreshToken (Необязательно) Новый refresh-токен
   */
  setAccessToken: (token: string | null, refreshToken?: string | null) => void;

  /**
   * Устанавливает последний посещённый URL перед авторизацией.
   * @param url URL страницы, на которую пользователь пытался перейти
   */
  setLastVisitedUrl: (url: string | null) => void;

  /**
   * Выполняет выход из системы: удаляет токены и сбрасывает состояние.
   */
  logout: () => void;

  /** Флаг, указывающий, что нужно выполнить выход из учетной записи пользователя */
  shouldLogout: boolean;
  markLogoutPending: () => void;
}

/** Время жизни refresh-токена в cookies (в днях) */
const TOKEN_LIFE_TIME = 1;

/**
 * Zustand-хранилище для управления аутентификацией пользователя.
 *
 * Позволяет хранить и обновлять токен доступа, последний посещённый URL,
 * а также выполнять выход из системы.
 */
export const useLoginStore = create<LoginStore>((set) => ({
  accessToken: null,
  lastVisitedUrl: null,
  shouldLogout: false,

  setAccessToken: (accessToken, refreshToken) => {
    set({ accessToken });

    /** Сохраняем токен в куки */
    if (refreshToken) {
      Cookies.set("refresh_token", refreshToken, {
        expires: TOKEN_LIFE_TIME,
        secure: true,
        sameSite: "Strict",
      });
    }

    /** Сохраняем данные о пользователе в стейт */
    if (accessToken) {
      const decoded = decodeToken(accessToken);

      if (decoded) {
        useUserStore.getState().setUserFromToken({
          role: decoded.role,
          phone: decoded.phone,
          first_name: decoded.first_name,
        });
      }
    }
  },

  setLastVisitedUrl: (url) => {
    set({ lastVisitedUrl: url });
  },

  markLogoutPending: () => {
    set({ shouldLogout: true });
  },

  logout: () => {
    set({ accessToken: null, lastVisitedUrl: null, shouldLogout: false });
    Cookies.remove("refresh_token");
    useUserStore.getState().clearUser();
  },
}));
