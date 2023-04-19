import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#ffd1ff",
        color: "black",
      },
    },
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#537923",
    },
  },
});

export default theme;
