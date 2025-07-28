import toast from "react-hot-toast";
import { Box, Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { devLogger } from "../../shared/utils";
import { BasicDrawerMode } from "../../shared/interfaces/Shared";
import { BasicTextField } from "../../shared/components/BasicTextField";
import { PasswordRulesHint } from "../../shared/components/PasswordRulesHint";
import {
  countrySelectOptions,
  userRoleSelectOptions,
} from "../../shared/constants";
import { BasicFormSelectField } from "../../shared/components/BasicFormSelectField";

import {
  UsersFormData,
  usersFormValidationsSchema,
} from "./validations/usersFormValidationsSchema";
import { useUsersFormStore } from "./store/useUsersFormStore";
import { useCreateNewUserMutation } from "./hooks";

interface UsersFormModuleProps {
  mode: BasicDrawerMode;
  onSubmit?: () => void;
  onDecline?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}

export const UsersFormModule = ({
  mode,
  onSubmit,
  onDecline,
  onError,
  onSuccess,
}: UsersFormModuleProps) => {
  const initialState = useUsersFormStore((state) => state.initialState);

  const methods = useForm<UsersFormData>({
    resolver: zodResolver(usersFormValidationsSchema),
    defaultValues: initialState,
  });

  const { handleSubmit, reset, watch, formState } = methods;
  const password = watch("password");
  const passwordStarted = formState.dirtyFields.password;

  const postNewUserMutation = useCreateNewUserMutation({ onSuccess, onError });

  const onSubmitForm = (data: UsersFormData) => {
    if (onSubmit) onSubmit();

    const normalizedData: UsersFormData = {
      ...data,
      phone: data.phone.slice(1), // Удаляем +
    };

    switch (mode) {
      case BasicDrawerMode.create:
        postNewUserMutation.mutate(normalizedData);
        break;
      case BasicDrawerMode.edit:
        console.log("edit");
        break;
      default:
        toast.error("Ошибка формы");
    }
  };

  const handleResetForm = () => {
    if (onDecline) onDecline();
    reset();
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitForm, (errors) =>
          devLogger.error("Ошибки валидации:", errors),
        )}
        sx={{ p: 2, display: "flex", flexDirection: "column", height: 1 }}
      >
        <Box flexGrow={1}>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="first_name"
              label="Имя"
              placeholder="Введите имя сотрудника"
              // disabled={patchAgencyInfoMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="last_name"
              label="Фамилия"
              placeholder="Введите фамилию сотрудника"
              // disabled={patchAgencyInfoMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="middle_name"
              label="Отчество"
              placeholder="Введите отчество сотрудника"
              // disabled={patchAgencyInfoMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="email"
              label="Почта"
              placeholder="Введите почту сотрудника"
              // disabled={patchAgencyInfoMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="phone"
              label="Телефон"
              placeholder="+7 705 123 45 67"
              // disabled={patchAgencyInfoMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="password"
              label="Пароль"
              placeholder="Введите пароль"
              type="password"
              inputName="new-password"
              autoComplete="new-password"
              // disabled={patchAgencyInfoMutation.isPending}
            />
            <PasswordRulesHint
              password={password}
              touched={!!passwordStarted}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="password_confirmation"
              label="Повторите пароль"
              placeholder="Введите пароль повторно"
              type="password"
              inputName="new-password"
              autoComplete="new-password"
              // disabled={patchAgencyInfoMutation.isPending}
            />
          </Box>
          <Box sx={{ pb: 2 }}>
            <BasicFormSelectField
              name="country_code"
              label="Страна:"
              placeholder="Выберите страну"
              data={countrySelectOptions()}
              // disabled={patchAgencyInfoMutation.isPending}
            />
          </Box>
          <Box sx={{ pb: 2 }}>
            <BasicFormSelectField
              name="role"
              label="Роль:"
              placeholder="Выберите роль"
              data={userRoleSelectOptions()}
              // disabled={patchAgencyInfoMutation.isPending}
            />
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleResetForm}
            // disabled={patchAgencyInfoMutation.isPending}
          >
            Закрыть
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            // disabled={patchAgencyInfoMutation.isPending}
          >
            Сохранить
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
