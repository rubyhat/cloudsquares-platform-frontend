import { Box } from "@mui/material";
import { PropertiesModule } from "../../modules/PropertiesModule";

export const Properties = () => {
  return (
    <Box component="section" className="section" data-testid="pageProperties">
      <PropertiesModule />
    </Box>
  );
};
