import { Box, Typography } from "@mui/material";
import { PropertyDetailsInfoItem } from "../../../../shared/interfaces/PropertyDetails";
import { dividerStyles } from "./styles";

interface PropertyDetailsInfoListProps {
  data: PropertyDetailsInfoItem[];
}

export const PropertyDetailsInfoList = ({
  data,
}: PropertyDetailsInfoListProps) => {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      {data.map(({ label, value }, index) => (
        <Box
          component="li"
          key={index}
          sx={{ width: 1, display: "flex", alignItems: "flex-end", gap: 0.5 }}
        >
          <Typography component="p" variant="body1" whiteSpace="nowrap">
            {label}
          </Typography>
          <Box sx={dividerStyles} />
          <Typography component="p" variant="body1" whiteSpace="nowrap">
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
