import { Box } from "@mui/material";
import { UsersModule } from "../../modules/UsersModule";

export const Users = () => {
  return (
    <Box component="section" className="section" data-testid="pageUsers">
      <UsersModule />
    </Box>
  );
};
