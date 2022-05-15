const InputStyle = {
  variants: {
    filled: {
      field: {
        borderRadius: "md",
        _focus: {
          borderWidth: "1.2px",
          boxShadow: "md",
        },
      },
    },
  },
  defaultProps: {
    size: "md",
    focusBorderColor: "primary.500",
    variant: "filled",
  },
};

export default InputStyle;
