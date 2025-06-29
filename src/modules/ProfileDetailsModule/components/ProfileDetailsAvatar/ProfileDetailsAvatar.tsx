import {
  Box,
  Chip,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import { FaUserAlt } from "react-icons/fa";

import { useUserProfile } from "../../../../shared/permissions/hooks";

import {
  profileDetailsAvatarImgWrapperStyles,
  profileDetailsAvatarStyles,
} from "./styles";
import { DisplayCountryFlag } from "../../../../shared/components/DisplayCountryFlag";
import { CountryCodeDisplayText } from "../../../../shared/interfaces/Country";
import { displayUserName } from "../../../../shared/utils";
import {
  UserRoleColor,
  UserRoleDisplayText,
} from "../../../../shared/permissions/roles";

export const ProfileDetailsAvatar = () => {
  const profile = useUserProfile();

  if (profile) {
    const { first_name, last_name, middle_name } = profile;
    const { shortName } = displayUserName({
      first_name,
      last_name,
      middle_name,
    });
    return (
      <Box sx={profileDetailsAvatarStyles}>
        <Box sx={profileDetailsAvatarImgWrapperStyles}>
          <FaUserAlt size={64} color="#aaa" />
        </Box>
        <Typography component="p" variant="body1">
          {shortName}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography component="p" variant="body1">
            +{profile.phone || "-"}
          </Typography>
          <Tooltip title={CountryCodeDisplayText[profile.country_code]}>
            <Box>
              <DisplayCountryFlag country_code={profile.country_code} />
            </Box>
          </Tooltip>
        </Box>
        <Chip
          size="small"
          variant="filled"
          color={UserRoleColor[profile.role]}
          label={UserRoleDisplayText[profile.role]}
        />
      </Box>
    );
  }
  return (
    <Box p={2}>
      <CircularProgress size={24} color="primary" />
    </Box>
  );
};
