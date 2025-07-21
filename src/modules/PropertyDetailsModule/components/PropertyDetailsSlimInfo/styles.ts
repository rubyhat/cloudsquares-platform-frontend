import { SxProps, Theme } from "@mui/material";

export const contentStyles: SxProps<Theme> = {
  py: 0.75,
  px: 2,
  border: "1px solid",
  borderColor: "customColors.grey200",
  borderRadius: 2,
  display: "grid",
  gridTemplateColumns: { xs: "repeat(3, 1fr)", md: "repeat(8, 1fr)" },
  rowGap: { xs: 2, md: 0 },
};
