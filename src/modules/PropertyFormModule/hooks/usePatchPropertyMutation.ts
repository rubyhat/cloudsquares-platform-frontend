import { useAxiosMutation } from "@/configs/useAxiosMutation";
import { useQueryClient } from "@tanstack/react-query";
import { PropertyBasicDataFormData } from "../validations";
import { apiPropertyFormModule } from "../api";
import { showApiError } from "@/shared/utils";

interface PatchPropertyMutationFnProps {
  id: string;
  data: PropertyBasicDataFormData;
  onSuccess: () => void;
}
export const usePatchPropertyMutation = () => {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useAxiosMutation({
    mutationFn: ({ id, data }: PatchPropertyMutationFnProps) =>
      apiPropertyFormModule.patchProperty(id, data),
    onSuccess: (_, { id, onSuccess }) => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-properties-of-agency", id],
      });
      onSuccess();
      // return navigate(`/properties/${response.id}/update?step=property_owners`);
    },
    onError: (error) => {
      showApiError(error);
    },
  });
};
