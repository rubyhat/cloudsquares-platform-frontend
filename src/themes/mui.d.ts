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
    primary: string;
    white: string;

    grey50: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;
    grey600: string;
    grey700: string;
    grey800: string;
    grey900: string;

    accent: string;
    accentActive: string;
    accentHover: string;

    // todo: заменить цвета в теме MUI
    success: string;
    error: string;

    labelsPrimary: string;
    labelsSecondary: string;
    labelsTertiary: string;
    labelsQuaternary: string;
  }
}
