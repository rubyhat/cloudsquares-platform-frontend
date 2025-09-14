import { useAxiosQuery } from "@/configs/useAxiosQuery";
import { apiSharedPropertyOwners } from "@/shared/api";

export const useGetAllPropertyOwnersByPropertyID = (
  property_id: string,
  page?: number,
  per_page?: number,
) => {
  return useAxiosQuery({
    queryFn: () =>
      apiSharedPropertyOwners.getAllPropertyOwnersByPropertyID(
        property_id as string,
        per_page,
        page,
      ),
    queryKey: [
      "get-all-property-owners-by-property-id",
      property_id,
      per_page,
      page,
    ],
    enabled: !!property_id,
  });
};
