import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { PropertyDetailsInfoList } from "../PropertyDetailsInfoList";
import { usePropertyDetailsStore } from "../../store";
import { PropertyDetailsInfoItem } from "../../../../shared/interfaces/PropertyDetails";

export const PropertyDetailsAdditionalOptions = () => {
  const currentProperty = usePropertyDetailsStore(
    (state) => state.currentProperty,
  );

  const displayData = (): PropertyDetailsInfoItem[] => {
    if (currentProperty) {
      return [
        {
          label: "Год постройки",
          value: 2010,
        },
        { label: "Тип дома", value: "Кирпичный" },
        { label: "Тип перекрытий", value: "Железобетонные" },
        { label: "Подъезды", value: "4" },
        { label: "Отопление", value: "Центральное" },
        { label: "Газ", value: "Центральный" },
        { label: "Парковка", value: "Наземная" },
      ];
    }
    return [];
  };

  return (
    <React.Fragment>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box>
          <Typography component="h5" variant="h5">
            Дополнительные характеристики
          </Typography>
          <Box pt={2}>
            <PropertyDetailsInfoList data={displayData()} />
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ pt: { xs: 0, md: "46px" } }}>
          <PropertyDetailsInfoList data={displayData()} />
        </Box>
      </Grid>
    </React.Fragment>
  );
};
