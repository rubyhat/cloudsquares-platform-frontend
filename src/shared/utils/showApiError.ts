/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ApiErrorResponse } from "../interfaces";

/**
 * Показывает ошибки API-запроса в виде toast-сообщений.
 *
 * @param error Объект ошибки от axios запроса
 * @param label Префикс для ошибок, чтобы указать контекст (например, "Ошибка при создании профиля:")
 */
export const showApiError = (
  error: AxiosError<ApiErrorResponse, any>,
  label: string = "Произошла ошибка",
): void => {
  const details = error?.response?.data?.error?.details;
  const message = error?.response?.data?.error?.message;

  if (!details || typeof details !== "object") {
    toast.error(`${label}: ${message || "Неизвестная ошибка"}`);
    return;
  }

  const allMessages = Object.values(details)
    .flat()
    .filter((msg): msg is string => typeof msg === "string");

  if (allMessages.length > 0) {
    allMessages.forEach((msg) => toast.error(`${label}: ${msg}`));
  } else {
    toast.error(`${label}: ${message || "Неизвестная ошибка"}`, {
      duration: 5000,
    });
  }
};
