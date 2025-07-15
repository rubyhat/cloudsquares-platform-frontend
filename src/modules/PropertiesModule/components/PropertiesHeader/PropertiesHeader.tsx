import { Box, Typography } from "@mui/material";
import { PropertiesSearchWrapper } from "../PropertiesSearchWrapper";
import { PropertiesFilter } from "../PropertiesFilter";
import { headerStyles, wrapperStyles } from "./styles";

export const PropertiesHeader = () => {
  return (
    <Box sx={headerStyles}>
      <Typography
        component="h1"
        variant="h3"
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        Каталог недвижимости
      </Typography>
      <Box sx={wrapperStyles}>
        <PropertiesSearchWrapper />
        <PropertiesFilter />
      </Box>
    </Box>
  );
};
