import { Typography } from "@mui/material";
import { CountryCode, CountryCodeDisplayFlag } from "../../interfaces/Country";

interface DisplayCountryFlagProps {
  country_code: CountryCode;
}

export const DisplayCountryFlag = ({
  country_code,
}: DisplayCountryFlagProps) => {
  return (
    <Typography component="span">
      {CountryCodeDisplayFlag[country_code]}
    </Typography>
  );
};
