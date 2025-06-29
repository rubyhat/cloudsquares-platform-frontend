import { FC, JSX, PropsWithChildren } from "react";
import { useCanAccess } from "../../canAccess";

interface Props extends PropsWithChildren {
  permission: keyof typeof import("../../rules").accessRules;
  fallback?: JSX.Element;
}

/**
 * Ограничивающий компонент, отображающий children только если доступ разрешён.
 */
export const RequirePermission: FC<Props> = ({
  permission,
  children,
  fallback = null,
}) => {
  const allowed = useCanAccess(permission);
  return allowed ? <>{children}</> : fallback;
};
