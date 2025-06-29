import { Box } from "@mui/material";

import { LoginModule } from "../../modules/LoginModule";

export const Login = () => {
  return (
    <Box component="section" data-testid="pageLogin">
      <LoginModule />
    </Box>
  );
};
