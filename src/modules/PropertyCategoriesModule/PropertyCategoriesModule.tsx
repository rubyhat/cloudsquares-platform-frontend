import { BasicPageHeader } from "@/shared/components/Mobile/BasicPageHeader";
import { Container, Grid } from "@mui/material";
import React from "react";

export const PropertyCategoriesModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Категории недвижимости" shownBackArrowButton />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
