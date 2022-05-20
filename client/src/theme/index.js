import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button, InputStyle as Input } from "./components";
import globalStyle from "./styles";

const theme = extendTheme({
  styles: globalStyle,
  colors: {
    primary: {
      500: "#1a7093",
      600: "#03506f",
    },
    ring: "#a2d4e8",
  },
  components: {
    Input,
    Button,
  },
});

export default theme;
