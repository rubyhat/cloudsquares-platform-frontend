// mui.d.ts
import "@mui/material/styles";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    sizeSmall: true;
    sizeMedium: true;
    sizeLarge: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleLargeRegular: true;
    titleLargeEmphasized: true;
    titleFirstRegular: true;
    titleFirstEmphasized: true;
    titleSecondRegular: true;
    titleSecondEmphasized: true;
    titleThirdRegular: true;
    titleThirdEmphasized: true;

    textBodyRegular: true;
    textBodyMiddlesized: true;
    textBodyEmphasized: true;
    textCalloutRegular: true;
    textCalloutEmphasized: true;
    textSubheadlineRegular: true;
    textSubheadlineEmphasized: true;
    textFootnoteRegular: true;
    textFootnoteEmphasized: true;

    captionFirstRegular: true;
    captionFirstEmphasized: true;
    captionSecondRegular: true;
    captionSecondEmphasized: true;
  }
}
declare module "@mui/material/styles/createTypography" {
  interface Typography {
    titleLargeRegular: React.CSSProperties;
    titleLargeEmphasized: React.CSSProperties;
    titleFirstRegular: React.CSSProperties;
    titleFirstEmphasized: React.CSSProperties;
    titleSecondRegular: React.CSSProperties;
    titleSecondEmphasized: React.CSSProperties;
    titleThirdRegular: React.CSSProperties;
    titleThirdEmphasized: React.CSSProperties;

    textBodyRegular: React.CSSProperties;
    textBodyMiddlesized: React.CSSProperties;
    textBodyEmphasized: React.CSSProperties;
    textCalloutRegular: React.CSSProperties;
    textCalloutEmphasized: React.CSSProperties;
    textSubheadlineRegular: React.CSSProperties;
    textSubheadlineEmphasized: React.CSSProperties;
    textFootnoteRegular: React.CSSProperties;
    textFootnoteEmphasized: React.CSSProperties;

    captionFirstRegular: React.CSSProperties;
    captionFirstEmphasized: React.CSSProperties;
    captionSecondRegular: React.CSSProperties;
    captionSecondEmphasized: React.CSSProperties;
  }
}

declare module "@mui/material/styles" {
  // Шрифты
  interface TypographyVariants {
    titleLargeRegular: React.CSSProperties;
    titleLargeEmphasized: React.CSSProperties;
    titleFirstRegular: React.CSSProperties;
    titleFirstEmphasized: React.CSSProperties;
    titleSecondRegular: React.CSSProperties;
    titleSecondEmphasized: React.CSSProperties;
    titleThirdRegular: React.CSSProperties;
    titleThirdEmphasized: React.CSSProperties;

    textBodyRegular: React.CSSProperties;
    textBodyMiddlesized: React.CSSProperties;
    textBodyEmphasized: React.CSSProperties;
    textCalloutRegular: React.CSSProperties;
    textCalloutEmphasized: React.CSSProperties;
    textSubheadlineRegular: React.CSSProperties;
    textSubheadlineEmphasized: React.CSSProperties;
    textFootnoteRegular: React.CSSProperties;
    textFootnoteEmphasized: React.CSSProperties;

    captionFirstRegular: React.CSSProperties;
    captionFirstEmphasized: React.CSSProperties;
    captionSecondRegular: React.CSSProperties;
    captionSecondEmphasized: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleLargeRegular?: React.CSSProperties;
    titleLargeEmphasized?: React.CSSProperties;
    titleFirstRegular?: React.CSSProperties;
    titleFirstEmphasized?: React.CSSProperties;
    titleSecondRegular?: React.CSSProperties;
    titleSecondEmphasized?: React.CSSProperties;
    titleThirdRegular?: React.CSSProperties;
    titleThirdEmphasized?: React.CSSProperties;

    textBodyRegular?: React.CSSProperties;
    textBodyMiddlesized: React.CSSProperties;
    textBodyEmphasized?: React.CSSProperties;
    textCalloutRegular?: React.CSSProperties;
    textCalloutEmphasized?: React.CSSProperties;
    textSubheadlineRegular?: React.CSSProperties;
    textSubheadlineEmphasized?: React.CSSProperties;
    textFootnoteRegular?: React.CSSProperties;
    textFootnoteEmphasized?: React.CSSProperties;

    captionFirstRegular?: React.CSSProperties;
    captionFirstEmphasized?: React.CSSProperties;
    captionSecondRegular?: React.CSSProperties;
    captionSecondEmphasized?: React.CSSProperties;
  }
  // Цвета
  interface Palette {
    customColors?: PaletteCustomColors;
  }
  interface PaletteOptions {
    customColors?: PaletteCustomColors;
  }
  interface PaletteCustomColors {
    colorsWhite: string;
    colorsWhiteDark: string;
    colorsGrey: string;
    colorsGreyLight: string;
    colorsGreyDark: string;
    colorsBlue: string;

    colorsAccent: string;
    colorsAccentActive: string;
    colorsAccentHover: string;

    colorsAccentDark: string;
    colorsAccentActiveDark: string;
    colorsAccentHoverDark: string;

    colorsAccentLight: string;
    colorsAccentActiveLight: string;
    colorsAccentHoverLight: string;

    colorsAccentSecondary;

    // todo: заменить цвета в теме MUI
    colorsSuccess: string;
    colorsError: string;

    labelsPrimary: string;
    labelsSecondary: string;
    labelsTertiary: string;
    labelsQuaternary: string;
  }
}
