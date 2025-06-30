import { Box, Button } from "@mui/material";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  AgencyInfoFormData,
  useHomeAgencyInfoEditFormValidationSchema,
} from "../../validations";
import { useHomeStore } from "../../store";
import { usePatchAgencyInfoMutation } from "../../hooks";

import { devLogger } from "../../../../shared/utils";
import { useUserProfile } from "../../../../shared/permissions/hooks";
import { BasicTextField } from "../../../../shared/components/BasicTextField";

export const HomeAgencyInfoEditForm = () => {
  const profile = useUserProfile();
  const setShowAgencyInfoDrawer = useHomeStore(
    (state) => state.setShowAgencyInfoDrawer,
  );

  const methods = useForm<AgencyInfoFormData>({
    resolver: zodResolver(useHomeAgencyInfoEditFormValidationSchema),
    defaultValues: {
      title: profile?.agency?.title || "",
    },
  });

  const { handleSubmit, reset } = methods;

  const patchAgencyInfoMutation = usePatchAgencyInfoMutation({
    onSuccess: () => setShowAgencyInfoDrawer(false),
  });

  const onSubmit = (data: AgencyInfoFormData) => {
    if (profile?.agency && data.title) {
      const clearData = { title: data.title };
      patchAgencyInfoMutation.mutate({
        id: profile?.agency?.id,
        data: clearData,
      });
    } else {
      toast.error("Профиль не найден!");
    }
  };

  const handleResetForm = () => {
    reset();
    setShowAgencyInfoDrawer(false);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, (errors) =>
          devLogger.error("Ошибки валидации:", errors),
        )}
        sx={{ p: 2, display: "flex", flexDirection: "column", height: 1 }}
      >
        <Box flexGrow={1}>
          <Box pb={2}>
            <BasicTextField<AgencyInfoFormData>
              name="title"
              label="Название"
              placeholder="Введите название агентства"
              disabled={patchAgencyInfoMutation.isPending}
            />
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetForm}
            disabled={patchAgencyInfoMutation.isPending}
          >
            Закрыть
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={patchAgencyInfoMutation.isPending}
          >
            Сохранить
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
