import { Box } from "@mui/material";
import { PropertyUpdateModule } from "../../modules/PropertyUpdateModule";

export const PropertyUpdate = () => {
  return (
    <Box
      component="section"
      className="section"
      data-testid="pagePropertyUpdate"
    >
      <PropertyUpdateModule />
    </Box>
  );
};
