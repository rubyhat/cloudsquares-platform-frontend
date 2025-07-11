import { Box } from "@mui/material";
import { CustomersModule } from "../../modules/CustomersModule";

export const Customers = () => {
  return (
    <Box component="section" data-testid="pageCustomers">
      <CustomersModule />
    </Box>
  );
};
