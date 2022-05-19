import React from "react";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <Flex
      justify='center'
      alignItems='center'
      minH='100vh'
      w='full'
      bgGradient='radial(circle, rgba(97,208,252,1) 0%, rgba(26,112,147,1) 35%, rgba(3,80,111,1) 100%)'>
      <Container maxW='sm' bg='white' borderRadius='lg' p={6} boxShadow='lg'>
        <Divider my={4} />
        <Stack spacing={6}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor='username' fontSize='sm'>
                Username
              </FormLabel>
              <Input id='username' type='text' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='email' fontSize='sm'>
                Email address
              </FormLabel>
              <Input id='email' type='email' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password' fontSize='sm'>
                Password
              </FormLabel>
              <Input id='password' type='password' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
          </Stack>
          <Flex justifyContent='space-between' alignItems='center'>
            <Checkbox size='md' colorScheme='primary' color='gray.600'>
              <Text fontSize='sm'>Remember Me</Text>
            </Checkbox>
            <Link
              as={NavLink}
              to='/forgotPassword'
              fontSize='sm'
              color='gray.600'>
              Forgot Password?
            </Link>
          </Flex>
          <Button w='fit-content'>Simpan</Button>
        </Stack>
        <Divider my={4} />
      </Container>
    </Flex>
  );
};

export default Register;
