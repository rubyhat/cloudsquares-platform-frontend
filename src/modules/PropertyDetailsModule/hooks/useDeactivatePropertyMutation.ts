import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { showApiError } from "../../../shared/utils";
import { apiPropertyDetailsModule } from "../api";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";

export const useDeactivatePropertyMutation = () => {
  const queryClient = useQueryClient();
  return useAxiosMutation({
    mutationFn: ({
      property_id,
    }: {
      property_id: string;
      agency_id: string;
      onSuccess: () => void;
    }) => apiPropertyDetailsModule.deactivatePropertyById(property_id),
    onSuccess: (_, { property_id, agency_id, onSuccess }) => {
      queryClient.invalidateQueries({
        queryKey: ["get-property-details", property_id],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-all-properties-of-agency", agency_id],
      });
      toast.success("Объект недвижимости успешно деактивирован!");
      onSuccess();
    },
    onError: (error) => {
      showApiError(error);
      return error;
    },
  });
};
