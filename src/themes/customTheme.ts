import { createTheme } from "@mui/material/styles";
import { ruRU } from "@mui/material/locale";

const titleLarge = {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "32px",
  fontStyle: "normal",
  lineHeight: "normal",
};

const titleFirst = {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "28px",
  fontStyle: "normal",
  lineHeight: "34px" /* 121.429% */,
  letterSpacing: "-0.4px",
};

const titleSecond = {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "22px",
  fontStyle: "normal",
  lineHeight: "28px" /* 127.273% */,
  letterSpacing: "-0.4px",
};

const titleThird = {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "20px",
  fontStyle: "normal",
  lineHeight: "25px" /* 125% */,
  letterSpacing: "-0.4px",
};

const textBody = {
  fontSize: "24px",
  fontStyle: "normal",
  lineHeight: "normal",
};

const textCallout = {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "21px" /* 131.25% */,
  letterSpacing: "-0.4px",
};

const textSubheadline = {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "15px",
  fontStyle: "normal",
  lineHeight: "20px",
  letterSpacing: "-0.4px",
};

const textFootnote = {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "13px",
  fontStyle: "normal",
  lineHeight: "18px",
  letterSpacing: "-0.4px",
};

const captionFirst = {
  fontSize: "20px",
  fontStyle: "normal",
  lineHeight: "normal",
};

const captionSecond = {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "11px",
  fontStyle: "normal",
  lineHeight: "13px",
  letterSpacing: "-0.4px",
};

export const customTheme = createTheme(
  {
    components: {
      MuiButton: {
        styleOverrides: {
          sizeSmall: {
            padding: "4px 16px",
            fontSize: "14px",
            textTransform: "none",
            borderRadius: 8,
          },
          sizeMedium: {
            padding: "8px 16px",
            fontSize: "15px",
            textTransform: "none",
            borderRadius: 8,
          },
          sizeLarge: {
            padding: "12px 16px",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: 8,
          },
        },
      },
    },
    typography: {
      fontFamily: `"SF Pro", "SF Pro Display", "Helvetica", "Roboto", sans-serif`,
      // Titles
      titleLargeRegular: {
        ...titleLarge,
        fontWeight: 400,
      },
      titleLargeEmphasized: {
        ...titleLarge,
        fontWeight: 700,
      },
      titleFirstRegular: {
        ...titleFirst,
        fontWeight: 400,
      },
      titleFirstEmphasized: {
        ...titleFirst,
        fontWeight: 700,
      },
      titleSecondRegular: {
        ...titleSecond,
        fontWeight: 400,
      },
      titleSecondEmphasized: {
        ...titleSecond,
        fontWeight: 700,
      },
      titleThirdRegular: {
        ...titleThird,
        fontWeight: 400,
      },
      titleThirdEmphasized: {
        ...titleThird,
        fontWeight: 600,
      },
      // Text
      textBodyRegular: {
        ...textBody,
        fontWeight: 600,
      },
      textBodyMiddlesized: {
        ...textBody,
        fontWeight: 700,
      },
      textBodyEmphasized: {
        ...textBody,
        fontWeight: 800,
      },
      textCalloutRegular: {
        ...textCallout,
        fontWeight: 400,
      },
      textCalloutEmphasized: {
        ...textCallout,
        fontWeight: 600,
      },
      textSubheadlineRegular: {
        ...textSubheadline,
        fontWeight: 400,
      },
      textSubheadlineEmphasized: {
        ...textSubheadline,
        fontWeight: 600,
      },
      textFootnoteRegular: {
        ...textFootnote,
        fontWeight: 400,
      },
      textFootnoteEmphasized: {
        ...textFootnote,
        fontWeight: 600,
      },
      captionFirstRegular: {
        ...captionFirst,
        fontWeight: 600,
      },
      captionFirstEmphasized: {
        ...captionFirst,
        fontWeight: 800,
      },
      captionSecondRegular: {
        ...captionSecond,
        fontWeight: 400,
      },
      captionSecondEmphasized: {
        ...captionSecond,
        fontWeight: 500,
      },
    },
    palette: {
      primary: {
        main: "#1c1c1c",
        contrastText: "#fff",
      },

      secondary: {
        main: "#fff",
        contrastText: "#000",
      },

      customColors: {
        colorsWhite: "#fff",
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
