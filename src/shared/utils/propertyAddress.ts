import { Property } from "../interfaces/Property";

export const propertyAddress = ({ property_location }: Property) => {
  const { city, street, house_number } = property_location;
  const shortAddress = [city, street, house_number].join(", ");
  const fullAddress = [city, street, house_number].join(", ");

  return { shortAddress, fullAddress };
};
