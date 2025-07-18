import { Box } from "@mui/material";
import toast from "react-hot-toast";

import { SearchInputForm } from "../../../../shared/components/SearchInputForm";

export const PropertiesSearchWrapper = () => {
  const sendRequest = () => {
    toast.error("Поиск в разработке");
  };
  return (
    <Box sx={{ width: 1 }}>
      <SearchInputForm sendRequest={sendRequest} />
    </Box>
  );
};
