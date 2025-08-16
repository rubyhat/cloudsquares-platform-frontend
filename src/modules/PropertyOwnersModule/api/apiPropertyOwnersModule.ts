import { axiosBaseWrap } from "../../../configs/api";
import { SortDirection, SortingTypes } from "../../../shared/interfaces/Basic";
import {
  AllPropertyOwnersResponseData,
  PropertyOwnerRole,
} from "../../../shared/interfaces/PropertyOwner";

export type PropertyOwnersAllowedSort = "phone" | "role";

export interface GetAllPropertyOwnersProps {
  /** Количество заявок на странице */
  per_page: number;

  /** Номер страницы */
  page: number;

  /** (Необязательно) Фильтр по номеру телефона */
  phone?: string;

  /** (Необязательно) Фильтр по роли пользователя */
  role?: PropertyOwnerRole;

  /** (Необязательно) Поле для сортировки */
  sort_by?: SortingTypes & PropertyOwnersAllowedSort;

  /** (Необязательно) Тип сортировки */
  sort_dir?: SortDirection;
}

export const apiPropertyOwnersModule = {
  /**
   * Получает список всех собственников недвижимости с возможностью фильтрации.
   *
   * @param {GetAllPropertyOwnersProps} params Параметры запроса для фильтрации и пагинации.
   * @returns {Promise<AllPropertyOwnersResponseData>} Промис с данными списка SOS-заявок.
   */
  getAllPropertyOwners({
    page,
    per_page,
  }: GetAllPropertyOwnersProps): Promise<AllPropertyOwnersResponseData> {
    const params = `?page=${page}&per_page=${per_page}`;
    return axiosBaseWrap
      .get(`/property_owners` + params)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
