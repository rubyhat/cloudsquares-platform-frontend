import { Box } from "@mui/material";
import { ProfileDetailsModule } from "../../modules/ProfileDetailsModule";

export const ProfileDetails = () => {
  return (
    <Box component="section" data-testid="pageProfileDetails">
      <ProfileDetailsModule />
    </Box>
  );
};
