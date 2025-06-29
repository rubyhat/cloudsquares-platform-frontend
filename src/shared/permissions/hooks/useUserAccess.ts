import { useUserStore } from "../../../modules/UserModule/store";
import { useLoginStore } from "../../../modules/LoginModule/store";
import { UserRole } from "../roles";

export const useUserProfile = () => useUserStore((s) => s.profile);
export const useUserRole = () => useUserStore((s) => s.role);
export const useIsAuthenticated = () =>
  Boolean(useLoginStore((s) => s.accessToken));
export const useIsUser = () => useUserRole() === UserRole.user;
export const useIsAdmin = () => useUserRole() === UserRole.admin;
export const useIsAdminManager = () => useUserRole() === UserRole.admin_manager;
export const useIsAgent = () => useUserRole() === UserRole.agent;
export const useIsAgentAdmin = () => useUserRole() === UserRole.agent_admin;
export const useIsAgentManager = () => useUserRole() === UserRole.agent_manager;
export const useUserFromAgency = () =>
  [UserRole.agent, UserRole.agent_admin, UserRole.agent_manager].includes(
    useUserRole() || UserRole.user,
  );
