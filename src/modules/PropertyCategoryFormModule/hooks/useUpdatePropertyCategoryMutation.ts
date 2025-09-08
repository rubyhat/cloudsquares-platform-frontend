import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useAxiosMutation } from "@/configs/useAxiosMutation";
import { showApiError } from "@/shared/utils";
import {
  apiPropertyCategoryFormModule,
  UpdatePropertyCategoryParams,
} from "../api";

interface UseUpdatePropertyCategoryMutationProps {
  onSuccess?: () => void;
}

export const useUpdatePropertyCategoryMutation = ({
  onSuccess,
}: UseUpdatePropertyCategoryMutationProps) => {
  const queryClient = useQueryClient();
  return useAxiosMutation({
    mutationFn: ({ id, data }: UpdatePropertyCategoryParams) =>
      apiPropertyCategoryFormModule.updatePropertyCategory({ id, data }),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-property-categories"],
      });
      toast.success("Категория успешно обновлена!");
      if (onSuccess) onSuccess();
      return response;
    },
    onError: (error) => {
      showApiError(error);
    },
  });
};
