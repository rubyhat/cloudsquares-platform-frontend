import { Box, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { devLogger } from "../../shared/utils";

export const PropertyFormModule = () => {
  const methods = useForm({
    defaultValues: {},
  });

  const { handleSubmit, reset, watch, formState } = methods;
  const disableInput = false;

  const onSubmitForm = (data: object) => {
    console.log(data, watch, formState); // todo: temp
  };

  const handleResetForm = () => {
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
        <Box flexGrow={1}></Box>
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
