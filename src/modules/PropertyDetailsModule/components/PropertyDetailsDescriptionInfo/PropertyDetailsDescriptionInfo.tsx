import { Box, Typography } from "@mui/material";
import { usePropertyDetailsStore } from "../../store";

export const PropertyDetailsDescriptionInfo = () => {
  const currentProperty = usePropertyDetailsStore(
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
