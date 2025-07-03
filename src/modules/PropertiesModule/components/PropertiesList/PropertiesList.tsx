import React from "react";
import { Grid } from "@mui/material";

import { PropertiesListItem } from "../PropertiesListItem";
import { useGetAllPropertiesOfAgencyQuery } from "../../hooks";
import { useUserProfile } from "../../../../shared/permissions/hooks";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";

export const PropertiesList = () => {
  const profile = useUserProfile();
  const {
    data: properties,
    isLoading: propertiesIsLoading,
    isSuccess: propertiesIsSuccess,
    error: propertiesError,
  } = useGetAllPropertiesOfAgencyQuery(profile?.agency?.id);

  if (propertiesError)
    return (
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <AxiosErrorAlertMessage error={propertiesError} />
      </Grid>
    );

  return (
    <React.Fragment>
      {propertiesIsLoading && "Loading..."}
      {properties &&
        propertiesIsSuccess &&
        properties.map((property) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={property.id}>
            <PropertiesListItem property={property} />
          </Grid>
        ))}
    </React.Fragment>
  );
};
