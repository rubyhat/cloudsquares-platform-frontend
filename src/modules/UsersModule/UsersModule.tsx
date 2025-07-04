import React from "react";
import { Container, Grid } from "@mui/material";

import { UsersList } from "./components/UsersList";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

export const UsersModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Сотрудники" shownBackArrowButton />
      <Container>
        <Grid container spacing={2}>
          <UsersList />
        </Grid>
      </Container>
    </React.Fragment>
  );
};
