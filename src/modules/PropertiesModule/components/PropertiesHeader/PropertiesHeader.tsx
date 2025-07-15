import { Box, Typography } from "@mui/material";
import { PropertiesSearchWrapper } from "../PropertiesSearchWrapper";
import { PropertiesFilter } from "../PropertiesFilter";

export const PropertiesHeader = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h3">
        Каталог недвижимости
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <PropertiesSearchWrapper />
        <PropertiesFilter />
      </Box>
    </Box>
  );
};
