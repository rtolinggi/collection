import React from "react";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiAtom } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Flex
      justify='center'
      alignItems='center'
      minH='100vh'
      w='full'
      bgGradient='radial(circle, rgba(97,208,252,1) 0%, rgba(26,112,147,1) 35%, rgba(3,80,111,1) 100%)'>
      <Container
        as='main'
        maxW='sm'
        bg='white'
        borderRadius='lg'
        p={6}
        boxShadow='lg'>
        <HStack>
          <BiAtom
            style={{
              fontSize: "1.8rem",
              color: "#03506f",
              fontWeight: "bolder",
            }}
          />
          <Heading as='h1' size='md' color='#03506f'>
            Login
          </Heading>
        </HStack>

        <Divider my={4} />
        <Stack spacing={6}>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel htmlFor='email' fontSize='sm'>
                Email address
              </FormLabel>
              <Input id='email' type='email' size='md' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password' fontSize='sm'>
                Password
              </FormLabel>
              <Input id='password' type='password' size='md' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
          </Stack>
          <Flex justifyContent='space-between' alignItems='center'>
            <Checkbox size='md' colorScheme='primary' color='gray.600'>
              <Text fontSize='sm'>Remember Me</Text>
            </Checkbox>
            <Text
              as={NavLink}
              to='/forgotPassword'
              fontSize='sm'
              color='gray.600'>
              Forgot Password?
            </Text>
          </Flex>
          <Button w='fit-content' size='md'>
            Login
          </Button>
        </Stack>
        <Divider my={4} />
        <Stack align='center'>
          <Text
            as={NavLink}
            to='/register'
            fontSize='sm'
            fontWeight='semibold'
            color='gray.600'
            textDecoration='none'>
            Dont have an Account ?{" "}
            <Text as='span' fontWeight='bold' fontSize='sm' color='primary.600'>
              Register
            </Text>
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Login;
