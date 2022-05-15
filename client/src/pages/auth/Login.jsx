import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import {
  Input,
  Button,
  Box,
  Stack,
  Divider,
  InputGroup,
  FormControl,
  InputLeftElement,
  FormLabel,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box
      boxShadow="lg"
      rounded="lg"
      bg="white"
      p="2rem"
      w="sm"
      mx={{ base: "0", sm: "2" }}
    >
      <Stack spacing="6">
        <Divider />
        <Stack w="full">
          <FormControl>
            <FormLabel htmlFor="email" fontWeight="normal" mb="1">
              Email address
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<HiOutlineMail color="#718096" size="20" />}
              />
              <Input placeholder="Email" id="email" type="email" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password" fontWeight="normal" mb="1">
              Password
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiLock color="#718096" size="20" />}
              />
              <Input placeholder="Password" id="password" type="password" />
            </InputGroup>
          </FormControl>
        </Stack>
        <Stack>
          <Button w={{ base: "full", sm: "fit-content" }}>Login</Button>
        </Stack>
        <Divider />
      </Stack>
    </Box>
  );
};

export default Login;
