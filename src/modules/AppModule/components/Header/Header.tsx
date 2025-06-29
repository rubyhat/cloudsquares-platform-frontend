import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { HeaderNavigation } from "../HeaderNavigation";
import { HeaderLogotype } from "../HeaderLogotype";
import {
  headerContentStyles,
  loginWrapperStyles,
  logoWrapperStyles,
} from "./styles";
import { useIsAuthenticated } from "../../../../shared/permissions/hooks";
import { HeaderProfile } from "../HeaderProfile";

export const Header = () => {
  const { t } = useTranslation();
  const isAuthenticated = useIsAuthenticated();

  return (
    <Box
      component="header"
      data-testid="header"
      sx={{ display: { xs: "none", lg: "block" } }}
    >
      <Box sx={headerContentStyles}>
        <Box sx={logoWrapperStyles}>
          <HeaderLogotype />
          {!isAuthenticated && <HeaderNavigation />}
        </Box>
        {!isAuthenticated && (
          <Box sx={loginWrapperStyles}>
            <Button variant="text" size="small">
              {t("request_demo")}
            </Button>
            <Link to="/login">
              <Button variant="contained" size="small">
                {t("login")}
              </Button>
            </Link>
          </Box>
        )}
        {isAuthenticated && <HeaderProfile />}
      </Box>
    </Box>
  );
};
