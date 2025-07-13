import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import {
  Customer,
  ServiceTypeDisplayText,
} from "../../../../shared/interfaces/Customer";
import { displayUserName } from "../../../../shared/utils";

interface CustomersTableBodyProps {
  data: Customer[];
}

export const CustomersTableBody = ({ data }: CustomersTableBodyProps) => {
  const { t } = useTranslation();

  const renderUserName = (user: Customer) => {
    const { first_name, last_name, middle_name } = user;
    return displayUserName({ first_name, last_name, middle_name }).shortName;
  };

  const handleClickButton = () => {
    toast.error("Показать модалку со списком объектов недвижимости");
  };

  return (
    <TableBody>
      {data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{renderUserName(item)}</TableCell>
          <TableCell>{item.phone}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{ServiceTypeDisplayText[item.service_type]}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              size="small"
              onClick={handleClickButton}
            >
              {t("customers.table.body.show_relations")}
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
