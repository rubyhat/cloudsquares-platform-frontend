import { apiUserModule } from "../api";
import { useAxiosQuery } from "../../../configs/useAxiosQuery";
import { useIsAuthenticated } from "../../../shared/permissions/hooks";

export const useGetCurrentUserQuery = (enabled: boolean = true) => {
  // todo: добавил, чтобы после успешного логина сразу запросить данные пользователя, но из-за этого при ф5 запрос на /me отправляется дважды
  // надо позже переделать и избавиться от лишнего повторного запроса
  const isAuthenticated = useIsAuthenticated();
  return useAxiosQuery({
    queryFn: () => apiUserModule.getCurrentUser(),
    queryKey: ["get-current-user", isAuthenticated],
    enabled: enabled,
  });
};
