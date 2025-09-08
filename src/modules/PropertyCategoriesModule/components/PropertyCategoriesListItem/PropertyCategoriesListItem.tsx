import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { MdDelete, MdDragIndicator, MdEdit } from "react-icons/md";
import { PropertyCategory } from "@/shared/interfaces/PropertyCategory";
import { BasicDrawerMode } from "@/shared/interfaces/Shared";
import { cardStyles } from "./styles";
import { usePropertyCategoriesStore } from "../../store";

interface PropertyCategoriesListItemProps {
  category: PropertyCategory;
}

export const PropertyCategoriesListItem = ({
  category,
}: PropertyCategoriesListItemProps) => {
  const setEditablePropertyCategory = usePropertyCategoriesStore(
    (state) => state.setEditablePropertyCategory,
  );
  const openDrawerWithMode = usePropertyCategoriesStore(
    (state) => state.openDrawerWithMode,
  );

  const handleUpdateButtonClick = () => {
    setEditablePropertyCategory(category);
    openDrawerWithMode(BasicDrawerMode.edit);
  };

  const handleDeleteButtonClick = () => {
    setEditablePropertyCategory(category);
    openDrawerWithMode(BasicDrawerMode.delete);
  };

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
          <IconButton color="primary" onClick={handleUpdateButtonClick}>
            <MdEdit size={24} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Удалить">
          <IconButton color="error" onClick={handleDeleteButtonClick}>
            <MdDelete size={24} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
