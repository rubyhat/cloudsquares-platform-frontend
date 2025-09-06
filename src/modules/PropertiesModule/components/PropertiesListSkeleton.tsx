import { MdPhoto } from "react-icons/md";
import { Box, Skeleton } from "@mui/material";
import {
  cardStyles,
  contentStyles,
  imageThumbnailStyles,
} from "./PropertiesListItem/styles";

export const PropertiesListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 7 }).map((_, index) => (
        <Box sx={cardStyles} width={1} key={index}>
          <Box sx={imageThumbnailStyles}>
            <MdPhoto size={64} />
          </Box>
          <Box sx={contentStyles}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Skeleton variant="rounded" width="50%" height={30} />
              <Skeleton variant="rounded" width="60%" height={30} />
              <Skeleton variant="rounded" width="40%" height={30} />
              <Skeleton variant="rounded" width="50%" height={90} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "flex-end",
              }}
            >
              <Skeleton variant="rounded" width="80%" height={30} />
              <Skeleton variant="rounded" width="100%" height={30} />
              <Skeleton variant="rounded" width="60%" height={30} />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
