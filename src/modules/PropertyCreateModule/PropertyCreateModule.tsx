import React from "react";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { Container, Grid } from "@mui/material";

export const PropertyCreateModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Добавление объекта недвижимости" />
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
