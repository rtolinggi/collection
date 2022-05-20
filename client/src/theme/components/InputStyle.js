const InputStyle = {
  variants: {
    filled: {
      field: {
        borderRadius: "sm",
        _focus: {
          borderWidth: "1.2px",
          boxShadow: "md",
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
