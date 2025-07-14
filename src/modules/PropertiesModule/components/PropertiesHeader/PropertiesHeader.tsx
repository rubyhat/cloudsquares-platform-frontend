import { Box, Typography } from "@mui/material";
import { PropertiesSearchWrapper } from "../PropertiesSearchWrapper";
import { PropertiesFilter } from "../PropertiesFilter";

export const PropertiesHeader = () => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <Typography component="h1" variant="h4">
        Каталог недвижимости
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <PropertiesSearchWrapper />
        <PropertiesFilter />
      </Box>
    </Box>
  );
};
