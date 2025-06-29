import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

import { basicPageHeaderStyles } from "./styles";

/**
 * Пропсы для компонента BasicPageHeader.
 */
interface BasicPageHeaderProps {
  /** Заголовок страницы */
  title: string;
  /** Нужно ли отображать кнопку назад */
  shownBackArrowButton?: boolean;
  /** Ссылка fallback, если история недоступна или переход на внешний сайт */
  backButtonLink?: string;
}

/**
 * Компонент заголовка страницы.
 *
 * - Отображает заголовок.
 * - Опционально отображает кнопку "Назад" слева.
 * - Если пользователь переходит на внешний сайт, используется `backButtonLink` или редирект на главную.
 *
 * @param {BasicPageHeaderProps} props Пропсы компонента
 * @returns React-компонент заголовка страницы
 */
export const BasicPageHeader = ({
  title,
  shownBackArrowButton = false,
  backButtonLink,
}: BasicPageHeaderProps) => {
  const navigate = useNavigate();

  /**
   * Обработчик клика по кнопке назад.
   */
  const handleBackClick = () => {
    if (backButtonLink) {
      // Если есть переданный fallback
      navigate(backButtonLink);
    } else if (window.history.length > 1) {
      // Если в истории есть ссылки, то вернуться назад
      return navigate(-1);
    } else {
      // Иначе возвращаем на главную
      return navigate("/");
    }
  };

  return (
    <Box sx={basicPageHeaderStyles}>
      {shownBackArrowButton && (
        <IconButton onClick={handleBackClick} sx={{ mr: 1 }}>
          <IoArrowBackSharp size={16} color="#1c1c1c" />
        </IconButton>
      )}
      <Typography component="h6" variant="h6">
        {title}
      </Typography>
    </Box>
  );
};
