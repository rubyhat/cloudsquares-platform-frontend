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
    body3: true;
    body4: true;

    caption1: true;
    caption2: true;
    caption3: true;
  }
}
declare module "@mui/material/styles/createTypography" {
  interface Typography {
    body3: React.CSSProperties;
    body4: React.CSSProperties;

    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
  }
}

declare module "@mui/material/styles" {
  // Шрифты
  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;

    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    body4: React.CSSProperties;

    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
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
