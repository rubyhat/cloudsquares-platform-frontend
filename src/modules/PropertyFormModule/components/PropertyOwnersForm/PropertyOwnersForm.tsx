import { Box } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";
import { devLogger } from "@/shared/utils";
import {
  createPropertyOwnersDataFormSchema,
  PropertyOwnersDataFormData,
} from "../../validations";
import { usePropertyFormStore } from "../../store";

interface PropertyOwnersFormProps {
  mode: PropertyFormMode;
}

export const PropertyOwnersForm = ({ mode }: PropertyOwnersFormProps) => {
  const initialState = usePropertyFormStore(
    (state) => state.initialOwnersDataState,
  );

  const methods = useForm<PropertyOwnersDataFormData>({
    resolver: zodResolver(createPropertyOwnersDataFormSchema(mode)),
    defaultValues: initialState,
    mode: "onSubmit",
  });

  const { handleSubmit } = methods;
  const onSubmitForm = (data: PropertyOwnersDataFormData) => {
    console.log(data);
    // TODO: Add edit mode handling
    // createPropertyMutation.mutate({
    //   data,
    //   onSuccess: () => setStep(PropertyFormSteps.property_owners),
    // });
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitForm, (errors) =>
          devLogger.error("Ошибки валидации:", errors),
        )}
        sx={{ py: 2, display: "flex", flexDirection: "column", height: 1 }}
      ></Box>
    </FormProvider>
  );
};
