import { Box, Container, Grid, Typography } from "@mui/material";
import { PropertyCategoriesList } from "../PropertyCategoriesList";

export const PropertyCategoriesContent = () => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography component="h1" variant="h3">
              Категории недвижимости
            </Typography>
          </Box>
        </Grid>
        <Grid size={12}>
          <PropertyCategoriesList />
        </Grid>
      </Grid>
    </Container>
  );
};
