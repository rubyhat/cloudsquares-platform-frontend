import { PropertyCategory } from "@/shared/interfaces/PropertyCategory";
import { Alert, Box, Typography } from "@mui/material";

interface PropertyCategoriesDeleteFormProps {
  editablePropertyCategory: PropertyCategory | null;
}

export const PropertyCategoriesDeleteForm = ({
  editablePropertyCategory,
}: PropertyCategoriesDeleteFormProps) => {
  if (!editablePropertyCategory) {
    return (
      <Box p={2}>
        <Alert severity="error">Удаляемый объект не определен</Alert>
      </Box>
    );
  }

  return (
    <Box flexGrow={1}>
      <Box pb={2}>
        <Typography component="p" variant="body1">
          Вы уверены, что хотите удалить категорию под названием{" "}
          <Box component="strong" color="customColors.error">
            {editablePropertyCategory.title}
          </Box>
          ?
        </Typography>
      </Box>
    </Box>
  );
};
