export const calculateDiscountInPercent = (price: number, discount: number) => {
  return ((discount / price) * 100).toFixed(2);
};
