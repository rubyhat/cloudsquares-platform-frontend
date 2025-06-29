import { z } from "zod";

/**
 * Регулярное выражение для проверки номера телефона:
 * - начинается с +7
 * - допускает 10 цифр после +7 (всего 12 символов)
 * - без пробелов, дефисов и скобок
 */
const phoneRegex = /^\+7\d{10}$/;

export const userProfileFormValidationSchema = z.object({
  phone: z
    .string()
    .regex(phoneRegex, {
      message: "Телефон должен начинаться с +7 и содержать 10 цифр",
    })
    .max(12, { message: "Слишком длинный номер телефона" }),

  first_name: z
    .string()
    .max(255, { message: "Слишком длинное значение" })
    .optional()
    .or(z.literal("")),

  last_name: z
    .string()
    .max(255, { message: "Слишком длинное значение" })
    .optional()
    .or(z.literal("")),

  middle_name: z
    .string()
    .max(255, { message: "Слишком длинное значение" })
    .optional()
    .or(z.literal("")),

  email: z
    .string()
    .max(255, { message: "Слишком длинное значение" })
    .email({ message: "Некорректный формат email" }),
});

export type UserProfileFormData = z.infer<
  typeof userProfileFormValidationSchema
>;
