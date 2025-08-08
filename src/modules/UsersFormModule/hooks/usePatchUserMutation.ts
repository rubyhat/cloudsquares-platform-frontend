import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { showApiError } from "../../../shared/utils";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { UsersFormData } from "../validations/usersFormValidationsSchema";
import { apiUsersFormModule } from "../api/apiUsersFormModule";

interface usePatchUserMutationProps {
  onError?: () => void;
  onSuccess?: () => void;
}

export const usePatchUserMutation = ({
  onError,
  onSuccess,
}: usePatchUserMutationProps) => {
  const queryClient = useQueryClient();

  return useAxiosMutation({
    mutationFn: ({ data, id }: { data: UsersFormData; id: string }) =>
      apiUsersFormModule.patchUserById(data, id),
    onSuccess: (response) => {
      if (onSuccess) onSuccess();
      queryClient.invalidateQueries({
        queryKey: ["get-all-users"],
      });

      const toastMsg = `Сотрудник ${response.first_name} успешно обновлен!`;
      toast.success(toastMsg, { duration: 5000 });
      return response;
    },
    onError: (error) => {
      if (onError) onError();
      showApiError(error);
      return error;
    },
  });
};
