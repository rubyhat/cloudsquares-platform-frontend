import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderLogotype = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      sx={{ display: { xs: "none", md: "flex" } }}
      component={Link}
      to="/"
    >
      LOGO
    </Typography>
  );
};
