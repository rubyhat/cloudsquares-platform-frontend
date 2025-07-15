import { SxProps, Theme } from "@mui/material";

export const headerStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
  alignItems: "center",
  pt: { xs: 2, lg: 0 },
};

export const wrapperStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 2,
};
