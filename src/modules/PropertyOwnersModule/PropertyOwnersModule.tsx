import React from "react";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { Container, Grid, Typography } from "@mui/material";
import { PropertyOwnersTable } from "./components/PropertyOwnersTable";

export const PropertyOwnersModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="База собственников" shownBackArrowButton />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12} sx={{ display: { xs: "none", md: "block" } }}>
            <Typography component="h1" variant="h1">
              База собственников
            </Typography>
          </Grid>
          <Grid size={12}>Filters and search</Grid>
          <Grid size={12}>
            <PropertyOwnersTable />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
