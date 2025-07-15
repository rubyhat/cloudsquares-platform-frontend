import { SxProps, Theme } from "@mui/material";

export const cardStyles: SxProps<Theme> = {
  p: 2,
  borderRadius: 4,
  display: "grid",
  border: "1px solid",
  gridTemplateColumns: { xs: "1fr", lg: "1fr 2fr" },
  borderColor: "customColors.grey300",
};

export const contentStyles = {
  p: 2,
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "3fr 1fr", md: "2fr 1fr" },
};

export const cardButtonWrapperStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1.25fr 1fr" },
  alignItems: "flex-end",
  gap: 2,
  width: 1,
  flexGrow: 1,
};

export const priceInfoWrapperStyles = {
  display: { xs: "none", sm: "flex" },
  justifyContent: "flex-end",
};
