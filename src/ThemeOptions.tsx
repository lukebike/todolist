import type { ThemeOptions } from "@mui/material/styles";

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      // Text
      main: "#897f91",
      contrastText: "#f8f9fa",
    },
    secondary: {
      main: "#f50057",
    },
    //Background
    background: {
      default: "#201d26",
    },
    //
    // Option Background
    warning: {
      main: "#26232d",
    },
    // Button
    success: {
      main: "#43182b",
    },
    // Drawer
    info: {
      main: "#191017",
    },
    // Button on hover
    error: {
      main: "#761e41",
    },
  },
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#511d55",
      contrastText: "#a04168",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f9f3f9",
    },
    warning: {
      main: "#f6e4f2",
    },
    success: {
      main: "#a04168",
    },
    info: {
      main: "#f2e6f4",
    },
    error: {
      main: "#d36c9c",
    },
  },
};
