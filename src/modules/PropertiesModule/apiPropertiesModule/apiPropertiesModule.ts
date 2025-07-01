import { axiosBaseWrap } from "../../../configs/api";
import { Property } from "../../../shared/interfaces/Property";

export const apiPropertiesModule = {
  /**
   * Запрос на получение всех объектов недвижимости текущего агентства недвижимости.
   * TODO: убрать айди из параметров, бекенд должен определять по токну авторизации
   * @returns
   */
  getAllPropertiesOfAgency(agency_id: string): Promise<Property[]> {
    return axiosBaseWrap
      .get("/properties?agency_id=" + agency_id)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
