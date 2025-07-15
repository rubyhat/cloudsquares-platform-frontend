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
    // typography: {
    //   fontFamily: `"Inter", "SF Pro", "SF Pro Display", "Helvetica", "Inter", "Roboto", sans-serif`,
    //   h1: createTextStyles("48px", "58px", 600),
    //   h2: createTextStyles("40px", "48px", 600),
    //   h3: createTextStyles("32px", "38px", 600),
    //   h4: createTextStyles("28px", "34px", 600),
    //   h5: createTextStyles("24px", "28px", 600),
    //   h6: createTextStyles("20px", "24px", 600),
    //   subtitle1: createTextStyles("18px", "28px", 600),
    //   subtitle2: createTextStyles("16px", "24px", 600),
    //   body1: createTextStyles("16px", "24px", 400),
    //   body2: createTextStyles("16px", "24px", 500),
    //   body3: createTextStyles("14px", "20px", 400),
    //   body4: createTextStyles("14px", "20px", 500),
    //   caption1: createTextStyles("12px", "16px", 400),
    //   caption2: createTextStyles("12px", "16px", 500),
    //   caption3: createTextStyles("10px", "14px", 500),
    // },
    typography: {
      fontFamily: `"Inter", "SF Pro", "SF Pro Display", "Helvetica", "Roboto", sans-serif`,
      h1: createTextStyles(
        "clamp(2.5rem, 5vw, 3rem)",
        "clamp(3rem, 6vw, 3.625rem)",
        600,
      ),
      h2: createTextStyles(
        "clamp(2rem, 4vw, 2.5rem)",
        "clamp(2.5rem, 5vw, 3rem)",
        600,
      ),
      h3: createTextStyles(
        "clamp(1.75rem, 3vw, 2rem)",
        "clamp(2.125rem, 4vw, 2.375rem)",
        600,
      ),
      h4: createTextStyles(
        "clamp(1.5rem, 2.5vw, 1.75rem)",
        "clamp(2rem, 3vw, 2.125rem)",
        600,
      ),
      h5: createTextStyles(
        "clamp(1.25rem, 2vw, 1.5rem)",
        "clamp(1.75rem, 2.5vw, 1.875rem)",
        600,
      ),
      h6: createTextStyles(
        "clamp(1.125rem, 1.5vw, 1.25rem)",
        "clamp(1.5rem, 2vw, 1.625rem)",
        600,
      ),
      subtitle1: createTextStyles(
        "clamp(1rem, 1.5vw, 1.125rem)",
        "clamp(1.5rem, 2vw, 1.75rem)",
        600,
      ),
      subtitle2: createTextStyles(
        "clamp(0.875rem, 1.25vw, 1rem)",
        "clamp(1.25rem, 1.75vw, 1.5rem)",
        600,
      ),
      body1: createTextStyles(
        "clamp(1rem, 1.25vw, 1.125rem)",
        "clamp(1.5rem, 2vw, 1.75rem)",
        400,
      ),
      body2: createTextStyles(
        "clamp(1rem, 1.25vw, 1.125rem)",
        "clamp(1.5rem, 2vw, 1.75rem)",
        500,
      ),
      body3: createTextStyles(
        "clamp(0.875rem, 1vw, 1rem)",
        "clamp(1.25rem, 1.5vw, 1.5rem)",
        400,
      ),
      body4: createTextStyles(
        "clamp(0.875rem, 1vw, 1rem)",
        "clamp(1.25rem, 1.5vw, 1.5rem)",
        500,
      ),
      caption1: createTextStyles(
        "clamp(0.75rem, 0.9vw, 0.875rem)",
        "clamp(1rem, 1.25vw, 1.125rem)",
        400,
      ),
      caption2: createTextStyles(
        "clamp(0.75rem, 0.9vw, 0.875rem)",
        "clamp(1rem, 1.25vw, 1.125rem)",
        500,
      ),
      caption3: createTextStyles(
        "clamp(0.625rem, 0.75vw, 0.75rem)",
        "clamp(0.875rem, 1vw, 1rem)",
        500,
      ),
    },
    palette: {
      primary: {
        main: "#262626",
        contrastText: "#f8f8f8",
      },

      secondary: {
        main: "#f8f8f8",
        contrastText: "#252525",
      },

      customColors: {
        primary: "#262626",
        white: "#f8f8f8",

        grey50: "#FAFAFA",
        grey100: "#F5F5F5",
        grey200: "#E5E5E5",
        grey300: "#D4D4D4",
        grey400: "#A3A3A3",
        grey500: "#737373",
        grey600: "#525252",
        grey700: "#404040",
        grey800: "#262626",
        grey900: "#171717",

        accent: "#22C55E",
        accentActive: "#16A34A",
        accentHover: "#4ADE80",

        success: "#008000",
        error: "#FF0000",

        labelsPrimary: "#262626",
        labelsSecondary: "hsla(240, 6%, 25%, 0.6)",
        labelsTertiary: "hsla(240, 6%, 25%, 0.3)",
        labelsQuaternary: "hsla(240, 6%, 25%, 0.18)",
      },
    },
  },
  ruRU,
);
