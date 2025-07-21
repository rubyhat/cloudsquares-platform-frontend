import { Box, Grid, Skeleton } from "@mui/material";

export const UsersListSkeleton = () => {
  return (
    <Grid size={12}>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton key={item} variant="rounded" width="100%" height={150} />
        ))}
      </Box>
    </Grid>
  );
};
