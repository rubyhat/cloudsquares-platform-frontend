import toast from "react-hot-toast";
import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasicDrawerMode } from "@/shared/interfaces/Shared";
import { devLogger } from "@/shared/utils";
import { BasicTextField } from "@/shared/components/BasicTextField";
import { PropertyCategoriesSelectField } from "@/shared/components/PropertyCategoriesSelectField";
import { useCanAccess } from "@/shared/permissions/canAccess";
import { PropertyCategory } from "@/shared/interfaces/PropertyCategory";
import { usePropertyCategoryFormStore } from "./store/usePropertyCategoryFormStore";
import {
  createPropertyCategoriesDataFormSchema,
  PropertyCategoriesDataFormData,
} from "./validations";
import {
  useCreatePropertyCategoryMutation,
  useUpdatePropertyCategoryMutation,
} from "./hooks";

interface PropertyCategoryFormModuleProps {
  mode: BasicDrawerMode;
  editablePropertyCategory?: PropertyCategory | null;
  onSubmit?: () => void;
  onDecline?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}

export const PropertyCategoryFormModule = ({
  mode,
  editablePropertyCategory = null,
  onSuccess,
  onDecline,
}: PropertyCategoryFormModuleProps) => {
  const canCreateNewPropertyCategory = useCanAccess(
    "createNewPropertyCategory",
  );
  const canUpdatePropertyCategory = useCanAccess("updatePropertyCategory");
  const initialState = usePropertyCategoryFormStore(
    (state) => state.initialState,
  );

  const setInitialState = () => {
    if (mode === BasicDrawerMode.edit && editablePropertyCategory) {
      return {
        title: editablePropertyCategory.title,
        parent_id: editablePropertyCategory.parent_id || "",
      };
    }
    return initialState;
  };

  const methods = useForm<PropertyCategoriesDataFormData>({
    resolver: zodResolver(createPropertyCategoriesDataFormSchema(mode)),
    defaultValues: setInitialState(),
  });

  const { handleSubmit, reset } = methods;
  const createPropertyCategoryMutation = useCreatePropertyCategoryMutation({
    onSuccess: () => {
      onSuccess?.();
      reset();
    },
  });
  const updatePropertyCategoryMutation = useUpdatePropertyCategoryMutation({
    onSuccess: () => {
      onSuccess?.();
      reset();
    },
  });
  const disableInput =
    createPropertyCategoryMutation.isPending ||
    updatePropertyCategoryMutation.isPending;

  const onSubmitForm = (data: PropertyCategoriesDataFormData) => {
    switch (mode) {
      case BasicDrawerMode.create:
        if (!canCreateNewPropertyCategory) {
          toast.error("Нет доступа на создание новой категории недвижимости", {
            duration: 5000,
          });
          return;
        }
        return createPropertyCategoryMutation.mutate(data);
      case BasicDrawerMode.edit:
        if (!canUpdatePropertyCategory) {
          toast.error("Нет доступа на обновление категории недвижимости", {
            duration: 5000,
          });
          return;
        }

        if (!editablePropertyCategory) {
          toast.error("Категория недвижимости не определена", {
            duration: 5000,
          });
          devLogger.error("editablePropertyCategory is null");
          return;
        }

        return updatePropertyCategoryMutation.mutate({
          id: editablePropertyCategory.id,
          data,
        });
      default:
        toast.error("Ошибка формы");
    }
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
