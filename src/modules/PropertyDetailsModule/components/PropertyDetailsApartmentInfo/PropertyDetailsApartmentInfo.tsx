import { Box, Typography } from "@mui/material";
import { PropertyDetailsInfoList } from "../PropertyDetailsInfoList";
import { propertyDetailsStore } from "../../store";
import { PropertyDetailsInfoItem } from "../../../../shared/interfaces/PropertyDetails";
import { ListingTypeText } from "../../../../shared/interfaces/Property";

export const PropertyDetailsApartmentInfo = () => {
  const currentProperty = propertyDetailsStore(
    (state) => state.currentProperty,
  );

  const displayData = (): PropertyDetailsInfoItem[] => {
    if (currentProperty) {
      return [
        {
          label: "Тип жилья",
          value: ListingTypeText[currentProperty.listing_type],
        },
        { label: "Общая площадь", value: "42.5 м2" },
        { label: "Жилая площадь", value: "28.5 м2" },
        { label: "Площадь кухни", value: "5 м2" },
        { label: "Сан. узел", value: 1 },
        { label: "Балкон/Лоджия", value: 1 },
        { label: "Отделка", value: "Косметический ремонт" },
      ];
    }
    return [];
  };

  return (
    <Box>
      <Typography component="h5" variant="h5">
        О квартире
      </Typography>
      <Box pt={2}>
        <PropertyDetailsInfoList data={displayData()} />
      </Box>
    </Box>
  );
};
