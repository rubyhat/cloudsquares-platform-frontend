import toast from "react-hot-toast";
import { apiProfileDetailsModule } from "../api";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { useUserStore } from "../../UserModule/store";

import { User } from "../../../shared/interfaces";
import { showApiError } from "../../../shared/utils";

interface MutationProps {
  id: string;
  data: Partial<User>;
}

export const usePatchUserProfileMutation = () => {
  const { setUserProfile } = useUserStore();
  return useAxiosMutation({
    mutationFn: ({ id, data }: MutationProps) =>
      apiProfileDetailsModule.patchUserProfile(id, data),
    onSuccess: (response) => {
      toast.success("Данные успешно обновлены!");
      setUserProfile(response);
      return response;
    },
    onError: (error) => {
      showApiError(error);
    },
  });
};
