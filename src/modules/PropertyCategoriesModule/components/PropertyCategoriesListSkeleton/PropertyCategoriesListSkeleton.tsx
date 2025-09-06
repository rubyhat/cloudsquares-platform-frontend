import { Box, Skeleton } from "@mui/material";
import { cardStyles } from "../PropertyCategoriesListItem/styles";

export const PropertyCategoriesListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Box sx={cardStyles} key={index}>
          <Skeleton variant="rounded" width={48} height={48} />
          <Box flexGrow={1} gap={1} display="flex" flexDirection="column">
            <Skeleton variant="rounded" width={200} height={20} />
            <Skeleton variant="rounded" width={100} height={20} />
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Skeleton variant="rounded" width={24} height={24} />
            <Skeleton variant="rounded" width={24} height={24} />
          </Box>
        </Box>
      ))}
    </>
  );
};
