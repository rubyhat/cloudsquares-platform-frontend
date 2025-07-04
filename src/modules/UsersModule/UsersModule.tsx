import React from "react";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { Container, Grid } from "@mui/material";

export const UsersModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Сотрудники" shownBackArrowButton />
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
