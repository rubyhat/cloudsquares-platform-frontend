import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderLogotype = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{ color: "#252525" }}
    >
      CloudSquares
    </Typography>
  );
};
