import { useAxiosQuery } from "@/configs/useAxiosQuery";
import { apiSharedPropertyDetails } from "@/shared/api/apiSharedPropertyDetails";

export const useGetPropertyDetailsQuery = (idOrSlug: string | undefined) => {
  return useAxiosQuery({
    queryFn: () =>
      apiSharedPropertyDetails.getPropertyDetailsById(idOrSlug as string),
    queryKey: ["get-property-details", idOrSlug],
    enabled: !!idOrSlug,
  });
};
