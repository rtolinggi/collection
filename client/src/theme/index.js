import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button, InputStyle as Input } from "./components";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#3BACB6",
      600: "#2F8F9D",
    },
    ring: "#82DBD8",
  },
  components: {
    Input,
    Button,
  },
});

export default theme;
