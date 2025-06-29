import { GlobalStyles } from "@mui/material";

/**
 * Фиксим мелкий шрифт на странице логина в инпутах, когда браузер сам заполняет данные
 */
export const GlobalAutofillFix = () => (
  <GlobalStyles
    styles={{
      "@keyframes autofillFix": {
        "0%,100%": {
          fontSize: "1rem",
          fontFamily: "inherit",
          background: "#fff",
          color: "#000",
        },
      },
      "input:-webkit-autofill": {
        animationName: "autofillFix",
        animationDuration: "0.01s",
        animationFillMode: "both",
      },
    }}
  />
);
