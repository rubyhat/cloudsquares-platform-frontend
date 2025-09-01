import {
  CountryCode,
  CountryCodeCurrencySymbol,
} from "@/shared/interfaces/Country";

export const getCurrencySymbol = (code?: CountryCode | null) => {
  if (!code) return "₸";
  return CountryCodeCurrencySymbol[code] ?? "₸";
};
