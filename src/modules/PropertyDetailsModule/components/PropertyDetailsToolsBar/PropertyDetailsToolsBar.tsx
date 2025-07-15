import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PropertyDetailsPropertySettings } from "../PropertyDetailsPropertySettings";

export const PropertyDetailsToolsBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ py: 1, display: "flex", alignItems: "center", gap: 2 }}>
      <Button
        variant="contained"
        size="medium"
        onClick={() => navigate("/requests/buy/id")}
      >
        Заявки на покупку
      </Button>
      <PropertyDetailsPropertySettings />
    </Box>
  );
};
