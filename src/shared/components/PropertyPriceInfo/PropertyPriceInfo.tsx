import { Box, Typography } from "@mui/material";
import { Property } from "../../interfaces/Property";
import {
  calculateDiscountInPercent,
  calculatePricePerMeter,
} from "../../utils";

interface PropertyPriceInfoProps {
  property: Property;
}

export const PropertyPriceInfo = ({ property }: PropertyPriceInfoProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Box
        sx={{
          display: property.discount ? "flex" : "none",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          component="p"
          variant="subtitle1"
          color="customColors.success"
        >
          -{calculateDiscountInPercent(property.price, property.discount)}%
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          color="customColors.grey400"
          sx={{ textDecoration: "line-through" }}
        >
          {(property.price - property.discount).toLocaleString("ru")}₽
        </Typography>
      </Box>
      <Typography component="h6" variant="h4">
        {property.price.toLocaleString("ru")}₽
      </Typography>
      <Typography component="p" variant="body1">
        {calculatePricePerMeter(property.price, 42)}₽ за м²
      </Typography>
    </Box>
  );
};
