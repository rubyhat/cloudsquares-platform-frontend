import { axiosBaseWrap } from "@/configs/api";
import { PropertyOwner } from "../interfaces/PropertyOwner";

export const apiSharedPropertyOwners = {
  getAllPropertyOwnersByPropertyID(
    property_id: string,
    page?: number,
    per_page?: number,
  ): Promise<{ data: PropertyOwner[]; page: number; total: number }> {
    return axiosBaseWrap
      .get(
        `/properties/${property_id}/owners?page=${page || 1}&per_page=${per_page || 20}`,
      )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};
