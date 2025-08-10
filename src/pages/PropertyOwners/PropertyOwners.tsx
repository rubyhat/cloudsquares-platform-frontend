import { Box } from "@mui/material";
import { PropertyOwnersModule } from "../../modules/PropertyOwnersModule";

export const PropertyOwners = () => {
  return (
    <Box
      component="section"
      className="section"
      data-testid="pagePropertyOwners"
    >
      <PropertyOwnersModule />
    </Box>
  );
};
