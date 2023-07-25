import { extendTheme } from "native-base";

const tabo_theme = extendTheme({
  colors: {
    primary: {
      darker: "#311902",
      dark: "#984D07",
      main: "#F58216",
      light: "#F9B371",
      lighter: "#FDE5CE"
    },
    
    gray: {
      900: "#1A1A1A",
      800: "#333333",
      700: "#4D4D4D",
      600: "#666666",
      500: "#808080",
      400: "#999999",
      300: "#B3B3B3",
      200: "#CCCCCC",
      100: "#E6E6E6",
      50: "#F2F2F2",
    }
  },

  config: {

  },

  fontConfig: {

  },

  fonts: {

  }
});

tabo_theme.colors.primary[100]

export default tabo_theme;