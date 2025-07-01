import React from "react";
import { Container, Grid } from "@mui/material";

import { PropertiesSearchWrapper } from "./components/PropertiesSearchWrapper";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { PropertiesList } from "./components/PropertiesList";

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
            <PropertiesSearchWrapper />
          </Grid>
          <PropertiesList />
        </Grid>
      </Container>
    </React.Fragment>
  );
};
