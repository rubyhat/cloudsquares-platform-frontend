import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { useGetPropertyDetailsQuery } from "./hooks";

export const PropertyDetailsModule = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetPropertyDetailsQuery(id);
  return (
    <React.Fragment>
      <BasicPageHeader title="Детали недвижимости" />
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}>
            {data && isSuccess && (
              <Box py={2}>
                <Typography component="h1" variant="h4">
                  {data.title}
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
