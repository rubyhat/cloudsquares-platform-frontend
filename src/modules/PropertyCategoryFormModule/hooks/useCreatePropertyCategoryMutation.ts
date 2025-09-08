import { useAxiosMutation } from "@/configs/useAxiosMutation";
import { apiPropertyCategoryFormModule } from "../api";
import { PropertyCategoriesDataFormData } from "../validations";
import { showApiError } from "@/shared/utils";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

interface CreatePropertyCategoryMutationProps {
  onSuccess?: () => void;
}

export const useCreatePropertyCategoryMutation = ({
  onSuccess,
}: CreatePropertyCategoryMutationProps) => {
  const queryClient = useQueryClient();
  return useAxiosMutation({
    mutationFn: (data: PropertyCategoriesDataFormData) =>
      apiPropertyCategoryFormModule.createPropertyCategory(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-property-categories"],
      });
      toast.success("Категория успешно создана!");
      if (onSuccess) onSuccess();
      return response;
    },
    onError: (error) => {
      showApiError(error);
    },
  });
};
