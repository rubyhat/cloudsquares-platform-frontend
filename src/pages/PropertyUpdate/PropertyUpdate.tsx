import { Box } from "@mui/material";
import { PropertyUpdateModule } from "../../modules/PropertyUpdateModule";

export const PropertyUpdate = () => {
  return (
    <Box
      component="section"
      className="section section-property-edit"
      data-testid="pagePropertyUpdate"
    >
      <PropertyUpdateModule />
    </Box>
  );
};
