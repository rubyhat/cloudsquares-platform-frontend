import { Container, Grid, Typography } from "@mui/material";
import { PropertyCategoriesList } from "../PropertyCategoriesList";

export const PropertyCategoriesContent = () => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography
            component="h1"
            variant="h3"
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            Категории недвижимости
          </Typography>
        </Grid>
        <Grid size={12}>
          <PropertyCategoriesList />
        </Grid>
      </Grid>
    </Container>
  );
};
