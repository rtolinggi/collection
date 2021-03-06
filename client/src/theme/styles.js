import { mode } from "@chakra-ui/theme-tools";

const globalStyle = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      fontSize: "sm",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("#eff6ff", "gray.800")(props),
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
};

export default globalStyle;
