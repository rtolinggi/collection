const ButtonStyle = {
  baseStyle: {
    fontWeight: "medium",
    letterSpacing: "0.5px",
    _focus: {
      ring: "4px",
      ringColor: "ring",
      outline: "none",
    },
  },
  sizes: {},
  variants: {
    primary: {
      px: "1.5rem",
      bg: "primary.600",
      color: "white",
      boxShadow: "md",
      _hover: {
        bg: "primary.500",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
    w: "fit-content",
  },
};

export default ButtonStyle;
