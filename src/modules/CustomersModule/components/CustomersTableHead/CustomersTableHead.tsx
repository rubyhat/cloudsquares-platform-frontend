import { TableCell, TableHead, TableRow } from "@mui/material";
import { useListTableHeaderColumns } from "../../hooks";

export const CustomersTableHead = () => {
  const headColumns = useListTableHeaderColumns();
  return (
    <TableHead>
      <TableRow>
        {headColumns.map((column, index) => (
          <TableCell key={index}>{column}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
