import { Box } from "@mui/material";
import { PropertyCategoriesModule } from "@/modules/PropertyCategoriesModule";

export const PropertyCategories = () => {
  return (
    <Box
      component="section"
      className="section"
      data-testid="pagePropertyCategories"
    >
      <PropertyCategoriesModule />
    </Box>
  );
};
