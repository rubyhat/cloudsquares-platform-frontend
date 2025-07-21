import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { useGetPropertyDetailsQuery } from "./hooks";
import { PropertyDetailsToolsBar } from "./components/PropertyDetailsToolsBar";
import { PropertyDetailsPriceBlock } from "./components/PropertyDetailsPriceBlock";
import { AxiosErrorAlertMessage } from "../../shared/components/AxiosErrorAlertMessage";
import { PropertyDetailsPhotoBlock } from "./components/PropertyDetailsPhotoBlock";
import { PropertyDetailsSlimInfo } from "./components/PropertyDetailsSlimInfo";

export const PropertyDetailsModule = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading, error } = useGetPropertyDetailsQuery(id);

  return (
    <React.Fragment>
      <BasicPageHeader title="Детали недвижимости" shownBackArrowButton />
      <Container maxWidth={false} sx={{ pb: { xs: "100px", md: 0 } }}>
        <Grid container spacing={2}>
          {error && !isLoading && (
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <AxiosErrorAlertMessage error={error} />
            </Grid>
          )}
          {isLoading && <React.Fragment>loading..</React.Fragment>}
          {data && isSuccess && (
            <React.Fragment>
              <Grid size={12}>
                <Box py={2}>
                  <Typography component="h1" variant="h4">
                    {data.title}
                  </Typography>
                  <PropertyDetailsToolsBar />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <PropertyDetailsPhotoBlock photos={data.property_photos} />
              </Grid>
              <PropertyDetailsPriceBlock property={data} />
            </React.Fragment>
          )}
        </Grid>
      </Container>
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {isLoading && <React.Fragment>loading..</React.Fragment>}
          {isSuccess && data && (
            <Grid size={8}>
              <Box py={2.5}>
                <PropertyDetailsSlimInfo property={data} />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
