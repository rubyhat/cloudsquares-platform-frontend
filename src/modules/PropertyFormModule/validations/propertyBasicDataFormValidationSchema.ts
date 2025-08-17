import { z } from "zod";
import { BasicDrawerMode } from "../../../shared/interfaces/Shared";

export const createPropertyBasicDataFormSchema = (mode: BasicDrawerMode) => {
  console.log("Validation form mode: ", mode); // temp
  return z.object({
    title: z.string().max(255).optional().or(z.literal("")),
    description: z.string().max(1000).optional().or(z.literal("")),
    price: z.number().min(0).max(999999999999),
    discount: z.number().min(0).max(999999999999),
    status: z.string().max(255),
    listing_type: z.string().max(255),
    category_id: z.uuid(),
  });
};

export type PropertyBasicDataFormData = z.infer<
  ReturnType<typeof createPropertyBasicDataFormSchema>
>;
