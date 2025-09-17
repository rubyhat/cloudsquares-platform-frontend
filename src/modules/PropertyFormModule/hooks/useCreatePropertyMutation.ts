import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { showApiError } from "@/shared/utils";
import { useAxiosMutation } from "@/configs/useAxiosMutation";
import { apiPropertyFormModule } from "../api";
import { PropertyBasicDataFormData } from "../validations";

export const useCreatePropertyMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useAxiosMutation({
    mutationFn: ({
      data,
    }: {
      data: PropertyBasicDataFormData;
      onSuccess?: () => void;
    }) => apiPropertyFormModule.createProperty(data),
    onSuccess: (response, { onSuccess }) => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-properties-of-agency"],
      });
      onSuccess?.();
      return navigate(`/properties/${response.id}/update?step=property_owners`);
    },
    onError: (error) => {
      showApiError(error);
    },
  });
};
