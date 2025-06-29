import React from "react";

import { useCheckToken, useSyncCurrentUser } from "../modules/AppModule/hooks";

/**
 * Пропсы для компонента `AuthProvider`.
 */
interface AuthProviderProps {
  /**
   * Функция для обновления состояния загрузки.
   *
   * @param v `true`, если идёт проверка токена, иначе `false`
   */
  setIsLoading: (v: boolean) => void;
}

/**
 * Компонент-провайдер для проверки токена аутентификации и синхронизации данных пользователя.
 *
 * Использует `useCheckToken()` для проверки актуальности токена и
 * вызывает `setIsLoading`, чтобы обновить состояние загрузки.
 *
 * * - Синхронизирует данные пользователя через `useSyncCurrentUser()`
 *
 * @param {AuthProviderProps} props Пропсы компонента
 * @returns `null`, так как этот провайдер не рендерит JSX
 */
export const AuthProvider = ({ setIsLoading }: AuthProviderProps) => {
  const { isLoading } = useCheckToken();
  useSyncCurrentUser();

  React.useEffect(() => setIsLoading(isLoading), [isLoading, setIsLoading]);

  return null;
};
