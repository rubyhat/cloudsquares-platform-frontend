import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useUserProfile } from "../../../../shared/permissions/hooks";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export const HeaderProfile = () => {
  const { t } = useTranslation();
  const profile = useUserProfile();
  const navigate = useNavigate("");

  const settings = [
    {
      title: t("header.profile_menu.profile"),
      link: "/profile",
    },
    {
      title: t("header.profile_menu.estates"),
      link: "/profile",
    },
    {
      title: t("header.profile_menu.requests"),
      link: "/profile",
    },
    {
      title: t("header.profile_menu.logout"),
      link: "/profile",
    },
  ];

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickMenuItem = (link: string) => {
    handleCloseUserMenu();
    navigate(link);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={t("header.profile_menu.tooltip_title")}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
          }}
          onClick={handleOpenUserMenu}
        >
          <Typography component="p" variant="body1" fontWeight={700}>
            {[profile?.last_name, profile?.first_name].join(" ")}
          </Typography>
          <IconButton sx={{ p: 0 }}>
            <Avatar
              alt={profile?.first_name}
              src="/static/images/avatar/1.jpg"
            />
          </IconButton>
        </Box>
      </Tooltip>
      <Menu
        sx={{ mt: "50px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(({ link, title }, index) => (
          <MenuItem key={index} onClick={() => handleClickMenuItem(link)}>
            {title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
