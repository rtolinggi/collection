import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

const InputCostum = ({
  title = null,
  register,
  required,
  InputLeftIcon,
  name,
  errorMessage = null,
  ...props
}) => {
  function capitalize(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const titleCapitalize = title ? capitalize(title) : null;
  return (
    <FormControl isInvalid={errorMessage ? true : false}>
      <FormLabel htmlFor={titleCapitalize} fontSize='sm'>
        {title ? titleCapitalize : name}
      </FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='primary.600'
          fontSize='md'
          children={InputLeftIcon}
        />
        <Input
          placeholder={titleCapitalize}
          {...register(name, { required })}
          {...props}
        />
      </InputGroup>
      <FormErrorMessage fontSize='xs'>
        {errorMessage ? errorMessage : null}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputCostum;
