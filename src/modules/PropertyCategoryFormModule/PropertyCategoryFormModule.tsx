import toast from "react-hot-toast";
import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasicDrawerMode } from "@/shared/interfaces/Shared";
import { usePropertyCategoryFormStore } from "./store/usePropertyCategoryFormStore";
import { devLogger } from "@/shared/utils";
import { BasicTextField } from "@/shared/components/BasicTextField";
import { PropertyCategoriesSelectField } from "@/shared/components/PropertyCategoriesSelectField";
import { useCanAccess } from "@/shared/permissions/canAccess";
import {
  createPropertyCategoriesDataFormSchema,
  PropertyCategoriesDataFormData,
} from "./validations";
import { useCreatePropertyCategoryMutation } from "./hooks";

interface PropertyCategoryFormModuleProps {
  mode: BasicDrawerMode;
  onSubmit?: () => void;
  onDecline?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}

export const PropertyCategoryFormModule = ({
  mode,
  // onSubmit,
  onDecline,
  // onError,
  onSuccess,
}: PropertyCategoryFormModuleProps) => {
  const canCreateNewPropertyCategory = useCanAccess(
    "createNewPropertyCategory",
  );
  const initialState = usePropertyCategoryFormStore(
    (state) => state.initialState,
  );
  const methods = useForm<PropertyCategoriesDataFormData>({
    resolver: zodResolver(createPropertyCategoriesDataFormSchema(mode)),
    defaultValues: initialState,
  });

  const { handleSubmit, reset } = methods;
  const createPropertyCategoryMutation = useCreatePropertyCategoryMutation({
    onSuccess,
  });
  const disableInput = createPropertyCategoryMutation.isPending;

  const onSubmitForm = (data: PropertyCategoriesDataFormData) => {
    if (!canCreateNewPropertyCategory) {
      toast.error("Нет доступа на создание новой категории недвижимости");
      return;
    }
    console.log(data);
    createPropertyCategoryMutation.mutate(data);
  };

  const handleResetForm = () => {
    reset();
    if (onDecline) onDecline();
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
            <Typography component="h4" variant="h4">
              Новая категория недвижимости
            </Typography>
          </Box>
          <Box pb={2}>
            <BasicTextField<PropertyCategoriesDataFormData>
              name="title"
              label="Название"
              placeholder="Введите название категории"
              disabled={disableInput}
            />
          </Box>
          <Box pb={2}>
            <PropertyCategoriesSelectField<PropertyCategoriesDataFormData>
              isOptional
              name="parent_id"
              placeholder="Выберите родительскую категорию"
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
            Сохранить
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
