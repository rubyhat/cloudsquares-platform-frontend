import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { HeaderNavigation } from "../HeaderNavigation";
import { HeaderLogotype } from "../HeaderLogotype";
import {
  headerContentStyles,
  loginWrapperStyles,
  logoWrapperStyles,
} from "./styles";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Box component="header" data-testid="header">
      <Box sx={headerContentStyles}>
        <Box sx={logoWrapperStyles}>
          <HeaderLogotype />
          <HeaderNavigation />
        </Box>
        <Box sx={loginWrapperStyles}>
          <Button variant="text" size="small">
            {t("request_demo")}
          </Button>
          <Button variant="contained" size="small">
            {t("login")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
