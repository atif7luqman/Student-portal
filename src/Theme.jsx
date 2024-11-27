import { createTheme } from "@mui/material/styles";

const theme = (mode) =>
  createTheme({
    palette: {
      mode, // 'light' or 'dark'
      primary: {
        main: "#000000", // Main Color
      },
      secondary: {
        main: "#06B2AF", // teal or Accent Color
      },
      background: {
        default: mode === "light" ? "#FFFFFF" : "#1A1A1A",
        paper: mode === "light" ? "#FFFFFF" : "#1A1A1A",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#FFFFFF",
        secondary: "#919191",
        main: mode === "light" ? "#FFFFFF" : "#000000",
      },
      shades: {
        light: "#E4E4E3",
        medium: "#B3B3B3",
        dark: "#000000",
      },
    },
    typography: {
      fontFamily: "Verdana, Arial, sans-serif",
    },
  });

export default theme;
