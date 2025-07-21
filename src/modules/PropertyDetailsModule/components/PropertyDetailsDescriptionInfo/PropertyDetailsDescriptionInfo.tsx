import { Box, Typography } from "@mui/material";
import { propertyDetailsStore } from "../../store";

export const PropertyDetailsDescriptionInfo = () => {
  const currentProperty = propertyDetailsStore(
    (state) => state.currentProperty,
  );

  return (
    <Box pb={2}>
      <Typography component="h5" variant="h5">
        Описание
      </Typography>
      <Box pt={2}>{currentProperty?.description}</Box>
    </Box>
  );
};
