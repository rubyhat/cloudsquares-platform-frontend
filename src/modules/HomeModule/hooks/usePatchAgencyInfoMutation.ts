import toast from "react-hot-toast";
import { apiHomeModule } from "../api";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";

import { showApiError } from "../../../shared/utils";
import { Agency } from "../../../shared/interfaces/Agency";
import { useQueryClient } from "@tanstack/react-query";

interface MutationProps {
  id: string;
  data: Partial<Agency>;
}

interface PatchAgencyInfoMutationProps {
  onSuccess: () => void;
}

export const usePatchAgencyInfoMutation = ({
  onSuccess,
}: PatchAgencyInfoMutationProps) => {
  const queryClient = useQueryClient();
  return useAxiosMutation({
    mutationFn: ({ id, data }: MutationProps) =>
      apiHomeModule.patchAgencyInfo(id, data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["get-current-user"],
      });
      toast.success("Данные успешно обновлены!");
      onSuccess();
      return response;
    },
    onError: (error) => {
      showApiError(error);
    },
  });
};
