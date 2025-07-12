import { Box } from "@mui/material";
import { DashboardsModule } from "../../modules/DashboardsModule";

export const Dashboards = () => {
  return (
    <Box component="section" data-testid="pageDashboards">
      <DashboardsModule />
    </Box>
  );
};
