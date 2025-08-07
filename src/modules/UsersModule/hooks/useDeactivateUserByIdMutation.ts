import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { showApiError } from "../../../shared/utils";
import { apiUsersModule } from "../api";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";

export const useDeactivateUserByIdMutation = () => {
  const queryClient = useQueryClient();
  return useAxiosMutation({
    mutationFn: ({ id }: { id: string; onSuccess?: () => void }) =>
      apiUsersModule.deleteUserById(id),
    onSuccess: (_, { onSuccess }) => {
      toast.success("Пользователь успешно удален!");
      queryClient.invalidateQueries({
        queryKey: ["get-all-users"],
      });
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      showApiError(error);
      return error;
    },
  });
};
