import { Box, Container, Grid, Typography } from "@mui/material";
import { PropertyCategoriesList } from "../PropertyCategoriesList";
import { titleWrapperStyles } from "./styles";
import { PropertyCategoriesFormDrawer } from "../PropertyCategoriesFormDrawer";

export const PropertyCategoriesContent = () => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Box sx={titleWrapperStyles}>
            <Typography component="h1" variant="h3">
              Категории недвижимости
            </Typography>
          </Box>
        </Grid>
        <Grid size={12}>
          <PropertyCategoriesList />
          <PropertyCategoriesFormDrawer />
        </Grid>
      </Grid>
    </Container>
  );
};
