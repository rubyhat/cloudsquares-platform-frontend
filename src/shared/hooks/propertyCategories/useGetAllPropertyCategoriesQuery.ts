import { useAxiosQuery } from "@/configs/useAxiosQuery";
import { apiSharedPropertyCategories } from "@/shared/api";

export const useGetAllPropertyCategoriesQuery = (
  agency_id: string | undefined,
) => {
  return useAxiosQuery({
    queryFn: () =>
      apiSharedPropertyCategories.getAllPropertyCategories(agency_id as string),
    queryKey: ["get-all-property-categories", agency_id],
    enabled: !!agency_id,
  });
};
