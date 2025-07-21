import { Box, Typography } from "@mui/material";
import {
  ListingTypeText,
  Property,
} from "../../../../shared/interfaces/Property";
import { contentStyles } from "./styles";

interface PropertyDetailsSlimInfoProps {
  property: Property;
}

export const PropertyDetailsSlimInfo = ({
  property,
}: PropertyDetailsSlimInfoProps) => {
  const displayedData = [
    { label: "Город", value: property.property_location.city },
    { label: "Услуга", value: ListingTypeText[property.listing_type] },
    { label: "Категория", value: property.category.title },
    { label: "Комнат", value: 2 }, // TODO: REMOVE HARDCODE
    { label: "Площадь", value: 42.5 }, // TODO: REMOVE HARDCODE
    { label: "Кухня", value: 5 }, // TODO: REMOVE HARDCODE
    { label: "Этаж", value: "3/9" }, // TODO: REMOVE HARDCODE
    { label: "Год постройки", value: 2010 }, // TODO: REMOVE HARDCODE
  ];
  return (
    <Box sx={contentStyles}>
      {displayedData.map(({ label, value }, index) => (
        <Box key={index}>
          <Typography
            component="p"
            variant="body3"
            color="customColors.grey500"
          >
            {label}
          </Typography>
          <Typography component="p" variant="body2">
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
