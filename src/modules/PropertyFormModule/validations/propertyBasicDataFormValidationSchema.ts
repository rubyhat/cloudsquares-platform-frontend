import { z } from "zod";
import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";

const PRICE_MAX_VALUE = 999999999999;

export const createPropertyBasicDataFormSchema = (mode: PropertyFormMode) => {
  console.log("Validation form mode: ", mode); // temp
  return z.object({
    title: z.string().max(255).optional().or(z.literal("")),
    description: z.string().max(50000).optional().or(z.literal("")),
    price: z.number().min(0).max(PRICE_MAX_VALUE),
    discount: z.number().min(0).max(PRICE_MAX_VALUE),
    status: z.string().max(255),
    listing_type: z.string().max(255),
    category_id: z.uuid({ error: "Выберите категорию" }),
  });
};

export type PropertyBasicDataFormData = z.infer<
  ReturnType<typeof createPropertyBasicDataFormSchema>
>;
