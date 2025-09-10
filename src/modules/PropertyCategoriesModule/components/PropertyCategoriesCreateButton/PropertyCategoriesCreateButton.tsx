import { Button, Typography } from "@mui/material";
import { usePropertyCategoriesStore } from "../../store";
import { BasicDrawerMode } from "@/shared/interfaces/Shared";

export const PropertyCategoriesCreateButton = () => {
  const openDrawerWithMode = usePropertyCategoriesStore(
    (state) => state.openDrawerWithMode,
  );

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{ height: { xs: 66, md: 82, lg: 88 } }}
      onClick={() => openDrawerWithMode(BasicDrawerMode.create)}
    >
      <Typography component="h6" variant="body2">
        + Добавить новую категорию
      </Typography>
    </Button>
  );
};
