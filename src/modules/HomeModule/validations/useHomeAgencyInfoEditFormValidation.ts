import { z } from "zod";

export const useHomeAgencyInfoEditFormValidationSchema = z.object({
  title: z
    .string()
    .max(255, { message: "Слишком длинное значение" })
    .optional()
    .or(z.literal("")),
});

export type AgencyInfoFormData = z.infer<
  typeof useHomeAgencyInfoEditFormValidationSchema
>;
