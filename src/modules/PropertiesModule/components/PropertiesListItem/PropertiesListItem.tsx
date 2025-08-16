import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import {
  ListingTypeText,
  Property,
  PropertyStatusText,
} from "../../../../shared/interfaces/Property";
import { propertyAddress, propertyTitle } from "../../../../shared/utils";
import { PropertyPriceInfo } from "../../../../shared/components/PropertyPriceInfo";
import { AgentCompactCard } from "../../../../shared/components/AgentCompactCard";
import {
  cardButtonWrapperStyles,
  cardStyles,
  contentStyles,
  priceInfoWrapperStyles,
} from "./styles";

interface PropertiesListItemProps {
  property: Property;
}

// TODO: в будущем вернуть отображение доп. фото
export const PropertiesListItem = ({ property }: PropertiesListItemProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={cardStyles}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          component="img"
          src={property.property_photos[0]?.file_preview_url} // TODO: Добавить заглушку для фото, когда фото нет
          alt="Фото недвижимости"
          sx={{ width: 1, borderRadius: 4, cursor: "pointer" }}
          onClick={() => navigate("/properties/" + property.id)}
        />
        {/* <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Box
            component="img"
            src={property.property_photos[0].file_preview_url}
            alt="Фото недвижимости"
            sx={{ width: 1, borderRadius: 4 }}
          />
          <Box
            component="img"
            src={property.property_photos[0].file_preview_url}
            alt="Фото недвижимости"
            sx={{ width: 1, borderRadius: 4 }}
          />
        </Box> */}
      </Box>
      <Box sx={contentStyles}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="h6" variant="subtitle1">
            {propertyTitle(property)}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography component="p" variant="body2">
              {PropertyStatusText[property.status]}
            </Typography>
            <Typography component="p" variant="body2">
              {ListingTypeText[property.listing_type]}
            </Typography>
            <Typography component="p" variant="body2">
              {property.price}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="p"
              variant="body1"
              color="customColors.grey600"
              my={1}
            >
              {propertyAddress(property).fullAddress}
            </Typography>
            <Typography
              component="p"
              variant="body1"
              color="customColors.grey600"
            >
              {property.description}
            </Typography>
          </Box>
          {property.agent && (
            <Box py={2}>
              <AgentCompactCard agent={property.agent} />
            </Box>
          )}
          <Box sx={cardButtonWrapperStyles}>
            <Box component={Link} to={`/requests/buy?property=${property.id}`}>
              <Button variant="outlined" size="large" fullWidth>
                Открыть заявки
              </Button>
            </Box>
            <Box component={Link} to={`/properties/${property.id}`}>
              <Button variant="contained" size="large" fullWidth>
                Открыть детали
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={priceInfoWrapperStyles}>
          <PropertyPriceInfo property={property} />
        </Box>
      </Box>
    </Box>
  );
};
