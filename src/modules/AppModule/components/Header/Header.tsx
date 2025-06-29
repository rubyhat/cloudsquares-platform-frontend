import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { HeaderProfile } from "../HeaderProfile";
import { HeaderNavigation } from "../HeaderNavigation";
import { HeaderLogotype } from "../HeaderLogotype";

export const Header = () => {
  return (
    <Box component="header" data-testid="header">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HeaderLogotype />
            <HeaderNavigation />
            <HeaderProfile />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
