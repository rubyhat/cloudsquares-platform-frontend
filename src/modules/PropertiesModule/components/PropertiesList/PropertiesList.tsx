import React from "react";
import { Grid } from "@mui/material";

import { PropertiesListItem } from "../PropertiesListItem";
import { useGetAllPropertiesOfAgencyQuery } from "../../hooks";
import { useUserProfile } from "../../../../shared/permissions/hooks";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";
import { PropertiesCreateCard } from "../PropertiesCreateCard";

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

  if (propertiesIsSuccess && properties.length === 0)
    return (
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <PropertiesCreateCard
          title="Каталог пуст"
          description="Добавьте объекты недвижимости в систему и они появятся здесь"
        />
      </Grid>
    );

  return (
    <React.Fragment>
      {propertiesIsLoading && "Loading..."}
      {properties &&
        propertiesIsSuccess &&
        properties.map((property) => (
          <Grid size={12} key={property.id}>
            <PropertiesListItem property={property} />
          </Grid>
        ))}
      {!propertiesIsLoading && !propertiesError && (
        <Grid size={{ xs: 12, lg: 6 }}>
          <PropertiesCreateCard
            title="Новый объект"
            description="Добавьте объекты недвижимости в систему и они появятся здесь"
          />
        </Grid>
      )}
    </React.Fragment>
  );
};
