import React from "react";
import { Container, Grid } from "@mui/material";
import { BasicPageHeader } from "@/shared/components/Mobile/BasicPageHeader";
import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";
import { PropertyFormModule } from "../PropertyFormModule";

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
            <PropertyFormModule mode={PropertyFormMode.create} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
