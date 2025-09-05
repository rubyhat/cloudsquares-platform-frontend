import { Box, CircularProgress } from "@mui/material";

/**
 * Fallback на время загрузки ленивых страниц (общий для всех роутов).
 */
export const RoutesFallback: React.FC = () => (
  <Box
    sx={{
      height: "100vh",
      display: "grid",
      placeItems: "center",
    }}
  >
    <CircularProgress />
  </Box>
);
