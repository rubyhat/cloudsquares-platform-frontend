import { apiUsersModule } from "../api";
import { useAxiosQuery } from "../../../configs/useAxiosQuery";

export const useGetAllUsersQuery = () => {
  return useAxiosQuery({
    queryFn: () => apiUsersModule.getAllUsers(),
    queryKey: ["get-all-users"],
  });
};
