import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { MdPhoto } from "react-icons/md";

import {
  ListingTypeText,
  Property,
  PropertyStatusText,
} from "@/shared/interfaces/Property";
import {
  htmlToShortText,
  propertyAddress,
  propertyTitle,
} from "@/shared/utils";
import { PropertyPriceInfo } from "@/shared/components/PropertyPriceInfo";
import { AgentCompactCard } from "@/shared/components/AgentCompactCard";
import {
  cardButtonWrapperStyles,
  cardStyles,
  contentStyles,
  imageThumbnailStyles,
  priceInfoWrapperStyles,
} from "./styles";

// TODO: перевести компонент в shared/components так как используется в нескольких модулях.
// TODO: убрать description из карточки

/**
 * Свойства карточки элемента списка объектов недвижимости.
 */
interface PropertiesListItemProps {
  /** Объект недвижимости */
  property: Property;

  /** Отображение кнопок действий в карточке */
  showActionButton?: boolean;
}

/**
 * Компонент карточки объекта недвижимости в списке.
 * Показывает превью (или заглушку, если фото нет), базовую информацию,
 * адрес, описание, карточку агента и кнопки действий.
 *
 * Если у объекта нет фото, отображается заглушка с иконкой из `react-icons`.
 * Превью и заглушка кликабельны и ведут на страницу деталей объекта.
 */
export const PropertiesListItem = ({
  property,
  showActionButton,
}: PropertiesListItemProps) => {
  const navigate = useNavigate();
  const shortDescription = React.useMemo(
    () => htmlToShortText(property.description, 300, "..."),
    [property.description],
  );

  const handleOpenDetails = React.useCallback(() => {
    navigate("/properties/" + property.slug);
  }, [navigate, property.slug]);

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
            sx={imageThumbnailStyles}
          >
            <MdPhoto size={64} />
          </Box>
        )}
      </Box>

      <Box sx={contentStyles}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="h5" variant="h5">
            {property.title}
          </Typography>
          <Typography component="p" variant="subtitle1">
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
            {property.property_location && (
              <Typography
                component="p"
                variant="body1"
                color="customColors.grey600"
                my={1}
              >
                {propertyAddress(property).fullAddress}
              </Typography>
            )}
            {shortDescription && (
              <Typography
                component="p"
                variant="body1"
                color="customColors.grey600"
              >
                {shortDescription}
              </Typography>
            )}
          </Box>

          {property.agent && (
            <Box py={2}>
              <AgentCompactCard agent={property.agent} />
            </Box>
          )}

          {showActionButton && (
            <Box sx={cardButtonWrapperStyles}>
              <Box
                component={Link}
                to={`/requests/buy?property=${property.id}`}
              >
                <Button variant="outlined" size="large" fullWidth>
                  Открыть заявки
                </Button>
              </Box>
              <Box component={Link} to={`/properties/${property.slug}`}>
                <Button variant="contained" size="large" fullWidth>
                  Открыть детали
                </Button>
              </Box>
            </Box>
          )}
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
