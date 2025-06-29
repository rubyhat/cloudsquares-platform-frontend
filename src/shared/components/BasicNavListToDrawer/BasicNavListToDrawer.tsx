import { Box, Paper } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import { basicNavListToDrawerListItemStyles } from "./styles";

export interface BasicNavListToDrawerItem {
  label: string;
  onClick: () => void;
}

interface BasicNavListToDrawerProps {
  list: BasicNavListToDrawerItem[];
}

export const BasicNavListToDrawer = ({ list }: BasicNavListToDrawerProps) => {
  return (
    <Box component={Paper} sx={{ py: 0.5 }}>
      <Box component="ul">
        {list.map(({ label, onClick }, i) => (
          <Box
            key={i}
            component="li"
            onClick={onClick}
            sx={basicNavListToDrawerListItemStyles(i === list.length - 1)}
          >
            {label}
            <Box
              sx={{ ml: "auto", mr: 1, display: "flex", alignItems: "center" }}
            >
              <FaAngleRight size={16} color="#1c1c1c" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
