import { Box } from "@mui/material";

import { ProfileModule } from "../../modules/ProfileModule";

export const Profile = () => {
  return (
    <Box component="section" data-testid="pageProfile">
      <ProfileModule />
    </Box>
  );
};
