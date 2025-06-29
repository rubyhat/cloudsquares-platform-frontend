// 📁 shared/hooks/useSyncCurrentUser.ts
import React from "react";
import Cookies from "js-cookie";
import { useGetCurrentUserQuery } from "../../UserModule/hooks";
import { useUserStore } from "../../UserModule/store";

/**
 * Хук, который автоматически загружает данные пользователя из API `/me`
 * и синхронизирует их с UserStore.
 */
export const useSyncCurrentUser = () => {
  const refreshToken = Cookies.get("refresh_token");
  const { data, isSuccess } = useGetCurrentUserQuery(Boolean(refreshToken));
  const setUserProfile = useUserStore((s) => s.setUserProfile);

  React.useEffect(() => {
    if (isSuccess && data) {
      setUserProfile(data);
    }
  }, [isSuccess, data, setUserProfile]);
};
