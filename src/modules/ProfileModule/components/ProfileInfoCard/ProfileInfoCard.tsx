import { Box, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

import {
  profileInfoCardAvatarStyles,
  profileInfoCardStyles,
  profileInfoCardWrapperStyles,
} from "./styles";
import { useUserProfile } from "../../../../shared/permissions/hooks";
import { displayUserName } from "../../../../shared/utils";

export const ProfileInfoCard = () => {
  const profile = useUserProfile();

  if (profile) {
    const { first_name, last_name, middle_name } = profile;
    const { shortName } = displayUserName({
      first_name,
      last_name,
      middle_name,
    });

    return (
      <Box component={Paper} sx={profileInfoCardWrapperStyles}>
        <Box component={Link} to="/profile/details" sx={profileInfoCardStyles}>
          <Box sx={profileInfoCardAvatarStyles}>М</Box>
          <Box>
            <Typography
              component="h6"
              variant="body2"
              fontWeight={700}
              color="customColors.labelsPrimary"
            >
              {shortName}
            </Typography>
            <Typography
              component="p"
              variant="caption"
              color="customColors.labelsPrimary"
            >
              Просмотр профиля
            </Typography>
          </Box>
          <IconButton sx={{ ml: "auto" }}>
            <IoMdSettings color="#1c1c1c" />
          </IconButton>
        </Box>
      </Box>
    );
  }

  return <Skeleton variant="rounded" width="100%" height={72} />;
};
