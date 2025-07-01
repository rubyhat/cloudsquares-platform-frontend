import { useAxiosQuery } from "../../../configs/useAxiosQuery";
import { apiPropertiesModule } from "../apiPropertiesModule";

export const useGetAllPropertiesOfAgencyQuery = (
  agency_id: string | undefined,
) => {
  return useAxiosQuery({
    queryFn: () =>
      apiPropertiesModule.getAllPropertiesOfAgency(agency_id as string),
    queryKey: ["get-all-properties-of-agency", agency_id],
    enabled: !!agency_id,
  });
};
