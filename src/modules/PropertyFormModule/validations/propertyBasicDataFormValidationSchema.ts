import { z } from "zod";
import { BasicDrawerMode } from "../../../shared/interfaces/Shared";

const PRICE_MAX_VALUE = 999999999999;

export const createPropertyBasicDataFormSchema = (mode: BasicDrawerMode) => {
  console.log("Validation form mode: ", mode); // temp
  return z.object({
    title: z.string().max(255).optional().or(z.literal("")),
    description: z.string().max(1000000).optional().or(z.literal("")),
    price: z.number().min(0).max(PRICE_MAX_VALUE),
    discount: z.number().min(0).max(PRICE_MAX_VALUE),
    status: z.string().max(255),
    listing_type: z.string().max(255),
    category_id: z.uuid(),
  });
};

export type PropertyBasicDataFormData = z.infer<
  ReturnType<typeof createPropertyBasicDataFormSchema>
>;
