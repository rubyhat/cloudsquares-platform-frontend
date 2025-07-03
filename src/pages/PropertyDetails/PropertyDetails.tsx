import { Box } from "@mui/material";
import { PropertyDetailsModule } from "../../modules/PropertyDetailsModule";

export const PropertyDetails = () => {
  return (
    <Box component="section" data-testid="pagePropertyDetails">
      <PropertyDetailsModule />
    </Box>
  );
};
