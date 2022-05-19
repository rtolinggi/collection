const ButtonStyle = {
  baseStyle: {
    fontWeight: "medium",
    letterSpacing: "0.8px",
    _focus: {
      ring: "4px",
      ringColor: "ring",
      outline: "none",
    },
  },
  variants: {
    primary: {
      px: "1.7rem",
      bg: "primary.600",
      color: "white",
      boxShadow: "md",
      _hover: {
        bg: "primary.500",
      },
      borderRadius: "sm",
    },
  },
  defaultProps: {
    variant: "primary",
    w: "full",
  },
};

export default ButtonStyle;
