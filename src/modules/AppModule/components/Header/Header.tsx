import { Box, Button } from "@mui/material";
import { HeaderNavigation } from "../HeaderNavigation";
import { HeaderLogotype } from "../HeaderLogotype";
import {
  headerContentStyles,
  loginWrapperStyles,
  logoWrapperStyles,
} from "./styles";

export const Header = () => {
  return (
    <Box component="header" data-testid="header">
      <Box sx={headerContentStyles}>
        <Box sx={logoWrapperStyles}>
          <HeaderLogotype />
          <HeaderNavigation />
        </Box>
        <Box sx={loginWrapperStyles}>
          <Button variant="text" size="small">
            Запросить демо
          </Button>
          <Button variant="contained" size="small">
            Вход / Регистрация
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
