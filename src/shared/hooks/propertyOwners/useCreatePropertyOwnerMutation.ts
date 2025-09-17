import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useAxiosMutation } from "@/configs/useAxiosMutation";
import { apiSharedPropertyOwners } from "@/shared/api";
import { showApiError } from "@/shared/utils";
import { PropertyOwnersDataFormData } from "@/modules/PropertyFormModule/validations";

export const useCreatePropertyOwnerMutation = () => {
  const queryClient = useQueryClient();
  return useAxiosMutation({
    mutationFn: ({
      property_id,
      data,
    }: {
      property_id: string;
      data: PropertyOwnersDataFormData;
      onSuccess?: () => void;
    }) => apiSharedPropertyOwners.createPropertyOwner(property_id, data),

    onSuccess: (response, { onSuccess }) => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-property-owners-by-property-id"],
      });
      toast.success("Данные успешно обновлены!");
      if (onSuccess) onSuccess();
      return response;
    },
    onError: (error) => {
      showApiError(error);
      return error;
    },
  });
};
