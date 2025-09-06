import { Button, Typography } from "@mui/material";

export const PropertyCategoriesCreateButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{ height: { xs: 66, md: 82, lg: 88 } }}
    >
      <Typography component="h6" variant="body2">
        + Добавить новую категорию
      </Typography>
    </Button>
  );
};
