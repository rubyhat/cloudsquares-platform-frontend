import React from "react";
import { Container, Grid } from "@mui/material";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

export const DashboardsModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Аналитика" />
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}>Hello Dashboards!</Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
