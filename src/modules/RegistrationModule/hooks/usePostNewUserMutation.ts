import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { apiRegistrationModule } from "../api";
import { RegistrationFormData } from "../validations";
import { useRegistrationStore } from "../store/useRegistrationStore";
import { useLoginStore } from "../../LoginModule/store";
import { useUserStore } from "../../UserModule/store";
import { showApiError } from "../../../shared/utils";

export const usePostNewUserMutation = () => {
  const navigate = useNavigate();
  const setShowRegistrationDrawer = useRegistrationStore(
    (state) => state.setShowRegistrationDrawer,
  );
  const setAccessToken = useLoginStore((state) => state.setAccessToken);
  const setUserProfile = useUserStore((state) => state.setUserProfile);

  return useAxiosMutation({
    mutationFn: (data: RegistrationFormData) =>
      apiRegistrationModule.postNewUser(data),
    onSuccess: (response) => {
      toast.success(`Добро пожаловать, ${response.user.first_name}!`, {
        duration: 3000,
      });
      setShowRegistrationDrawer(false);
      setAccessToken(response.access_token, response.refresh_token);
      setUserProfile(response.user);
      navigate("/profile");
      return response;
    },
    onError: (error) => {
      showApiError(error);
      return error;
    },
  });
};
