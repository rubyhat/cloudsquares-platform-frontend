import toast from "react-hot-toast";
import { Box, Button, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  DisplayTextPropertyFormMode,
  PropertyFormMode,
} from "@/shared/interfaces/PropertyForm";
import { devLogger } from "@/shared/utils";
import { BasicTextField } from "@/shared/components/BasicTextField";
import { BasicFormSelectField } from "@/shared/components/BasicFormSelectField";
import { propertyOwnerRoleSelectOptions } from "@/shared/constants";
import { useCreatePropertyOwnerMutation } from "@/shared/hooks/propertyOwners";
import {
  createPropertyOwnersDataFormSchema,
  PropertyOwnersDataFormData,
} from "../../validations";
import { usePropertyFormStore } from "../../store";

interface PropertyOwnersFormProps {
  mode: PropertyFormMode;
  property_id?: string;
  onSuccess: () => void;
}

export const PropertyOwnersForm = ({
  mode,
  property_id,
  onSuccess,
}: PropertyOwnersFormProps) => {
  const initialState = usePropertyFormStore(
    (state) => state.initialOwnersDataState,
  );

  const methods = useForm<PropertyOwnersDataFormData>({
    resolver: zodResolver(createPropertyOwnersDataFormSchema(mode)),
    defaultValues: initialState,
    mode: "onSubmit",
  });

  const { handleSubmit, reset } = methods;
  const createPropertyOwnerMutation = useCreatePropertyOwnerMutation();
  const disableInput = createPropertyOwnerMutation.isPending;

  const onSubmitForm = (data: PropertyOwnersDataFormData) => {
    switch (mode) {
      case PropertyFormMode.create:
        if (!property_id)
          return toast.error("ID объекта недвижимости не определен!");

        return createPropertyOwnerMutation.mutate({
          data,
          onSuccess: () => {
            onSuccess();
            reset();
          },
          property_id,
        });

      case PropertyFormMode.edit:
        break;
      default:
        toast.error("Неизвестный режим формы", { duration: 5000 });
        devLogger.error("PropertyOwnersForm: unexpected form mode", mode);
        return;
    }
    // TODO: Add edit mode handling
    if (property_id)
      createPropertyOwnerMutation.mutate({
        data,
        onSuccess: () => {
          onSuccess();
          reset();
        },
        property_id,
      });
  };

  const handleResetForm = () => {
    reset();
    toast.success("Форма успешно очищена!");
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitForm, (errors) =>
          devLogger.error("Ошибки валидации:", errors),
        )}
        sx={{ py: 2, display: "flex", flexDirection: "column", height: 1 }}
      >
        <Box flexGrow={1}>
          <Box pb={2}>
            <Typography component="h4" variant="h4">
              {DisplayTextPropertyFormMode[mode]} собственника
            </Typography>
          </Box>
          <Box pb={2}>
            <BasicTextField<PropertyOwnersDataFormData>
              name="first_name"
              label="Имя*"
              placeholder="Введите название объекта"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<PropertyOwnersDataFormData>
              name="last_name"
              label="Фамилия"
              placeholder="Введите название объекта"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<PropertyOwnersDataFormData>
              name="middle_name"
              label="Отчество"
              placeholder="Введите название объекта"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<PropertyOwnersDataFormData>
              name="phone"
              label="Телефон*"
              placeholder="+7 705 123 45 67"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<PropertyOwnersDataFormData>
              name="email"
              label="E-mail"
              placeholder="Введите почту"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<PropertyOwnersDataFormData>
              name="notes"
              type="textarea"
              multiline
              minRows={4}
              label="Заметка"
              placeholder="Эту заметку увидят только сотрудники"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <BasicFormSelectField
              name="role"
              placeholder="Роль собственника"
              data={propertyOwnerRoleSelectOptions()}
            />
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="outlined"
            color="error"
            size="large"
            disabled={disableInput}
            onClick={handleResetForm}
          >
            Очистить
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            disabled={disableInput}
          >
            Создать
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
