import { TableHead, TableRow } from "@mui/material";
import { CustomTableCell } from "../../../../shared/components/CustomTabCell";

/**
 * Заголовок таблицы База собственников.
 *
 * - Определяет структуру заголовков таблицы.
 * - Использует `CustomTableCell` для форматирования текста.
 *
 * @returns React-компонент заголовка таблицы.
 */
export const PropertyOwnersTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <CustomTableCell text="№" fw={600} />
        <CustomTableCell text="ФИО" fw={600} />
        <CustomTableCell text="Телефон" fw={600} />
        <CustomTableCell text="Почта" fw={600} />
        <CustomTableCell text="Роль" fw={600} />
        <CustomTableCell text="Комментарий" fw={600} />
        <CustomTableCell text="Количество объектов" fw={600} />
      </TableRow>
    </TableHead>
  );
};
