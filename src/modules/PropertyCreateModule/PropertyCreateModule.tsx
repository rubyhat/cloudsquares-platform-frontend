import React from "react";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { Container, Grid } from "@mui/material";
import { PropertyFormModule } from "../PropertyFormModule";
import { BasicDrawerMode } from "../../shared/interfaces/Shared";

export const PropertyCreateModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Создание объекта" shownBackArrowButton />
      <Container
        maxWidth={false}
        sx={{ height: { xs: "calc(100% - 65px)", md: 1 } }}
      >
        <Grid container spacing={2} sx={{ height: 1 }}>
          <Grid size={12} sx={{ height: 1 }}>
            <PropertyFormModule mode={BasicDrawerMode.create} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
