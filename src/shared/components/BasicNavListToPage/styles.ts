export const basicNavListToPageListItemStyles = (isLast: boolean) => {
  return {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    p: 2,
    borderBottom: isLast ? "none" : "1px solid #e9e9e9",
  };
};

export const iconWrapperStyles = {
  ml: "auto",
  mr: 1,
  display: "flex",
  alignItems: "center",
};
