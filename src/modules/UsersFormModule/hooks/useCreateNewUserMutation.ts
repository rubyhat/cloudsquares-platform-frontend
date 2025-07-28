import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { UsersFormData } from "../validations/usersFormValidationsSchema";
import { apiUsersFormModule } from "../api/apiUsersFormModule";
import { showApiError } from "../../../shared/utils";

interface useCreateNewUserMutationProps {
  onError?: () => void;
  onSuccess?: () => void;
}

export const useCreateNewUserMutation = ({
  onSuccess,
  onError,
}: useCreateNewUserMutationProps) => {
  const queryClient = useQueryClient();

  return useAxiosMutation({
    mutationFn: (data: UsersFormData) => apiUsersFormModule.postNewUser(data),
    onSuccess: (response) => {
      if (onSuccess) onSuccess();
      queryClient.invalidateQueries({
        queryKey: ["get-all-users"],
      });

      const toastMsg = `Сотрудник ${response.first_name} успешно добавлен в агентство!`;
      toast.success(toastMsg, { duration: 3000 });
      return response;
    },
    onError: (error) => {
      if (onError) onError();
      showApiError(error);
      return error;
    },
  });
};
