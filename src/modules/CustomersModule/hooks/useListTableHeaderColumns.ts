import { useTranslation } from "react-i18next";

export const useListTableHeaderColumns = () => {
  const { t } = useTranslation();
  const headColumns = [
    t("customers.table.head.id"),
    t("customers.table.head.fio"),
    t("customers.table.head.phone"),
    t("customers.table.head.email"),
    t("customers.table.head.service_type"),
    t("customers.table.head.comment"),
    t("customers.table.head.relations"),
  ];
  return headColumns;
};
