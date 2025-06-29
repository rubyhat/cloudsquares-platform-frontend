import { accessRules } from "./rules";
import { UserRole } from "./roles";
import { useUserRole } from "./hooks";

/**
 * Проверяет, имеет ли текущий пользователь доступ к действию.
 * @param permission Название действия (ключ из accessRules)
 * @returns true, если роль пользователя разрешена
 */
export const useCanAccess = (permission: keyof typeof accessRules): boolean => {
  const role = useUserRole();
  if (!role) return false;

  const allowed = accessRules[permission];
  return allowed.includes(role as UserRole);
};
