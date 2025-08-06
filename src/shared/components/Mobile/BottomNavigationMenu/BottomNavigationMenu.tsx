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

/**
 * Компонент нижнего меню навигации.
 *
 * - Отображает 4 кнопки: Главная, Каталог, Корзина, Профиль.
 * - Подсвечивает активную кнопку в зависимости от текущего маршрута.
 * - По умолчанию цвет иконок — #cccccc, активная — #000000.
 *
 * @returns React-компонент нижнего меню навигации.
 */
export const BottomNavigationMenu = () => {
  const location = useLocation();

  // Функция для определения активного пути
  const isActive = (path: string) => location.pathname === path;

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
