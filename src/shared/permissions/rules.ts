import { UserRole } from "./roles";

/**
 * Правила доступа по действиям.
 * Ключ — действие, значение — список разрешённых ролей.
 */

export const allRoles = [
  UserRole.user,
  UserRole.admin_manager,
  UserRole.admin,
  UserRole.agent,
  UserRole.agent_admin,
  UserRole.agent_manager,
];

export const sameAgency = [
  UserRole.agent,
  UserRole.agent_admin,
  UserRole.agent_manager,
];

export const admins = [UserRole.admin, UserRole.admin_manager];

export const sameAgencyAndAdmins = [...sameAgency, ...admins];

export const accessRules = {
  viewAnalytics: admins, // TODO: change access policy
  manageUsers: [UserRole.admin],
  viewProfile: sameAgencyAndAdmins,
  viewProfileDetails: sameAgencyAndAdmins,
  viewPropertyList: sameAgencyAndAdmins,
  viewPropertyDetails: sameAgencyAndAdmins,
  viewPropertyCreate: sameAgencyAndAdmins,
  viewAgencyUsers: sameAgencyAndAdmins,
};
