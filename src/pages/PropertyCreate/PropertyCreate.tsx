import { Box } from "@mui/material";
import { PropertyCreateModule } from "../../modules/PropertyCreateModule";

export const PropertyCreate = () => {
  return (
    <Box
      component="section"
      className="section"
      data-testid="pagePropertyCreate"
    >
      <PropertyCreateModule />
    </Box>
  );
};
