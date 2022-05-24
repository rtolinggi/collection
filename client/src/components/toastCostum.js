const toastCostum = (title, description, status) => {
  const style = {
    title: title,
    description: description,
    status: status,
    duration: 5000,
    variant: "left-accent",
    position: "top-right",
    containerStyle: {
      width: "sm",
      maxWidth: "100%",
    },
  };
  return style;
};

export default toastCostum;
