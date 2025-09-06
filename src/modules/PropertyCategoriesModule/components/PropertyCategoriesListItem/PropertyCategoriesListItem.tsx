import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { MdDelete, MdDragIndicator, MdEdit } from "react-icons/md";
import { PropertyCategory } from "@/shared/interfaces/PropertyCategory";
import { cardStyles } from "./styles";

interface PropertyCategoriesListItemProps {
  category: PropertyCategory;
}

export const PropertyCategoriesListItem = ({
  category,
}: PropertyCategoriesListItemProps) => {
  return (
    <Box sx={cardStyles}>
      <IconButton>
        <MdDragIndicator size={24} />
      </IconButton>
      <Box flexGrow={1}>
        <Typography variant="h6">{category.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {(category.parent_id ?? category.level > 0)
            ? "Подкатегория"
            : "Главная категория"}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Tooltip title="Редактировать">
          <IconButton color="primary">
            <MdEdit size={24} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Удалить">
          <IconButton color="error">
            <MdDelete size={24} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
