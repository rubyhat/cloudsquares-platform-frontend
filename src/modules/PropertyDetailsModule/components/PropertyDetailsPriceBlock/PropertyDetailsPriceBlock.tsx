import { Box, Button, Grid, Typography } from "@mui/material";
import { MdPerson, MdEdit } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";

import { Property } from "../../../../shared/interfaces/Property";
import {
  calculatePricePerMeter,
  propertyAddress,
} from "../../../../shared/utils";
import { DiscountLabel } from "../../../../shared/DiscountLabel";
import { AgentCompactCard } from "../../../../shared/components/AgentCompactCard";

interface PropertyDetailsPriceBlockProps {
  property: Property;
}

export const PropertyDetailsPriceBlock = ({
  property,
}: PropertyDetailsPriceBlockProps) => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography
            component="p"
            variant="body4"
            color="customColors.grey500"
          >
            {calculatePricePerMeter(property.price, 42)}₽ за м²
          </Typography>
          <DiscountLabel price={property.price} discount={property.discount} />
          <Typography component="h5" variant="h5" mb={1}>
            {(property.price - property.discount).toLocaleString("ru")}₽
          </Typography>
          <Typography component="p" variant="subtitle2">
            42,5м². 2-комн. квартира
          </Typography>
          <Typography component="p" variant="body1">
            {propertyAddress(property).fullAddress}
          </Typography>
        </Box>
        <Box py={2}>
          <AgentCompactCard agent={property.agent} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button variant="contained" size="large" startIcon={<MdPerson />}>
            Данные владельца
          </Button>
          <Button variant="outlined" size="large" startIcon={<IoMdDocument />}>
            Заявки на покупку
          </Button>
          <Button variant="outlined" size="large" startIcon={<MdEdit />}>
            Управление объектом
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};
