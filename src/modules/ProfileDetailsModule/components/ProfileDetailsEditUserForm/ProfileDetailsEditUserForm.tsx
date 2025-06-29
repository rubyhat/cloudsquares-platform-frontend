import toast from "react-hot-toast";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Typography } from "@mui/material";

import { useProfileDetailsStore } from "../../store/useProfileDetailsStore";
import {
  UserProfileFormData,
  userProfileFormValidationSchema,
} from "../../validations";
import { useUserProfile } from "../../../../shared/permissions/hooks";
import { devLogger } from "../../../../shared/utils";
import { BasicTextField } from "../../../../shared/components/BasicTextField";
import { usePatchUserProfileMutation } from "../../hooks";
import { phoneInputWrapperStyles } from "./styles";
import { CountryCodeDisplayFlag } from "../../../../shared/interfaces/Country";

export const ProfileDetailsEditUserForm = () => {
  const profile = useUserProfile();
  const { setShowEditProfileDrawer } = useProfileDetailsStore();

  const methods = useForm<UserProfileFormData>({
    resolver: zodResolver(userProfileFormValidationSchema),
    defaultValues: {
      phone: "+" + profile?.phone,
      first_name: profile?.first_name || "",
      last_name: profile?.last_name || "",
      middle_name: profile?.middle_name || "",
      email: profile?.email,
    },
  });

  const { handleSubmit, reset } = methods;

  const patchUserProfileMutation = usePatchUserProfileMutation();

  const onSubmit = (data: UserProfileFormData) => {
    if (profile) {
      const clearData = { ...data, phone: data.phone.slice(1) };
      patchUserProfileMutation.mutate({ id: profile?.id, data: clearData });
    } else {
      toast.error("Профиль не найден!");
    }

    setShowEditProfileDrawer(false);
  };

  const handleResetForm = () => {
    reset();
    setShowEditProfileDrawer(false);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, (errors) =>
          devLogger.error("Ошибки валидации:", errors),
        )}
        sx={{ p: 2, display: "flex", flexDirection: "column", height: 1 }}
      >
        <Box flexGrow={1}>
          <Box pb={2}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={phoneInputWrapperStyles}
                onClick={() =>
                  toast.error(
                    "Изменить сотовый номер Вы можете через запрос в тех. поддержку",
                  )
                }
              />
              <BasicTextField<UserProfileFormData>
                name="phone"
                label="Телефон"
                placeholder="+7 705 123 45 67"
                disabled
              />
            </Box>
          </Box>
          <Box pb={2}>
            <BasicTextField<UserProfileFormData>
              name="last_name"
              label="Фамилия"
              placeholder="Введите фамилию"
              disabled={patchUserProfileMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UserProfileFormData>
              name="first_name"
              label="Имя"
              placeholder="Введите имя"
              disabled={patchUserProfileMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UserProfileFormData>
              name="middle_name"
              label="Отчество"
              placeholder="Введите отчество"
              disabled={patchUserProfileMutation.isPending}
            />
          </Box>
          <Box pb={1}>
            <BasicTextField<UserProfileFormData>
              name="email"
              label="E-mail"
              placeholder="Введите почту"
              disabled={patchUserProfileMutation.isPending}
            />
          </Box>
          {profile && (
            <Typography
              component="p"
              variant="body2"
              width="fit-content"
              onClick={() =>
                toast.error(
                  "Изменить страну Вы можете через запрос в тех. поддержку",
                )
              }
            >
              Страна: {CountryCodeDisplayFlag[profile.country_code]}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetForm}
            disabled={patchUserProfileMutation.isPending}
          >
            Закрыть
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={patchUserProfileMutation.isPending}
          >
            Сохранить
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
