import { Box, CircularProgress } from "@mui/material";

export const AxiosLoadingCircularProgress = () => {
  return (
    <Box p={2}>
      <CircularProgress color="primary" size={24} />
    </Box>
  );
};
