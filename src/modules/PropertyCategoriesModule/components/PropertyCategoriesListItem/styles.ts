import { SxProps, Theme } from "@mui/material";

export const cardStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  backgroundColor: "#fff",
  border: "1px solid",
  borderColor: "customColors.grey300",
  borderRadius: 2,
  p: { xs: 1, md: 2 },
};
