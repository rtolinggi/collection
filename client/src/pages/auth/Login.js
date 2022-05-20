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
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiAtom } from "react-icons/bi";
import { RiMailLine, RiLock2Line, RiLoginCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <Container
        as='main'
        maxW='sm'
        bg='white'
        borderRadius='lg'
        p={6}
        boxShadow='dark-lg'>
        <HStack>
          <BiAtom
            style={{
              fontSize: "1.8rem",
              color: "#03506f",
              fontWeight: "bolder",
            }}
          />
          <Heading size='md' as='h1' color='#03506f'>
            Login
          </Heading>
        </HStack>
        <Divider my={4} />
        <Stack as='form' spacing={6}>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel htmlFor='email' fontSize='sm'>
                Email address
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='primary.600'
                  fontSize='md'
                  children={<RiMailLine />}
                />
                <Input id='email' type='email' />
              </InputGroup>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password' fontSize='sm'>
                Password
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='primary.600'
                  fontSize='md'
                  children={<RiLock2Line />}
                />
                <Input id='password' type='password' />
              </InputGroup>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
          </Stack>
          <Flex justifyContent='space-between' alignItems='center'>
            <Checkbox size='md' colorScheme='primary'>
              <Text as='span' fontSize='sm'>
                Remember Me
              </Text>
            </Checkbox>
            <Text
              as={NavLink}
              to='/forgotPassword'
              color='primary.600'
              fontWeight='semibold'>
              Forgot Password?
            </Text>
          </Flex>
          <Button
            w={["full", "fit-content"]}
            size='sm'
            leftIcon={<RiLoginCircleLine />}>
            Login
          </Button>
        </Stack>
        <Divider my={4} />
        <Stack align='center'>
          <Text>
            Dont have an Account ?{" "}
            <Text
              as={NavLink}
              to='/register'
              textDecoration='none'
              fontWeight='bold'
              color='primary.600'>
              Register
            </Text>
          </Text>
        </Stack>
      </Container>
    </AuthLayout>
  );
};

export default Login;
