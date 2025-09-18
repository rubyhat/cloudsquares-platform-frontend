import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

import { devLogger } from "@/shared/utils";
import { Property } from "@/shared/interfaces/Property";
import { PropertiesListItem } from "@/modules/PropertiesModule/components/PropertiesListItem";

import { usePropertyDetailsStore } from "../../store";
import { useDeactivatePropertyMutation } from "../../hooks";

interface PropertyDetailsDeleteFormProps {
  property: Property;
}

interface DeletePropertyFormData {
  property_id: string;
}

export const PropertyDetailsDeleteForm = ({
  property,
}: PropertyDetailsDeleteFormProps) => {
  const navigate = useNavigate();
  const setShowDeactivateDrawer = usePropertyDetailsStore(
    (state) => state.setShowDeactivateDrawer,
  );

  const methods = useForm<DeletePropertyFormData>({
    defaultValues: { property_id: property.id },
  });

  const deactivatePropertyMutation = useDeactivatePropertyMutation();

  const { handleSubmit } = methods;

  const onSubmit = ({ property_id }: DeletePropertyFormData) => {
    if (property_id) {
      deactivatePropertyMutation.mutate({
        property_id: property.id,
        agency_id: property.agency.id,
        onSuccess: () => {
          setShowDeactivateDrawer(false);
          navigate("/properties");
        },
      });
    } else {
      toast.error("Объект недвижимости не определен!");
    }
  };

  const handleResetForm = () => {
    setShowDeactivateDrawer(false);
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
            <Typography component="p" variant="body1">
              Вы уверены, что хотите деактивировать объект недвижимости{" "}
              <Box component="strong" color="customColors.error">
                {property.title}
              </Box>
              ?
            </Typography>
          </Box>
          <Box pb={2}>
            <Typography component="p" variant="body1">
              Деактивация объекта недвижимости приведет к последствиям:
            </Typography>
            <List>
              <ListItem dense>
                <ListItemText>
                  - объект недвижимости не будет отображаться в каталоге, будет
                  перемещен в "Архив";
                </ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>
                  - клиенты не смогут оставить заявки на покупку этой
                  недвижимости;
                </ListItemText>
              </ListItem>
            </List>
          </Box>
          <PropertiesListItem property={property} />
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetForm}
            disabled={deactivatePropertyMutation.isPending}
          >
            Закрыть
          </Button>
          <Button
            variant="contained"
            color="error"
            type="submit"
            disabled={deactivatePropertyMutation.isPending}
          >
            Деактивировать
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
