export const formatPrice = (
  price: number,
  options: Intl.NumberFormatOptions = {},
) => {
  return new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  }).format(price);
};

export const calculatePricePerMeter = (price: number, square: number) => {
  const raw = price / square;
  return formatPrice(raw);
};
