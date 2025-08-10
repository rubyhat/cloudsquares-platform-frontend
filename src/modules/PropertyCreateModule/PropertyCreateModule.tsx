import React from "react";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { Container, Grid } from "@mui/material";
import { PropertyFormModule } from "../PropertyFormModule";

export const PropertyCreateModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Создание объекта" shownBackArrowButton />
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}>
            <PropertyFormModule />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
