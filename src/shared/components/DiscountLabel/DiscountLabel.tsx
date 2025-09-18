import { Box, Typography } from "@mui/material";
import { calculateDiscountInPercent } from "../../utils";
import { discountWrapperStyles } from "./styles";

interface DiscountLabelProps {
  price: number;
  discount: number;
}

export const DiscountLabel = ({ price, discount }: DiscountLabelProps) => {
  return (
    <Box sx={discountWrapperStyles(!!discount)}>
      <Typography
        component="p"
        variant="subtitle1"
        color="customColors.success"
      >
        -{calculateDiscountInPercent(price, discount)}%
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        color="customColors.grey400"
        sx={{ textDecoration: "line-through" }}
      >
        {price.toLocaleString("ru")} ₽
      </Typography>
    </Box>
  );
};
