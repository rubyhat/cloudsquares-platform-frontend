import { SxProps, Theme } from "@mui/material";

export const photoWrapperStyles: SxProps<Theme> = {
  display: "block",
  position: "relative",
  overflow: "hidden",
  // aspectRatio: { xs: "4 / 3", md: "3 / 2" },
  maxHeight: "34.625rem",
  width: "100%",
};

export const emblaContainerStyles = {
  display: "flex",
  touchAction: "pan-y pinch-zoom",
  marginLeft: "calc(var(--slide-spacing) * -1)",
  gap: 2,
};

export const emblaSlideStyles = {
  transform: "translate3d(0, 0, 0)",
  flex: { xs: "0 0 100%", md: "0 0 80%" }, // показываем 80% ширины — остальное будет peek следующего слайда
  borderRadius: 2,
};

export const imageStyles = {
  width: "100%",
  display: "block",
  borderRadius: 2,
  height: "30rem",
  objectFit: "cover",
  objectPosition: "center",
};

const iconButtonStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 32,
  height: 32,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  zIndex: 2,
  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
};

export const iconButtonPrevStyles = {
  ...iconButtonStyles,
  left: 8,
};

export const iconButtonNextStyles = {
  ...iconButtonStyles,
  right: 8,
};

export const counterStyles = {
  position: "absolute",
  bottom: 8,
  left: 8,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "#fff",
  px: 1,
  py: 0.5,
  borderRadius: 1,
  fontSize: "12px",
};
