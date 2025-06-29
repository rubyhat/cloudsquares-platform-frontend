import { CountryCode, CountryCodeDisplayText } from "../interfaces/Country";

export const countrySelectOptions = (): {
  value: CountryCode;
  label: CountryCodeDisplayText;
}[] => {
  const countryList = [
    {
      value: CountryCode.KZ,
      label: CountryCodeDisplayText[CountryCode.KZ],
    },
    {
      value: CountryCode.RU,
      label: CountryCodeDisplayText[CountryCode.RU],
    },
  ];

  return countryList;
};
