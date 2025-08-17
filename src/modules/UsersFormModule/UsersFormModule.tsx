import React from "react";
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
  createUsersFormSchema,
} from "./validations/usersFormValidationsSchema";
import { useUsersFormStore } from "./store";
import { useCreateNewUserMutation, usePatchUserMutation } from "./hooks";
import { User } from "../../shared/interfaces";
import { normalizeEditableUserData } from "./utils";
import { useCanAccess } from "../../shared/permissions/canAccess";

interface UsersFormModuleProps {
  mode: BasicDrawerMode;
  editableUser: User | null;
  onSubmit?: () => void;
  onDecline?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}

export const UsersFormModule = ({
  editableUser,
  mode,
  onSubmit,
  onDecline,
  onError,
  onSuccess,
}: UsersFormModuleProps) => {
  const initialState = useUsersFormStore((state) => state.initialState);
  const canEditUserPassword = useCanAccess("canEditUserPassword");

  const methods = useForm<UsersFormData>({
    resolver: zodResolver(createUsersFormSchema(mode)),
    defaultValues:
      editableUser && mode === BasicDrawerMode.edit
        ? normalizeEditableUserData(editableUser)
        : initialState,
  });

  const { handleSubmit, reset, watch, formState } = methods;
  const password = watch("password");
  const passwordStarted = formState.dirtyFields.password;

  const patchUserMutation = usePatchUserMutation({ onSuccess, onError });
  const postNewUserMutation = useCreateNewUserMutation({ onSuccess, onError });
  const disableInput =
    postNewUserMutation.isPending || patchUserMutation.isPending;

  const onSubmitForm = (data: UsersFormData) => {
    if (onSubmit) onSubmit();

    const normalizedData: UsersFormData = {
      ...data,
      phone: data.phone.slice(1), // Удаляем +
    };

    if (mode === BasicDrawerMode.edit && !normalizedData.password) {
      delete normalizedData.password;
      delete normalizedData.password_confirmation;
    }

    switch (mode) {
      case BasicDrawerMode.create:
        return postNewUserMutation.mutate(normalizedData);
      case BasicDrawerMode.edit:
        if (editableUser)
          return patchUserMutation.mutate({
            data: normalizedData,
            id: editableUser?.id,
          });
        return toast.error("Пользователь не определен", { duration: 5000 });
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
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="last_name"
              label="Фамилия"
              placeholder="Введите фамилию сотрудника"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="middle_name"
              label="Отчество"
              placeholder="Введите отчество сотрудника"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="email"
              label="Почта"
              placeholder="Введите почту сотрудника"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<UsersFormData>
              name="phone"
              label="Телефон"
              placeholder="+7 705 123 45 67"
              disabled={disableInput}
            />
          </Box>
          {canEditUserPassword && (
            <React.Fragment>
              <Box pb={2}>
                <BasicTextField<UsersFormData>
                  name="password"
                  label="Пароль"
                  placeholder="Введите пароль"
                  type="password"
                  inputName="new-password"
                  autoComplete="new-password"
                  disabled={disableInput}
                />
                <PasswordRulesHint
                  password={password || ""}
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
                  disabled={disableInput}
                />
              </Box>
            </React.Fragment>
          )}
          <Box sx={{ pb: 2 }}>
            <BasicFormSelectField
              name="country_code"
              label="Страна:"
              placeholder="Выберите страну"
              data={countrySelectOptions()}
              disabled={disableInput}
            />
          </Box>
          <Box sx={{ pb: 2 }}>
            <BasicFormSelectField
              name="role"
              label="Роль:"
              placeholder="Выберите роль"
              data={userRoleSelectOptions()}
              disabled={disableInput}
            />
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleResetForm}
            disabled={disableInput}
          >
            Закрыть
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            disabled={disableInput}
          >
            Сохранить
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
