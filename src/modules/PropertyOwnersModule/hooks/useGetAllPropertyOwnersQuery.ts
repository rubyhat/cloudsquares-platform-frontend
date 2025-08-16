import { useAxiosQuery } from "../../../configs/useAxiosQuery";
import { apiPropertyOwnersModule } from "../api";

/**
 * Параметры запроса для получения списка всех собственников.
 */
interface GetAllPropertyOwnersQueryParams {
  /** Количество собственников, которые нужно получить */
  per_page: number;

  /** Смещение (page) для пагинации */
  page: number;
}

export const useGetAllPropertyOwnersQuery = ({
  per_page,
  page,
}: GetAllPropertyOwnersQueryParams) => {
  return useAxiosQuery({
    queryFn: () =>
      apiPropertyOwnersModule.getAllPropertyOwners({ page, per_page }),
    queryKey: ["get-all-property-owners", page, per_page],
  });
};
