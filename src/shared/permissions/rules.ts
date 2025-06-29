import { UserRole } from "./roles";

/**
 * Правила доступа по действиям.
 * Ключ — действие, значение — список разрешённых ролей.
 */

const allRoles = [
  UserRole.user,
  UserRole.admin_manager,
  UserRole.admin,
  UserRole.agent,
  UserRole.agent_admin,
  UserRole.agent_manager,
];

export const accessRules = {
  viewAnalytics: [UserRole.admin, UserRole.admin_manager],
  manageUsers: [UserRole.admin],
  viewProfile: allRoles,
  viewProfileDetails: allRoles,
};
