import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { MdPhoto } from "react-icons/md";

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

/**
 * Свойства карточки элемента списка объектов недвижимости.
 */
interface PropertiesListItemProps {
  /** Объект недвижимости */
  property: Property;
}

/**
 * Компонент карточки объекта недвижимости в списке.
 * Показывает превью (или заглушку, если фото нет), базовую информацию,
 * адрес, описание, карточку агента и кнопки действий.
 *
 * Если у объекта нет фото, отображается заглушка с иконкой из `react-icons`.
 * Превью и заглушка кликабельны и ведут на страницу деталей объекта.
 */
export const PropertiesListItem = ({ property }: PropertiesListItemProps) => {
  const navigate = useNavigate();

  const handleOpenDetails = React.useCallback(() => {
    navigate("/properties/" + property.id);
  }, [navigate, property.id]);

  // Берём превью, при его отсутствии попробуем основную ссылку на файл,
  // иначе отрисуем заглушку.
  const previewUrl =
    property.property_photos?.[0]?.file_preview_url ??
    property.property_photos?.[0]?.file_url ??
    "";

  return (
    <Box sx={cardStyles}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Превью фото или заглушка */}
        {previewUrl ? (
          <Box
            component="img"
            src={previewUrl}
            alt="Фото недвижимости"
            sx={{ width: 1, borderRadius: 4, cursor: "pointer" }}
            onClick={handleOpenDetails}
          />
        ) : (
          <Box
            role="button"
            tabIndex={0}
            aria-label="Открыть страницу объекта недвижимости"
            onClick={handleOpenDetails}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpenDetails();
            }}
            sx={{
              width: 1,
              aspectRatio: "16 / 9",
              borderRadius: 4,
              bgcolor: "action.hover",
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: (theme) => `1px dashed ${theme.palette.divider}`,
            }}
          >
            {/* Заглушка-иконка, когда нет фото */}
            <MdPhoto size={64} />
          </Box>
        )}
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

/* <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
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
  </Box> */
