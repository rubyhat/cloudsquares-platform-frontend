import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TipTapEditorModule } from "@/modules/TipTapEditorModule";
import { PropertyCategoriesSelectField } from "@/shared/components/PropertyCategoriesSelectField";
import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";
import { Property } from "@/shared/interfaces/Property";
import { devLogger } from "@/shared/utils";
import { BasicTextField } from "@/shared/components/BasicTextField";
import { BasicFormSelectField } from "@/shared/components/BasicFormSelectField";
import { propertyListingTypeSelectOptions } from "@/shared/constants";

import {
  createPropertyBasicDataFormSchema,
  PropertyBasicDataFormData,
} from "../../validations";
import { PropertyFormSteps, usePropertyFormStore } from "../../store";
import { useCreatePropertyMutation } from "../../hooks";
import { PropertyCategoryDrawer } from "../PropertyCategoryDrawer";

interface PropertyBasicDataFormProps {
  mode: PropertyFormMode;
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
  const navigate = useNavigate();
  const setStep = usePropertyFormStore((state) => state.setStep);
  const setShowPropertyCategoryDrawer = usePropertyFormStore(
    (state) => state.setShowPropertyCategoryDrawer,
  );

  const initialState = usePropertyFormStore(
    (state) => state.initialBasicDataState,
  );

  const methods = useForm<PropertyBasicDataFormData>({
    resolver: zodResolver(createPropertyBasicDataFormSchema(mode)),
    defaultValues: initialState,
    mode: "onSubmit",
  });

  const { handleSubmit, watch, formState } = methods;
  const createPropertyMutation = useCreatePropertyMutation();
  const disableInput = createPropertyMutation.isPending;

  const onSubmitForm = (data: PropertyBasicDataFormData) => {
    console.log(data, watch, formState); // todo: temp
    createPropertyMutation.mutate({
      data,
      onSuccess: () => setStep(PropertyFormSteps.property_owners),
    });
  };

  const handleResetForm = () => {
    setStep(PropertyFormSteps.basic_data);
    navigate("/properties");
  };

  return (
    <>
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
              <PropertyCategoriesSelectField<PropertyBasicDataFormData>
                name="category_id"
                buttonToAddNewCategory={{
                  buttonLabel: "+ Добавить категорию",
                  onButtonClick: () => setShowPropertyCategoryDrawer(true),
                }}
              />
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
              Отменить
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              disabled={disableInput}
            >
              Дальше
            </Button>
          </Box>
        </Box>
      </FormProvider>
      <PropertyCategoryDrawer />
    </>
  );
};
