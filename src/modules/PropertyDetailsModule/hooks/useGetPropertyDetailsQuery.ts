import { useAxiosQuery } from "../../../configs/useAxiosQuery";
import { apiPropertyDetailsModule } from "../api";

export const useGetPropertyDetailsQuery = (idOrSlug: string | undefined) => {
  return useAxiosQuery({
    queryFn: () =>
      apiPropertyDetailsModule.getPropertyDetailsById(idOrSlug as string),
    queryKey: ["get-property-details", idOrSlug],
    enabled: !!idOrSlug,
  });
};
