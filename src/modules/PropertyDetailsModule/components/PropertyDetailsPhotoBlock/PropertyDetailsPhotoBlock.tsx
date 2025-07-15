import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, IconButton, Typography } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

interface PropertyDetailsPhotoBlockProps {
  photos: PropertyPhoto[];
}

export const PropertyDetailsPhotoBlock = ({
  photos,
}: PropertyDetailsPhotoBlockProps) => {
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

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi],
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <Box sx={photoWrapperStyles}>
      <Box
        ref={emblaRef}
        className="embla"
        sx={{ overflow: "hidden", width: "100%" }}
      >
        <Box className="embla__container" sx={emblaContainerStyles}>
          {photos.map((photo) => (
            <Box key={photo.id} className="embla__slide" sx={emblaSlideStyles}>
              <Box
                component="img"
                src={photo.file_url}
                alt="Property photo"
                sx={imageStyles}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <IconButton onClick={scrollPrev} sx={iconButtonPrevStyles}>
        <FaChevronLeft size={16} />
      </IconButton>

      <IconButton onClick={scrollNext} sx={iconButtonNextStyles}>
        <FaChevronRight size={16} />
      </IconButton>

      <Box sx={counterStyles}>
        <Typography variant="caption">
          {photos.length === 0
            ? "0/0"
            : `${selectedIndex + 1}/${photos.length}`}
        </Typography>
      </Box>
    </Box>
  );
};
