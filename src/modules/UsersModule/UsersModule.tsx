import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { useUsersStore } from "./store";
import { UsersList } from "./components/UsersList";
import { UsersFormDrawer } from "./components/UsersFormDrawer";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { BasicDrawerMode } from "../../shared/interfaces/Shared";

export const UsersModule = () => {
  const openDrawerWithMode = useUsersStore((state) => state.openDrawerWithMode);

  return (
    <React.Fragment>
      <BasicPageHeader title="Сотрудники" shownBackArrowButton />
      <Container maxWidth={false}>
        <Grid container spacing={2} pt={2}>
          <Grid size={12}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography component="h1" variant="h2">
                Сотрудники
              </Typography>
              <Button
                variant="contained"
                color="success"
                onClick={() => openDrawerWithMode(BasicDrawerMode.create)}
              >
                + Добавить
              </Button>
            </Box>
          </Grid>
          <UsersList />
        </Grid>
      </Container>
      <UsersFormDrawer />
    </React.Fragment>
  );
};
