import { Box } from "@mui/material";
import { HomeModule } from "../../modules/HomeModule";

export const Home = () => {
  return (
    <Box component="section" className="section" data-testid="pageHome">
      <HomeModule />
    </Box>
  );
};
