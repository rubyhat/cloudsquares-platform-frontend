import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { FaUserAlt, FaHome, FaSearch, FaShoppingBasket } from "react-icons/fa";

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
      <Box sx={menuItemStyles} component={Link} to="/">
        <FaHome size={16} style={menuItemIconStyles(isActive("/"))} />
        <Typography
          component="p"
          variant="body1"
          sx={menuItemTextStyles(isActive("/"))}
        >
          Главная
        </Typography>
      </Box>

      <Box sx={menuItemStyles} component={Link} to="/catalog">
        <FaSearch size={16} style={menuItemIconStyles(isActive("/catalog"))} />
        <Typography
          component="p"
          variant="body1"
          sx={menuItemTextStyles(isActive("/catalog"))}
        >
          Каталог
        </Typography>
      </Box>

      <Box sx={menuItemStyles} component={Link} to="/cart">
        <FaShoppingBasket
          size={16}
          style={menuItemIconStyles(isActive("/cart"))}
        />
        <Typography
          component="p"
          variant="body1"
          sx={menuItemTextStyles(isActive("/cart"))}
        >
          Корзина
        </Typography>
      </Box>

      <Box sx={menuItemStyles} component={Link} to="/profile">
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
