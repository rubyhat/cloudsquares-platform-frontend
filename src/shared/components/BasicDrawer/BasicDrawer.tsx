import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { MdClose } from "react-icons/md";

import { contentWrapperStyles, headerStyles } from "./styles";

/**
 * Пропсы для компонента `BasicDrawer`.
 */
interface BasicDrawerProps {
  /** Заголовок, отображаемый в шапке модального окна */
  title: string;

  /** Флаг, определяющий, открыто ли модальное окно (`true` - открыт, `false` - закрыт) */
  isOpen: boolean;

  /** Дочерние элементы, которые будут отображаться внутри модального окна */
  children: React.ReactNode;

  /** Позиция открытого окна */
  anchor?: "top" | "right" | "bottom" | "left";

  /**
   * Функция для управления состоянием модального окна.
   * @param v `true`, если нужно открыть модальное окно, `false` - если закрыть
   */
  setIsOpen: (v: boolean) => void;
}

/**
 * Компонент боковой панели (модального окна) с заголовком и кнопкой закрытия.
 *
 * @param {BasicDrawerProps} props Пропсы компонента
 * @returns React-компонент модального окна
 */
export const BasicDrawer = ({
  children,
  title,
  isOpen,
  anchor = "bottom",
  setIsOpen,
}: BasicDrawerProps) => {
  /**
   * Обработчик открытия/закрытия модального окна.
   * @param newOpen Новое состояние (`true` - открыть, `false` - закрыть)
   * @returns Функция-обработчик клика
   */
  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer(false)}
      anchor={anchor}
      slotProps={{ paper: { sx: { borderRadius: "8px 8px 0 0" } } }}
      transitionDuration={333}
    >
      <Box sx={contentWrapperStyles}>
        <Box sx={headerStyles}>
          <Typography component="h6" variant="h6">
            {title}
          </Typography>
          <IconButton
            color="secondary"
            onClick={toggleDrawer(false)}
            size="small"
          >
            <MdClose color="#1c1c1c" />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </Box>
    </Drawer>
  );
};
