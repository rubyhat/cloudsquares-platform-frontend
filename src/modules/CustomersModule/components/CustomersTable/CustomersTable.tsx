import React from "react";
import {
  Box,
  Paper,
  Table,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { Customer } from "../../../../shared/interfaces/Customer";
import { tablePaginationSlotPropsStyles } from "../../../../shared/styles";
import { CustomersTableHead } from "../CustomersTableHead";
import { CustomersTableBody } from "../CustomersTableBody";

interface CustomersTableProps {
  data: Customer[];
  page: number;
  rowsPerPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
}

export const CustomersTable = ({
  data,
  page,
  rowsPerPage,
  totalPages,
  onPageChange,
  onRowsPerPageChange,
}: CustomersTableProps) => {
  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    onPageChange(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    onRowsPerPageChange(newRowsPerPage);
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table>
          <CustomersTableHead />
          <CustomersTableBody data={data} />
        </Table>
      </TableContainer>
      <Box component={Paper} mt={1.5}>
        <TablePagination
          rowsPerPageOptions={[5, 15, 30]}
          component="div"
          count={totalPages * rowsPerPage}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage=""
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          slotProps={tablePaginationSlotPropsStyles}
        />
      </Box>
    </React.Fragment>
  );
};
