const InputStyle = {
  variants: {
    filled: {
      field: {
        h: "2.2rem",
        borderWidth: "0.3px",
        borderRadius: "sm",
        _focus: {
          ring: "3px",
          ringColor: "ring",
          outline: "none",
        },
      },
    },
  },
  defaultProps: {
    size: "sm",
    focusBorderColor: "primary.500",
    variant: "filled",
  },
};

export default InputStyle;
