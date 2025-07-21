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
import { PropertyDetailsApartmentInfo } from "./components/PropertyDetailsApartmentInfo";
import { propertyDetailsStore } from "./store";
import { PropertyDetailsApartmentHouseInfo } from "./components/PropertyDetailsApartmentHouseInfo";

export const PropertyDetailsModule = () => {
  const { id } = useParams();
  const currentProperty = propertyDetailsStore(
    (state) => state.currentProperty,
  );
  const setCurrentProperty = propertyDetailsStore(
    (state) => state.setCurrentProperty,
  );
  const { data, isSuccess, isLoading, error } = useGetPropertyDetailsQuery(id);

  React.useEffect(() => {
    if (isSuccess && data) {
      setCurrentProperty(data);
    }
  }, [data, isSuccess, setCurrentProperty]);

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
          {currentProperty && (
            <React.Fragment>
              <Grid size={12}>
                <Box py={2}>
                  <Typography component="h1" variant="h4">
                    {currentProperty.title}
                  </Typography>
                  <PropertyDetailsToolsBar />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <PropertyDetailsPhotoBlock
                  photos={currentProperty.property_photos}
                />

                <Grid size={12}>
                  <Box py={2.5}>
                    <PropertyDetailsSlimInfo />
                  </Box>
                </Grid>
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <PropertyDetailsApartmentInfo />
                  </Grid>
                  <Grid size={6}>
                    <PropertyDetailsApartmentHouseInfo />
                  </Grid>
                </Grid>
              </Grid>
              <PropertyDetailsPriceBlock />
            </React.Fragment>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
