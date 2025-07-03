import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import {
  ListingTypeText,
  Property,
  PropertyStatusText,
} from "../../../../shared/interfaces/Property";
import { useNavigate } from "react-router-dom";

interface PropertiesListItemProps {
  property: Property;
}

export const PropertiesListItem = ({ property }: PropertiesListItemProps) => {
  const navigate = useNavigate();

  return (
    <Box
      component={Paper}
      sx={{ overflow: "hidden", borderRadius: 3, cursor: "pointer" }}
      onClick={() => navigate("/properties/" + property.id)}
    >
      <Box>
        <Box
          component="img"
          src={property.property_photos[0].file_preview_url}
          alt="Фото недвижимости"
          sx={{ width: 1 }}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography component="h6" variant="h6">
          {property.category.title}
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
      </Box>
    </Box>
  );
};
