import React from "react";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { Container, Grid } from "@mui/material";

export const PropertyUpdateModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Редактирование недвижимости" />
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}>PropertyUpdateModule</Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
