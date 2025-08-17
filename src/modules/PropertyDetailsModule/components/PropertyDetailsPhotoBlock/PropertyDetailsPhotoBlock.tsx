import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, IconButton, Typography } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";
import { PropertyPhoto } from "../../../../shared/interfaces/Property";
import {
  counterStyles,
  emblaContainerStyles,
  emblaSlideStyles,
  iconButtonNextStyles,
  iconButtonPrevStyles,
  imageStyles,
  photoWrapperStyles,
} from "./styles";

/**
 * Пропсы блока фото деталей объекта.
 */
interface PropertyDetailsPhotoBlockProps {
  /**
   * Массив фотографий объекта.
   * Если пустой — будет показана заглушка.
   */
  photos: PropertyPhoto[];
  /**
   * Состояние загрузки данных. Пока идёт загрузка — показываем заглушку,
   * чтобы не мигали старые фото.
   */
  loading?: boolean;
  /**
   * Ключ сущности (обычно `propertyId`). Нужен для жёсткой смены состояния
   * при переходе между разными объектами.
   */
  entityKey?: string | number;
}

/**
 * Блок слайдера фотографий объекта недвижимости.
 *
 * Особенности:
 * - Показывает заглушку, если фото нет или идёт загрузка;
 * - «Хард-ресет» состояния карусели при смене набора фото (carouselKey)
 *   или сущности (entityKey);
 * - Дизейблит стрелки, если листать нечего.
 */
export const PropertyDetailsPhotoBlock = ({
  photos,
  loading = false,
  entityKey,
}: PropertyDetailsPhotoBlockProps) => {
  // Если идёт загрузка или фото нет — считаем, что показываем плейсхолдер.
  const hasPhotos = Array.isArray(photos) && photos.length > 0;
  const showPlaceholder = loading || !hasPhotos;

  // Ключ карусели меняется при изменении списка фото или при явной смене сущности.
  const carouselKey = React.useMemo(() => {
    if (showPlaceholder) return `placeholder-${entityKey ?? "no-id"}`;
    const ids = photos.map((p) => p.id).join("_");
    return `${entityKey ?? "no-id"}__${ids}`;
  }, [showPlaceholder, photos, entityKey]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    dragFree: false,
    containScroll: "trimSnaps",
    inViewThreshold: 0.5,
    breakpoints: {},
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi],
  );

  // Сброс индекса при смене карусели/набора фото
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [carouselKey]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, carouselKey]);

  return (
    <Box sx={photoWrapperStyles}>
      {/* Ключ на враппере принудительно пересоздаёт карусель при смене данных */}
      <Box
        key={carouselKey}
        ref={emblaRef}
        className="embla"
        sx={{ overflow: "hidden", width: "100%" }}
      >
        <Box className="embla__container" sx={emblaContainerStyles}>
          {(showPlaceholder ? [null] : photos).map((photo, idx) => {
            const key = photo ? photo.id : "placeholder";
            const url = (photo as PropertyPhoto | null)?.file_url;

            return (
              <Box
                key={`${key}-${idx}`}
                className="embla__slide"
                sx={emblaSlideStyles}
              >
                {url ? (
                  <Box
                    component="img"
                    src={url}
                    alt="Property photo"
                    sx={imageStyles}
                  />
                ) : (
                  <Box
                    role="img"
                    aria-label="Изображение недоступно"
                    sx={{
                      width: 1,
                      aspectRatio: "16 / 9",
                      borderRadius: 2,
                      bgcolor: "action.hover",
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: (theme) => `1px dashed ${theme.palette.divider}`,
                    }}
                  >
                    <MdPhoto size={48} />
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      <IconButton
        onClick={scrollPrev}
        sx={iconButtonPrevStyles}
        disabled={showPlaceholder || !canPrev}
        aria-label="Предыдущая фотография"
      >
        <FaChevronLeft size={16} />
      </IconButton>

      <IconButton
        onClick={scrollNext}
        sx={iconButtonNextStyles}
        disabled={showPlaceholder || !canNext}
        aria-label="Следующая фотография"
      >
        <FaChevronRight size={16} />
      </IconButton>

      <Box sx={counterStyles}>
        <Typography variant="caption">
          {showPlaceholder ? "0/0" : `${selectedIndex + 1}/${photos.length}`}
        </Typography>
      </Box>
    </Box>
  );
};
