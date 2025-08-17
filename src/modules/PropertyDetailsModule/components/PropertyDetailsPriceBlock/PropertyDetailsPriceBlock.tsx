import { Box, Button, Grid, Typography } from "@mui/material";
import { MdPerson, MdEdit, MdDelete } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";

import {
  calculatePricePerMeter,
  propertyAddress,
} from "../../../../shared/utils";
import { DiscountLabel } from "../../../../shared/DiscountLabel";
import { AgentCompactCard } from "../../../../shared/components/AgentCompactCard";
import { propertyDetailsStore } from "../../store";

export const PropertyDetailsPriceBlock = () => {
  const setShowDeactivateDrawer = propertyDetailsStore(
    (state) => state.setShowDeactivateDrawer,
  );

  const currentProperty = propertyDetailsStore(
    (state) => state.currentProperty,
  );

  if (currentProperty)
    return (
      <Grid size={{ xs: 12, md: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography
              component="p"
              variant="body4"
              color="customColors.grey500"
            >
              {calculatePricePerMeter(currentProperty.price, 42)}₽ за м²
            </Typography>
            <DiscountLabel
              price={currentProperty.price}
              discount={currentProperty.discount}
            />
            <Typography component="h5" variant="h5" mb={1}>
              {(
                currentProperty.price - currentProperty.discount
              ).toLocaleString("ru")}
              ₽
            </Typography>
            <Typography component="p" variant="subtitle2">
              42,5м². 2-комн. квартира
            </Typography>
            <Typography component="p" variant="body1">
              {propertyAddress(currentProperty).fullAddress}
            </Typography>
          </Box>
          <Box py={2}>
            <AgentCompactCard agent={currentProperty.agent} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Button variant="contained" size="large" startIcon={<MdEdit />}>
              Редактировать
            </Button>
            <Button variant="outlined" size="large" startIcon={<MdPerson />}>
              Данные владельца
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<IoMdDocument />}
            >
              Заявки на покупку
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="large"
              startIcon={<MdDelete />}
              onClick={() => setShowDeactivateDrawer(true)}
            >
              Удалить
            </Button>
          </Box>
        </Box>
      </Grid>
    );

  return null;
};
