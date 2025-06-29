import { Link } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

import { FaHome } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5";

import {
  profileFavoritesLinkItemStyles,
  profileFavoritesLinksStyles,
} from "./styles";

export const ProfileFavoritesLinks = () => {
  return (
    <Box sx={profileFavoritesLinksStyles}>
      <Box component={Paper} sx={profileFavoritesLinkItemStyles}>
        <Box component={Link} to="/orders">
          <FaHome size={20} color="#1c1c1c" />
          <Typography
            component="p"
            variant="body2"
            color="customColors.labelsPrimary"
          >
            Недвижимость
          </Typography>
        </Box>
      </Box>
      <Box component={Paper} sx={profileFavoritesLinkItemStyles}>
        <Box component={Link} to="/seller">
          <IoDocuments size={20} color="#1c1c1c" />
          <Typography
            component="p"
            variant="body2"
            color="customColors.labelsPrimary"
          >
            Заявки
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
