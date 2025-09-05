import { Box, Typography } from "@mui/material";
import { Property } from "../../interfaces/Property";
import { calculatePricePerMeter } from "../../utils";
import { DiscountLabel } from "../../DiscountLabel";

interface PropertyPriceInfoProps {
  property: Property;
}

// TODO: Проверить, точно ли нужен этот компонент в shared?
export const PropertyPriceInfo = ({ property }: PropertyPriceInfoProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <DiscountLabel price={property.price} discount={property.discount} />
      <Typography component="h6" variant="h4">
        {(property.price - property.discount).toLocaleString("ru")} ₽
      </Typography>
      <Typography component="p" variant="body1">
        {calculatePricePerMeter(property.price, 42)} ₽ за м²
      </Typography>
    </Box>
  );
};
