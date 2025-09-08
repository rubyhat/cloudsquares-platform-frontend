import { Button, Typography } from "@mui/material";
import { usePropertyCategoriesStore } from "../../store";

export const PropertyCategoriesCreateButton = () => {
  const setShowPropertyCategoriesFormDrawer = usePropertyCategoriesStore(
    (state) => state.setShowPropertyCategoriesFormDrawer,
  );

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{ height: { xs: 66, md: 82, lg: 88 } }}
      onClick={() => setShowPropertyCategoriesFormDrawer(true)}
    >
      <Typography component="h6" variant="body2">
        + Добавить новую категорию
      </Typography>
    </Button>
  );
};
