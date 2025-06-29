import React from "react";
import { useLoginStore } from "../store";

export const useLogoutEffect = () => {
  const shouldLogout = useLoginStore((state) => state.shouldLogout);
  const logout = useLoginStore((state) => state.logout);

  React.useEffect(() => {
    if (shouldLogout) {
      logout();
    }
  }, [shouldLogout, logout]);

  return null;
};
