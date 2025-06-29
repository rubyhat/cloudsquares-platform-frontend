import { Box, Paper, Typography } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { basicNavListToPageListItemStyles, iconWrapperStyles } from "./styles";

export interface BasicNavListToPageItem {
  label: string;
  link: string;
}

interface BasicNavListToPageProps {
  list: BasicNavListToPageItem[];
}

export const BasicNavListToPage = ({ list }: BasicNavListToPageProps) => {
  return (
    <Box component={Paper} sx={{ py: 0.5 }}>
      <Box component="ul">
        {list.map(({ label, link }, i) => (
          <Box key={i} component={Link} to={link}>
            <Box
              component="li"
              sx={basicNavListToPageListItemStyles(i === list.length - 1)}
            >
              <Typography
                component="p"
                variant="body1"
                color="customColors.labelsPrimary"
              >
                {label}
              </Typography>
              <Box sx={iconWrapperStyles}>
                <FaAngleRight size={16} color="#1c1c1c" />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
