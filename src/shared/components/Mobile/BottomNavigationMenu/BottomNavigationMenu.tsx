import * as React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { FaUserAlt, FaHome, FaSearch } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5";

import {
  bottomNavigationMenuStyles,
  menuItemIconStyles,
  menuItemStyles,
  menuItemTextStyles,
} from "./styles";
import { shouldShowBottomNav } from "./utils";

/**
 * Компонент нижнего меню навигации.
 *
 * Особенности:
 * - Показывается только на мобильных (display: { xs: "grid", md: "none" });
 * - Не рендерится на страницах, соответствующих паттернам из BOTTOM_NAV_HIDDEN_PATTERNS;
 * - Подсвечивает активный пункт по текущему пути.
 */
export const BottomNavigationMenu: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  // Если по правилам меню должно быть скрыто — вообще не рендерим его
  const visible = shouldShowBottomNav(pathname);
  if (!visible) return null;

  // Активность для иконки/подписи (простая проверка равенства пути)
  const isActive = (path: string) => pathname === path;

  return (
    <Box sx={bottomNavigationMenuStyles}>
      <Box
        sx={menuItemStyles}
        component={NavLink}
        to="/"
        data-testid="nav-item-home"
      >
        <FaHome size={16} style={menuItemIconStyles(isActive("/"))} />
        <Typography
          component="p"
          variant="body1"
          sx={menuItemTextStyles(isActive("/"))}
        >
          Главная
        </Typography>
      </Box>

      <Box
        sx={menuItemStyles}
        component={NavLink}
        to="/properties"
        data-testid="nav-item-properties"
      >
        <FaSearch
          size={16}
          style={menuItemIconStyles(isActive("/properties"))}
        />
        <Typography
          component="p"
          variant="body1"
          sx={menuItemTextStyles(isActive("/properties"))}
        >
          Каталог
        </Typography>
      </Box>

      <Box
        sx={menuItemStyles}
        component={NavLink}
        to="/cart"
        data-testid="nav-item-cart"
      >
        <IoDocuments size={16} style={menuItemIconStyles(isActive("/cart"))} />
        <Typography
          component="p"
          variant="body1"
          sx={menuItemTextStyles(isActive("/cart"))}
        >
          Заявки
        </Typography>
      </Box>

      <Box
        sx={menuItemStyles}
        component={NavLink}
        to="/profile"
        data-testid="nav-item-profile"
      >
        <FaUserAlt size={16} style={menuItemIconStyles(isActive("/profile"))} />
        <Typography
          component="p"
          variant="body1"
          sx={menuItemTextStyles(isActive("/profile"))}
        >
          Профиль
        </Typography>
      </Box>
    </Box>
  );
};
