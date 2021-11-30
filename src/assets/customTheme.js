import { createTheme } from "@mui/material/styles";
import { purple, orange, red } from "@mui/material/colors";

const primaryColor = "#fbc531";
const secondaryColor = "#00a8ff";
const dangerColor = red[900];

const customtheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          "&:hover": { color: secondaryColor },
        },
      },
    },
  },
});

export default customtheme;
