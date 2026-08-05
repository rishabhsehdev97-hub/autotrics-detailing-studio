import { Platform } from "react-native";

export const Colors = {
  light: {
    background: "#050505",
    backgroundElement: "#121212",
    backgroundSelected: "#1C1C1C",

    primary: "#00C8FF",
    primaryDark: "#0099CC",

    text: "#FFFFFF",
    textSecondary: "#8E99A7",

    border: "#222222",
    success: "#15C46B",
    warning: "#FFB800",
    danger: "#FF4D4F",
  },

  dark: {
    background: "#050505",
    backgroundElement: "#121212",
    backgroundSelected: "#1C1C1C",

    primary: "#00C8FF",
    primaryDark: "#0099CC",

    text: "#FFFFFF",
    textSecondary: "#8E99A7",

    border: "#222222",
    success: "#15C46B",
    warning: "#FFB800",
    danger: "#FF4D4F",
  },
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  android: {
    sans: "sans-serif",
    serif: "serif",
    rounded: "sans-serif",
    mono: "monospace",
  },
  web: {
    sans: "Inter, sans-serif",
    serif: "Georgia, serif",
    rounded: "Inter, sans-serif",
    mono: "monospace",
  },
});

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Radius = {
  sm: 8,
  md: 14,
  lg: 22,
  xl: 30,
};

export const BottomTabInset =
  Platform.select({
    ios: 50,
    android: 70,
  }) ?? 0;

export const MaxContentWidth = 900;