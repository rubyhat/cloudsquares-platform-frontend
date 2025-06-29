// Красим рамку селекта в красный при ошибках в формах
export const formControlStyles = (errors: boolean) => {
  return {
    width: 1,
    "& .MuiInputBase-root": {
      "&::before": {
        borderBottom: errors
          ? "1px solid tomato"
          : "1px solid rgba(0, 0, 0, 0.23)",
      },
    },
  };
};

export const buttonsWrapperInsideBasicDrawerStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 2,
};
