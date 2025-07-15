import { SxProps, Theme } from "@mui/material";

export const discountWrapperStyles = (hasDiscount: boolean): SxProps<Theme> => {
  return {
    display: hasDiscount ? "flex" : "none",
    alignItems: "center",
    gap: 1,
  };
};
