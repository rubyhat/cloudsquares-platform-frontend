import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { devLogger } from "../../../../shared/utils";
import { BasicTextField } from "../../../../shared/components/BasicTextField";
import { BasicDrawerMode } from "../../../../shared/interfaces/Shared";
import { Property } from "../../../../shared/interfaces/Property";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createPropertyBasicDataFormSchema,
  PropertyBasicDataFormData,
} from "../../validations";
import { PropertyFormSteps, usePropertyFormStore } from "../../store";
import { TipTapEditorModule } from "@/modules/TipTapEditorModule";

interface PropertyBasicDataFormProps {
  mode: BasicDrawerMode;
  editableProperty: Property | null;
  onSubmit?: () => void;
  onDecline?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}

export const PropertyBasicDataForm = ({
  // editableProperty,
  mode,
  // onSubmit,
  // onDecline,
  // onError,
  // onSuccess,
}: PropertyBasicDataFormProps) => {
  const setStep = usePropertyFormStore((state) => state.setStep);

  const initialState = usePropertyFormStore(
    (state) => state.initialBasicDataState,
  );
  const methods = useForm<PropertyBasicDataFormData>({
    resolver: zodResolver(createPropertyBasicDataFormSchema(mode)),
    defaultValues: initialState,
  });

  const { handleSubmit, watch, formState } = methods;
  const disableInput = false;

  const onSubmitForm = (data: object) => {
    console.log(data, watch, formState); // todo: temp
    // Если успешно создали объект, то переходим на следующий шаг
    setStep(PropertyFormSteps.property_owners);
  };

  const handleResetForm = () => {
    setStep(PropertyFormSteps.property_owners);
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
              Основные данные
            </Typography>
          </Box>
          <Box pb={2}>
            <BasicTextField<PropertyBasicDataFormData>
              name="title"
              label="Название"
              placeholder="Введите название объекта"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <TipTapEditorModule />
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
            Назад
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
