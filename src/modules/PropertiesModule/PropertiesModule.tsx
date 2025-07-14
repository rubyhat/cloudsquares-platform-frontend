import React from "react";
import { Container, Grid } from "@mui/material";

import { PropertiesList } from "./components/PropertiesList";
import { PropertiesHeader } from "./components/PropertiesHeader";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

export const PropertiesModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader
        title="Каталог недвижимости"
        shownBackArrowButton
        backButtonLink="/"
      />
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}>
            <PropertiesHeader />
          </Grid>
          <PropertiesList />
        </Grid>
      </Container>
    </React.Fragment>
  );
};
