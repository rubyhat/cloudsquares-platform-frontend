import { createTheme } from "@mui/material/styles";
import { ruRU } from "@mui/material/locale";

const createTextStyles = (
  fontSize: string,
  lineHeight: string,
  fontWeight: number,
) => {
  return {
    fontSize,
    lineHeight,
    fontWeight,
  };
};

export const customTheme = createTheme(
  {
    components: {
      MuiButton: {
        styleOverrides: {
          sizeSmall: {
            padding: "4px 10px",
            fontSize: "14px",
            lineHeight: "16px",
            textTransform: "none",
            borderRadius: 8,
          },
          sizeMedium: {
            padding: "6px 16px",
            fontSize: "16px",
            lineHeight: "20px",
            textTransform: "none",
            borderRadius: 8,
          },
          sizeLarge: {
            padding: "8px 22px",
            fontSize: "18px",
            lineHeight: "24px",
            textTransform: "none",
            borderRadius: 8,
          },
        },
      },
    },
    typography: {
      fontFamily: `"Inter", "SF Pro", "SF Pro Display", "Helvetica", "Inter", "Roboto", sans-serif`,
      h1: createTextStyles("48px", "58px", 600),
      h2: createTextStyles("40px", "48px", 600),
      h3: createTextStyles("32px", "38px", 600),
      h4: createTextStyles("28px", "34px", 600),
      h5: createTextStyles("24px", "28px", 600),
      h6: createTextStyles("20px", "24px", 600),
      subtitle1: createTextStyles("18px", "28px", 600),
      subtitle2: createTextStyles("16px", "24px", 600),
      body1: createTextStyles("16px", "24px", 400),
      body2: createTextStyles("16px", "24px", 500),
      body3: createTextStyles("14px", "20px", 400),
      body4: createTextStyles("14px", "20px", 500),
      caption1: createTextStyles("12px", "16px", 400),
      caption2: createTextStyles("12px", "16px", 500),
      caption3: createTextStyles("10px", "14px", 500),
    },
    palette: {
      primary: {
        main: "#252525",
        contrastText: "#f8f8f8",
      },

      secondary: {
        main: "#f8f8f8",
        contrastText: "#252525",
      },

      customColors: {
        colorsWhite: "#f8f8f8",
        colorsWhiteDark: "#EDEDED",
        colorsGrey: "#848484",
        colorsGreyLight: "hsla(240, 6%, 25%, 0.18)",
        colorsGreyDark: "#454C58",
        colorsBlue: "#031930",

        colorsAccent: "#1c1c1c",
        colorsAccentActive: "#AA80FF",
        colorsAccentHover: "#9561FF",

        colorsAccentDark: "#6239B3",
        colorsAccentActiveDark: "#7E50DA",
        colorsAccentHoverDark: "#4D19B4",

        colorsAccentLight: "#8C52FF",
        colorsAccentActiveLight: "#AA80FF",
        colorsAccentHoverLight: "#7530FF",

        colorsAccentSecondary: "#BFB7D0",

        colorsSuccess: "#008000",
        colorsError: "#FF0000",

        labelsPrimary: "#1C1C1C",
        labelsSecondary: "hsla(240, 6%, 25%, 0.6)",
        labelsTertiary: "hsla(240, 6%, 25%, 0.3)",
        labelsQuaternary: "hsla(240, 6%, 25%, 0.18)",
      },
    },
  },
  ruRU,
);
