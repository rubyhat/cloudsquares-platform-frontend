import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useAxiosMutation } from "@/configs/useAxiosMutation";
import { showApiError } from "@/shared/utils";
import { apiPropertyCategoryFormModule } from "../api";

interface UseDeletePropertyCategoryMutationProps {
  onSuccess?: () => void;
}

export const useDeletePropertyCategoryMutation = ({
  onSuccess,
}: UseDeletePropertyCategoryMutationProps) => {
  const queryClient = useQueryClient();
  return useAxiosMutation({
    mutationFn: ({ id }: { id: string; onSuccess?: () => void }) =>
      apiPropertyCategoryFormModule.deletePropertyCategory(id),
    onSuccess: (response) => {
      toast.success("Категория успешно удалена!");
      queryClient.invalidateQueries({
        queryKey: ["get-all-property-categories"],
      });
      if (onSuccess) onSuccess();
      return response;
    },
    onError: (error) => {
      showApiError(error);
      return error;
    },
  });
};
