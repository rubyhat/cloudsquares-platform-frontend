import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TipTapEditorModule } from "@/modules/TipTapEditorModule";
import { PropertyCategoriesSelectField } from "@/shared/components/PropertyCategoriesSelectField";
import { BasicDrawerMode } from "@/shared/interfaces/Shared";
import { Property } from "@/shared/interfaces/Property";
import { devLogger } from "@/shared/utils";
import { BasicTextField } from "@/shared/components/BasicTextField";

import {
  createPropertyBasicDataFormSchema,
  PropertyBasicDataFormData,
} from "../../validations";
import { PropertyFormSteps, usePropertyFormStore } from "../../store";
import { BasicFormSelectField } from "@/shared/components/BasicFormSelectField";
import { propertyListingTypeSelectOptions } from "@/shared/constants";

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
    mode: "onSubmit",
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
            <BasicTextField<PropertyBasicDataFormData>
              name="price"
              label="Стоимость"
              placeholder="Введите стоимость объекта"
              disabled={disableInput}
              type="number"
              showCurrency
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<PropertyBasicDataFormData>
              name="discount"
              label="Текущая скидка"
              placeholder="Введите текущую скидку"
              disabled={disableInput}
              type="number"
              showCurrency
            />
          </Box>
          <Box pb={2}>
            <BasicFormSelectField<PropertyBasicDataFormData>
              name="listing_type"
              placeholder="Выберите тип размещения"
              data={propertyListingTypeSelectOptions()}
            />
          </Box>
          <Box pb={2}>
            <PropertyCategoriesSelectField />
          </Box>
          <Box pb={2}>
            <TipTapEditorModule<PropertyBasicDataFormData>
              name="description"
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
