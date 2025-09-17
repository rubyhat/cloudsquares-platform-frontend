import { axiosBaseWrap } from "@/configs/api";
import { Property } from "@/shared/interfaces/Property";
import { PropertyBasicDataFormData } from "../validations";

export const apiPropertyFormModule = {
  createProperty(data: PropertyBasicDataFormData): Promise<Property> {
    return axiosBaseWrap
      .post("/properties", { property: data })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  patchProperty(
    id: string,
    data: PropertyBasicDataFormData,
  ): Promise<Property> {
    return axiosBaseWrap
      .patch("/properties/" + id, { property: data })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};
