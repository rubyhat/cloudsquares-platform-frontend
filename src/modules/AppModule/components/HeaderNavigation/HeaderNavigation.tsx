import React from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { MdMenu } from "react-icons/md";
import {
  menuButtonWrapperStyles,
  mobileMenuStyles,
  navigationListStyles,
} from "./styles";

const pages = ["Продукт", "Тарифы", "Контакты"];

export const HeaderNavigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <React.Fragment>
      <Box sx={menuButtonWrapperStyles}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MdMenu />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={mobileMenuStyles}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography sx={{ textAlign: "center" }}>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={navigationListStyles}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ display: "block" }}
            size="small"
            variant="text"
          >
            {page}
          </Button>
        ))}
      </Box>
    </React.Fragment>
  );
};
