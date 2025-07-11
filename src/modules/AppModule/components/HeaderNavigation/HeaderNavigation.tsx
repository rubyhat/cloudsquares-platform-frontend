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
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  menuButtonWrapperStyles,
  mobileMenuStyles,
  navigationListStyles,
} from "./styles";

// TODO: решить нужен ли бургер меню на мобилке или все ссылки будут в профиле
export const HeaderNavigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const pages = [
    { title: t("header.navigation.properties"), link: "/properties" },
    { title: t("header.navigation.requests"), link: "/requests" },
    { title: t("header.navigation.analytics"), link: "/analytics" },
    { title: t("header.navigation.customers"), link: "/agency/customers" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickMenuItem = (link: string) => {
    handleCloseNavMenu();
    navigate(link);
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
          {pages.map(({ title }, index) => (
            <MenuItem key={index} onClick={handleCloseNavMenu}>
              <Typography sx={{ textAlign: "center" }}>{title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={navigationListStyles}>
        {pages.map(({ title, link }, index) => (
          <Button
            key={index}
            onClick={() => handleClickMenuItem(link)}
            sx={{ display: "block" }}
            size="small"
            variant="text"
          >
            {title}
          </Button>
        ))}
      </Box>
    </React.Fragment>
  );
};
