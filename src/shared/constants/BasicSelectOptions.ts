import { CountryCode, CountryCodeDisplayText } from "../interfaces/Country";
import { ListingType, ListingTypeText } from "../interfaces/Property";
import { UserRole, UserRoleDisplayText } from "../permissions/roles";

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

export const userRoleSelectOptions = (): {
  value: UserRole;
  label: UserRoleDisplayText;
}[] => {
  const userRoleList = [
    {
      value: UserRole.agent_manager,
      label: UserRoleDisplayText[UserRole.agent_manager],
    },
    {
      value: UserRole.agent,
      label: UserRoleDisplayText[UserRole.agent],
    },
  ];

  return userRoleList;
};

export const propertyListingTypeSelectOptions = () => {
  const listingTypeList = [
    { value: ListingType.sale, label: ListingTypeText.sale },
    { value: ListingType.rent, label: ListingTypeText.rent },
  ];

  return listingTypeList;
};
