export const chipStyles = (isPassedOrCurrent: boolean) => {
  return {
    flex: 1,
    height: 6,
    backgroundColor: isPassedOrCurrent
      ? "customColors.primary"
      : "customColors.grey300",
    borderRadius: 2,
    transition: "background-color 160ms ease",
  };
};
