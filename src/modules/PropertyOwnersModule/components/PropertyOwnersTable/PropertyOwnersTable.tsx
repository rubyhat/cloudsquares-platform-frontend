import React from "react";
import { useTablePagination } from "../../../../shared/hooks";
import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { PropertyOwnersTableHeader } from "../PropertyOwnersTableHeader";
import { PropertyOwnersTableBodyItem } from "../PropertyOwnersTableBodyItem";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";
import { useGetAllPropertyOwnersQuery } from "../../hooks";

export const PropertyOwnersTable = () => {
  const { page, rowsPerPage, setPage, setRowsPerPage } = useTablePagination(
    15,
    "allPropertiesTable",
  );

  const {
    data: owners,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetAllPropertyOwnersQuery({
    per_page: rowsPerPage,
    page: page + 1,
  });

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
  };
  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
        <Table sx={{ minWidth: 650 }} aria-label="Таблица SOS-заявок">
          <PropertyOwnersTableHeader />

          <TableBody>
            {isSuccess &&
              owners.data.map((owner, index) => (
                <PropertyOwnersTableBodyItem
                  key={owner.id}
                  owner={owner}
                  number={index + 1}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isError && error && <AxiosErrorAlertMessage error={error} />}
      {isLoading && (
        <Box sx={{ width: 1, backgroundColor: "#fff", p: 4 }}>
          <CircularProgress size={24} color="primary" />
        </Box>
      )}
      {owners && owners.data.length === 0 && (
        <Alert severity="warning">
          По заданным фильтрам заявок не найдено.
        </Alert>
      )}
      <Box component={Paper}>
        <TablePagination
          rowsPerPageOptions={[5, 15, 30]}
          component="div"
          count={(owners?.pages || 1) * rowsPerPage}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Заявок на странице"
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </React.Fragment>
  );
};
