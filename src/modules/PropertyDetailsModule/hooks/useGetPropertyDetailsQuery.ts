import { useAxiosQuery } from "../../../configs/useAxiosQuery";
import { apiPropertyDetailsModule } from "../api";

export const useGetPropertyDetailsQuery = (id: string | undefined) => {
  return useAxiosQuery({
    queryFn: () =>
      apiPropertyDetailsModule.getPropertyDetailsById(id as string),
    queryKey: ["get-property-details", id],
    enabled: !!id,
  });
};
