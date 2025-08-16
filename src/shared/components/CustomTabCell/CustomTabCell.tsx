import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  Typography,
} from "@mui/material";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

/**
 * Опции выпадающего меню внутри ячейки таблицы.
 */
interface CustomTableCellOptions {
  /** Текст или элемент, отображаемый в меню */
  label: string | React.ReactNode;

  /** Функция, вызываемая при выборе опции */
  onClick: () => void;
}

/**
 * Пропсы для компонента `CustomTableCell`.
 */
interface CustomTableCellProps {
  /** Текст, отображаемый в ячейке */
  text: string;

  /** Жирность шрифта (необязательно) */
  fw?: number;

  /** Ширина ячейки (в пикселях или в процентах) */
  width?: string | number;

  /** Выравнивание текста внутри ячейки */
  align?: "inherit" | "left" | "center" | "right" | "justify";

  /** Опциональное выпадающее меню с действиями */
  options?: CustomTableCellOptions[] | null;
}

/**
 * Компонент ячейки таблицы с возможностью отображения выпадающего меню.
 *
 * Может просто отображать текст или включать кнопку для вызова выпадающего списка опций.
 *
 * @param {CustomTableCellProps} props Пропсы компонента
 * @returns React-компонент ячейки таблицы
 */
export const CustomTableCell = ({
  text,
  width,
  fw,
  align = "center",
  options,
}: CustomTableCellProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /**
   * Открывает выпадающее меню.
   * @param event Событие клика по кнопке
   */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /** Закрывает выпадающее меню. */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableCell align={align} width={width}>
      <Typography
        component="p"
        variant="body2"
        color="customColors.colorsBlue"
        fontWeight={fw}
        sx={{ display: "inline-block", gap: 1, width: 1 }}
      >
        {text}
        {options && (
          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="small"
            color="primary"
          >
            {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </IconButton>
        )}
      </Typography>

      {options && (
        <Menu
          id="options-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "options-button",
          }}
        >
          {options?.map(({ label, onClick }, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                onClick();
                handleClose();
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </TableCell>
  );
};
